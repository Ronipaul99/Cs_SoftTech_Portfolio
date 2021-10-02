require('dotenv').config()
const express = require('express');
const router = express.Router();
const setupUser = require('../Model/setupDb')
const userDAO = require('../Model/userDAO')
const userService = require('../services/UserService')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { verifyAccessToken } = require('../Utilities/jwt_helper');
const { toolresults } = require('googleapis/build/src/apis/toolresults');

router.get('/setupUserDB', (req, res, next) => {
  setupUser.setupDb().then((data) => {
    console.log(data);
    res.send(data)
  }).catch((err) => {
    next(err)
  })
})
router.get('/verifyRegistration/:accessToken/:userId', (req, res, next) => {
  token = req.params.accessToken
  CS_U_Id = req.params.userId
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      res.send(createError.Unauthorized())
    }
    userDAO.updateActivationStatus(CS_U_Id, 1).then(response => {
      if (response) {
        res.send(token)
      } else {
        res.send(createError.RequestTimeout())
      }
    })
  })
})

router.post('/Register',(req,res,next)=>{
    const user = req.body
    userService.Register(user).then(response=>{
      res.send(response)
    }).catch(err=>{
      next(err)
      // console.log(err);
    })
})

router.post('/login',(req,res,next)=>{
    const userEmail= req.body.Email
    const password = req.body.password
    userService.login(userEmail , password).then(user=>{
      res.send(user)
    }).catch(err=>{
      next(err)
    })

})

router.delete('/deleteUser/:id',(req,res,next)=>{
    const userId = req.params.id
    userDAO.deleteUser(userId).then(response=>{
      if(response){
        res.send("delete successfully")
      }else{
        res.send("Can't delete user")
      }
        
    }).catch(err=>{
      next(err)
    })
})



module.exports = router;