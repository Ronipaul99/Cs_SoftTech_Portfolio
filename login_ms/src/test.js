const UserDAO = require('./Model/userDAO')
const setupDB = require('./Model/setupDb')

setupDB.setupDb().then(data=>{
    console.log(data);
}).catch(err=>{
    err
})