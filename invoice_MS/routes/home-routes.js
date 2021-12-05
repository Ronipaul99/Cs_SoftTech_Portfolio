const express = require('express');
const { createDoc, getDoc, uploadDoc } = require('../controllers/homeController');
var find = require('list-files');
const router = express.Router();
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory for getting the files from the directory
const directoryPath = path.join(__dirname, 'uploadDocs');


// router.get('/download', generatePdf);
router.post('/download', (req, res) => {
  var data = {
    user_ID: req.body.userId,
    Company_Name: req.body.Company_Name,
    Street_Address: req.body.Street_Address,
    City: req.body.City,
    ST: req.body.ST,
    ZIP_Code: req.body.ZIP_Code,
    Phone_PH: req.body.Phone_PH,
    GST: req.body.GST,

    QUANTITY: req.body.projectDetails.QUANTITY,
    PROJECT_DESCRIPTION: req.body.projectDetails.PROJECT_DESCRIPTION,
    HSN_SAS_CODE: req.body.projectDetails.HSN_SAS_CODE,
    PRICE: req.body.projectDetails.PRICE,
    GST: req.body.projectDetails.GST,
    TAX: req.body.projectDetails.TAX,
    TOTAL_AMOUNT: req.body.projectDetails.TOTAL_AMOUNT,
    subTotal: req.body.projectDetails.subTotal
  }


  createDoc(data)
  res.send(data)
})
router.get('/getDocsById/:userId', (req, res) => {
  getDoc(req.params.userId).then((data) => {
    res.send(data);
  })

})
router.get('/getUploadedDocuments', (req, res) => {

  var fileNames=[]
  fs.readdir(directoryPath, function (err, files) {
    
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    
    files.forEach(function (file) {
      let extension=(file.split('.')[1]).toLocaleLowerCase()
      fileNames.push({fileName:file,fileType:extension,filePath:directoryPath})
    });
    res.json({'fileNames':fileNames})
  });
  
})
router.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/uploadDocs/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    console.log(file.name);
    var fileData = {
      doc_name: file.name
    }
    uploadDoc(fileData)
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});
module.exports = router;