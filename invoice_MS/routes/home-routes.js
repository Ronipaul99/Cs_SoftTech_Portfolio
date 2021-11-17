const express = require('express');
const { createDoc,getDoc } = require('../controllers/homeController');

const router = express.Router();

// router.get('/download', generatePdf);
router.post('/download', (req, res) => {
    var data  = {
        user_ID:req.body.userId,
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
router.get('/getDocsById/:userId',(req,res)=>{
    getDoc(req.params.userId).then((data)=>{
        res.send(data);
    })
    
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
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });
module.exports = router;