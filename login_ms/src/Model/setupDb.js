const collection = require('../Utilities/connection');

const userData = [
    {
        CS_U_Id: "CU1001",
        userProfile: {
            userName: "Roni paul",
            mobileNo: 9903245034,
            userType: "Admin"

        },
        userCred: {
            email: "ronipaul9972@gmail.com",
            password: "Roni#8981",
        },
        activationStatus: true
    }
]
const permsData = [
    {
        CS_U_Id: "U1001",
        access1: true,
        access2: false,
        access3: true,
        access4: true,
        access5: false
    }
]

console.log(collection);
exports.setupDb = () => {
    console.log("setup in progress........");
    return collection.getUserCollection().then((user) => {
        return user.deleteMany().then(() => {
            return user.insertMany(userData).then((data) => {
                return collection.getPermissionCollection().then((Permss) => {
                    return Permss.deleteMany().then(() => {
                        return Permss.insertMany(permsData).the((data1) => {
                            if (data1) return "Insertion Successfull"
                            else {
                                let err = new Error("Insertion failed");
                                err.status = 400;
                                throw err;
                            }
                        })
                    })
                })

            })
        })
    })
}