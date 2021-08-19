const collection = require('../Utilities/connection');

const UserDAO = {}

UserDAO.createCSID = () => {
    return collection.getUserCollection().then(userDB=>{
        return userDB.find({},{_id:0}).then(response=>{
            if(response.length>0) {
                var max_Id = parseInt(response[0].CS_U_Id.slice(2,)[1])
                response.forEach(user=>{
                    var user_ID = parseInt(user.CS_U_Id.slice(2,user.CS_U_Id.length))
                    if(user_ID>max_Id){
                        max_Id=user_ID
                    }
                })
                return 'CU'+(max_Id+1)
            }else{
                return 'CU1001'
            }
        })
    })
}

UserDAO.CreateUser = (user) => {
    return collection.getUserCollection().then(userDB=>{
        return userDB.create(user).then(new_user=>{
            if(new_user){
                return new_user
            }else{
                return null
            }
        })
    })
}

UserDAO.deleteUser = (id) => {
    return collection.getUserCollection().then(userDB=>{
        return userDB.deleteOne({CS_U_Id:id}).then(response=>{
            if(response.deletedCount==1){
                return true
            }else{
                false
            }
                
        })
    })
}
UserDAO.getUserById = (id) => {
    return collection.getUserCollection().then((userDB)=>{
        return userDB.findOne({CS_U_Id:id},{_id:0}).then(user=>{
            if(user){
                return user
            }else{
                return null
            }
        })
    })
}

UserDAO.getUserByEmail = (email) => {
    return collection.getUserCollection().then(userDB=>{
        return userDB.find({"userCred.email":email},{_id:0}).then(user=>{
            if(user.length>0){
                return user
            }else{
                return null
            }
        })
    })
}
UserDAO.getAllUser = () => {
    return collection.getUserCollection().then((userDB)=>{
        return userDB.findOne({},{_id:0}).then(users=>{
            if(users){
                return users
            }else{
                return null
            }
        })
    })
}

UserDAO.updateActivationStatus = (userId,statusCode) => {
    return collection.getUserCollection().then(userDB=>{
        return userDB.updateOne({CS_U_Id:userId},{$set:{activationStatus:statusCode}}).then(response=>{
            if(response.nModified==1){
                return 1
            }else{
                return 0
            }
        }).catch(err=>{
            console.log(err);
        })
    })
}

module.exports = UserDAO