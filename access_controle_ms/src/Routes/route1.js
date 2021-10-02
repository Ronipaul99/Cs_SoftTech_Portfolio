const express = require('express');
const router = express.Router();
const userService = require('../services/UserService')


router.get("/", (req, res, next) => {
    res.send({ message: "hello wolcome to Acces Controle serviece" })
})

router.get('/getPermissions/:userId', function (req, res, next) {
    let userId = req.params.userId;
    userService.getPermission(userId).then(function (permissions) {
        res.json(permissions);
        res.status = 200;
    }).catch(err => next(err));
})
//Post permissions
router.post("/pushPermissions/:CS_U_Id", function (req, res, next) {
    console.log("Hi")
    let accesses = {
        userId: req.params.CS_U_Id,
        access: {
            project: req.body.project,
            billing: req.body.billing,
            docs: req.body.docs,
            createProject: req.body.createProject,
            editProject: req.body.editProject,
            sendquote: req.body.sendquote,
            approveTask: req.body.approveTask,
            approveBilling: req.body.approveBilling,
            approveAccess: req.body.approveAccess,
            approveresource: req.body.approveresource,
            createUser: req.body.createUser,
            createFolder: req.body.createFolder,
            uploadFile: req.body.uploadFile,
            notification: req.body.notification

        }
    }
    console.log(accesses)
    userService.pushPermission(accesses).then(function (perm) {
        res.json(perm);
        res.status = 200;
    }).catch(err => next(err));
})

module.exports = router;