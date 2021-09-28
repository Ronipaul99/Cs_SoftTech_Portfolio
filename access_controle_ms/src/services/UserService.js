const accessModel = require('../Model/AccessModel')

const userService = {}

userService.getPermission = (userId) => {
    return accessModel.getPermission(userId).then((perms) => {
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

    return accessModel.pushPermission(accesses).then((perm) => {
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