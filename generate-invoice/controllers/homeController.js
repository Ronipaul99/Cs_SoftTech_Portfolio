const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const options = require('../helpers/options');
// const data = require('../helpers/normal_data');

var data=[]
var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}
function generateFileName(data) {
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var name= date.toString()+"_"+month.toString()+"_"+year.toString()+"_"
    console.log("File generating...Please wait....");
    return name;
}
// console.log(data);
const createDoc=(infor)=>{
    data.push(infor);
    generatePdf()
}
const generatePdf = async (req, res, next) => {
    const html = fs.readFileSync(path.join(__dirname, '../views/invoice.html'), 'utf-8');
    var dtm=generateFileName();
    randomNum=((Math.random().toString())+"").split(".")[1]
    const filename = dtm+(randomNum) + '_doc' + '.pdf';
    
    let array = [];
    data.forEach(d => {
        const prod = {
            Company_Name: d.Company_Name,
            Street_Address: d.Street_Address,
            City: d.City,
            ST: d.ST,
            ZIP_Code: d.ZIP_Code,
            Phone_PH: d.Phone_PH,
            GST: d.GST,

            QUANTITY: d.QUANTITY,
            PROJECT_DESCRIPTION: d.PROJECT_DESCRIPTION,
            HSN_SAS_CODE: d.HSN_SAS_CODE,
            PRICE: d.PRICE,
            GST: d.GST,
            TAX: d.TAX,
            TOTAL_AMOUNT: d.TOTAL_AMOUNT,
            subTotal: d.subTotal,
            totalInWard: inWords(d.TOTAL_AMOUNT)
        }
        array.push(prod);
    });

    // console.log(inWords(array[0].TOTAL_AMOUNT));
    const obj = {
        prodlist: array,
    }
    const document = {
        html: html,
        data: {
            products: obj
        },
        path: './docs/' + filename
    }
    pdf.create(document, options)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    const filepath = 'http://localhost:3000/docs/' + filename;

    // res.render('download', {
    //     path: filepath
    // });
    // res.send("done")
}


module.exports = {
    createDoc
}