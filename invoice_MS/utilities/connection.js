const { Schema } = require("mongoose");
const Mongoose = require("mongoose")

Mongoose.Promise = global.Promise;

// Mongoose.set('useCreateIndex', true)



let invoiceSchema = Schema({
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
let docSchema=Schema({
    "doc_name": String
},{collection: "Documents"})
let config = ""
let collection = {};
const url = "mongodb://localhost:27017/Softech";
collection.getInvoiceCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Invoice', invoiceSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database Softech");
        err.status = 500;
        throw err;
    })
}
collection.getDocCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Documents', docSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database Softech");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;

