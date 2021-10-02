const { Schema } = require("mongoose");
const Mongoose = require("mongoose")


Mongoose.Promise = global.Promise;

Mongoose.set('useCreateIndex', true)


let permissionSchema = Schema({

    userId: String,
    access: {
        project: Boolean,
        billing: Boolean,
        docs: Boolean,
        createProject: Boolean,
        editProject: Boolean,
        sendquote: Boolean,
        approveTask: Boolean,
        approveBilling: Boolean,
        approveAccess: Boolean,
        approveresource: Boolean,
        createUser: Boolean,
        createFolder: Boolean,
        uploadFile: Boolean,
        notification: Boolean

    }

}, { collection: "Permissions" })
const userSchema = Schema({
    CS_U_Id: { type: String , required: true , unique: true},
    userProfile:{
        userName: { type: String , required: true },
        mobileNo:{ type: Number , required: true},
        userType: { type: String, enum: ['Admin', 'developer', 'customer'] }

    },
    userCred:{
        email:{ type: String , required: true},
        password:{ type: String , required: true},
    },
    activationStatus:{ type: Number , required: true}
    //ststus code 0 = inactive 
    // ststus code 1 = Active
    // ststus code 2 = suspended
}, { collection: "User" });
let collection = {};


const url = "mongodb://localhost:27017/Softech";
if (Mongoose.Connection.readyState === 1) {
    console.log("Connection established")
    Mongoose.connection.close()
}
collection.getUserCollection = () => {
    console.log(url)
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        console.log("test2")
        return database.model('User', userSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database USER");
        err.status = 500;
        throw err;
    })
}
collection.getPermissionCollection = () => {
    //console.log("chk");
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Permissions', permissionSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database PERMISSION");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;

