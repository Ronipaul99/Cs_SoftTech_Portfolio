const userDAO = require('../Model/userDAO')
const bcrypt = require('bcrypt')
const createError = require('http-errors')
const auth_controller = require('../Model/auth_controler')

const userService = {}

userService.Register = (user) => {

    return userDAO.getUserByEmail(user.userCred.email).then(userData=>{
        var password=""
        if(userData){
            let err = new Error("User already Exist with this email")
            err.status = 401
            throw err
        } else {
            return bcrypt.hash(user.userCred.password, 10).then(data => {
                password = data
                user.userCred.password = password
                user.activationStatus = 0
                return userDAO.createCSID().then(CsUid => {
                    user.CS_U_Id = CsUid

                    return userDAO.CreateUser(user).then(response=>{
                        if(!response){
                            let err = new Error("Failed to register the user : "+user.userProfile.userName)

                            err.status = 501
                            throw err
                        } else {
                            return auth_controller.sendMail(user).then(data => {
                                return data;

                            }).catch(err=>{
                                throw err
                            })
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(err => {
                    console.log(err);
                })

            }).catch(err => {
                console.log(err);
            })

        }
    })
}


userService.login = (email , password) => {
    return userDAO.getUserByEmail(email).then(user=>{
        if(!user){
            let err = new Error("Can't find user with this email: "+email)
                err.status = 401
                throw err
        }
        //console.log(user[0]);
        if(user[0].activationStatus!==1){
            let err = new Error("Account Deactivated")
                err.status = 402
                throw err
        }else if(user[0].activationStatus===1){
            return bcrypt.compare(password,user[0].userCred.password).then(result=>{
                if(result){
                     return user[0].userProfile
                }else{
                    let err = new Error("Authentication failed wrong pasword")
                    err.status = 401
                    throw err
                }
            })

        }
    })
}
userService.getPermission = (userId) => {
    return auth_controller.getPermission(userId).then((perms) => {
        if (perms == null) {
            let err = new Error("Not authorised to any service !")
            err.status = 406
            throw err
        }
        else {
            return perms;

        }
    })
}
userService.pushPermission = (accesses) => {

    return auth_controller.pushPermission(accesses).then((perm) => {
        if (perm == null) {
            let err = new Error("Cant authorise !")
            err.status = 406
            throw err
        }
        else {
            return perm;

        }

    })
}


module.exports = userService