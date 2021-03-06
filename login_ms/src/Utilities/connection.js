const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
const consul = require("consul")()

Mongoose.Promise = global.Promise;

Mongoose.set('useCreateIndex', true)


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

let permissionSchema = Schema({
    CS_U_Id:String,
    access1: Boolean,
    access2: Boolean,
    access3: Boolean,
    access4: Boolean,
    access5: Boolean
}, { collection: "Permissions" })

let config = ""
let collection = {};


consul.kv.get('CSsoftMSConfig',(err,result)=>{
    config=JSON.parse(result.Value)
    //console.log(config);
    // const url = `${config.DataSource}://${config.DbHost}:${config.DbPort}/${config.DbName}`;
    const url = "mongodb://localhost:27017/Softech";
    if(Mongoose.Connection.readyState === 1){
        Mongoose.connection.close()
    }
    // console.log(collection);
    collection.getUserrCollection = () => {
        return Mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true}).then((database) => {
            return database.model('User', userSchema)
        }).catch((error) => {
            let err = new Error("Could not connect to Database User");
            err.status = 500;
            throw err;
        })
    }
})


const watch = consul.watch({
    method : consul.kv.get,
    options:{
        key : 'CSsoftMSConfig'
    },
    backoffFactor:1000,

})
//console.log(watch);

watch.on('change',(data , resw)=>{
    //console.log(data.Value);
    config=JSON.parse(data.Value)
    //console.log(config);
    // const url = `${config.DataSource}://${config.DbHost}:${config.DbPort}/${config.DbName}`;
    const url = "mongodb://localhost:27017/Softech";
    if(Mongoose.Connection.readyState === 1){
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
    collection.getPermissionCollection = () =>{
        //console.log("chk");
        return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
            return database.model('Permissions', permissionSchema)
        }).catch((error) => {
            let err = new Error("Could not connect to Database PERMISSION");
            err.status = 500;
            throw err;
        })
    }
})

module.exports = collection;

