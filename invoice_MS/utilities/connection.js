const { Schema } = require("mongoose");
const Mongoose = require("mongoose")

Mongoose.Promise = global.Promise;

// Mongoose.set('useCreateIndex', true)



let permissionSchema = Schema({
    "user_ID": String,
    "Company_Name": String,
    "Street_Address": String,
    "City": String,
    "ST": String,
    "ZIP_Code": String,
    "Phone_PH": Number,
    "GST": Number,
    "QUANTITY": Number,
    "PROJECT_DESCRIPTION": String,
    "HSN_SAS_CODE": Number,
    "PRICE": Number,
    "TAX": Number,
    "TOTAL_AMOUNT": Number,
    "subTotal": Number
}, { collection: "Invoice" })

let config = ""
let collection = {};
const url = "mongodb://localhost:27017/Softech";
collection.getInvoiceCollection = () => {
    console.log(url)
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        console.log("test2")
        return database.model('Invoice', permissionSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database USER");
        err.status = 500;
        throw err;
    })
}


module.exports = collection;

