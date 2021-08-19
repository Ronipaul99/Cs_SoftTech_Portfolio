require('dotenv').config()
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = {
    signAccessToken2 : (userId) => {
        return new Promise(( resolve , reject )=> {
            const payload ={}
            const secret = process.env.ACCESS_TOKEN_SECRET
            const options = {
                expiresIn:'1h',
                issuer: 'cssoftech.com',
                audience: userId
            }
            jwt.sign(payload , secret , options , (err,token)=>{
                if(err){
                    console.log(err);
                    reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },

    verifyAccessToken : (req,res,next) => {
        if(!req.headers['authorization']) return next(createError.Unauthorized())
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,payload)=>{
            if(err){
                console.log(err);
                next(createError.Unauthorized())
            }
            req.payload= payload
            next()
        
        })

    }

}

