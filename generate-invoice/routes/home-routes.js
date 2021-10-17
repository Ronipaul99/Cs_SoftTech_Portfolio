const express = require('express');
const { createDoc } = require('../controllers/homeController');

const router = express.Router();

// router.get('/download', generatePdf);
router.post('/download', (req, res) => {
    var data  = {
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
module.exports = router;