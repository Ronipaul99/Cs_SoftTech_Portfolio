const connection = require('../Utilities/connection');
const auth_controller = {}


auth_controller.getPermission = (userId) => {
    return connection.getPermissionCollection().then((collection) => {
        return collection.find({ "userId": userId }, { _id: 0 }).then((permissions) => {
            if (permissions != null)
                return permissions;
            else
                return null;
        })
    })

}


auth_controller.pushPermission = (permission) => {
    return connection.getUserCollection().then((userCollection) => {
        return userCollection.findOneAndUpdate({ "userId": permission.userId }).then((user) => {
            return connection.getPermissionCollection().then((permsCollection) => {
                if (user) {
                    return permsCollection.create(permission).then((data) => {
                        if (data)
                            return data;
                        else
                            return null;
                    })
                }
            })
        })
    })
}
module.exports = auth_controller