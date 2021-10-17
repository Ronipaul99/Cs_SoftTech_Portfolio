import React from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const axios = require('axios');
function Invoice(props) {
    const exportPdf = () => {

        html2canvas(document.querySelector("#capture")).then(canvas => {
            document.body.appendChild(canvas);  // if you want see your screenshot in body.
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape', 'px', 'a4', false);
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf");
        });

    }
    const exportToPdf = (event) => {
        var data = {
            "Company_Name": "ABC enterprise",
            "Street_Address": "chatarMatha Road",
            "City": "Kolkata",
            "ST": "12/12",
            "ZIP_Code": "Kolkata- 700002",
            "Phone_PH": 1234567890,
            "GST": 12587459658,
            "projectDetails": {
                "QUANTITY": 2,
                "PROJECT_DESCRIPTION": "Software Renewal",
                "HSN_SAS_CODE": 998313,
                "PRICE": 2500.00,
                "GST": 18,
                "TAX": 450.00,
                "TOTAL_AMOUNT": 1234567890,
                "subTotal": 12345678
            }
        }
        axios.post("http://localhost:3000/download", data)
            .then(response => {
                console.log(response.data);
            });
    }
    return (
        <div className="container board ">

            <div className="col-md-12 offset-0 " id='capture'>
                <div className="invoice">
                    <div class="invoice-company text-inverse f-w-600 float-right">
                        <span class="pull-right hidden-print pdfexport">
                            <button type="button" class="btn btn-info" onClick={exportPdf}>Download Invoice</button>
                        </span>
                    </div>
                    <div className="invoice-company text-inverse f-w-600" >
                        CreationSoul Soft-Tech
                    </div>
                    <div className="invoice-header">
                        <div className="invoice-from">
                            <small>from</small>
                            <div className="m-t-5 m-b-5">
                                <div className="text-inverse">CreationSoul Soft-Tech</div>
                                <div>95, Sreema Road, Kolkata 700065</div>
                                <div>Phone: 7003990798</div>
                                <div>GST: 19BORPD8133H1ZM</div>
                            </div>
                        </div>
                        <div className="invoice-to">
                            <small>to</small>
                            <div className="m-t-5 m-b-5">
                                <strong className="text-inverse">this.Company_Name </strong>
                                <div>this.Street_Address</div>
                                <div>this.ZIP_Code</div>
                                <div>Phone:  this.Phone_PH</div>
                            </div>
                        </div>
                        <div className="invoice-date">
                            <small>Invoice / Date</small>
                            <div className="date text-inverse m-t-5"><span id='date'></span></div>
                            <div className="invoice-detail">
                                <div>Invoice No: 123</div>
                                <div>Services Product</div>
                            </div>
                        </div>
                    </div>

                    <div className="tableSheet invoice-content col-md-12 offset-0">

                        <div className="table-responsive col-md-12">
                            <table className="table table-invoice">
                                <thead>
                                    <tr>
                                        <th>TASK DESCRIPTION</th>
                                        <th className="text-center" width="10%">HSN/SAS</th>
                                        <th className="text-center" width="10%">RATE</th>
                                        <th className="text-center" width="10%">GST</th>
                                        <th className="text-center" width="10%">TAX</th>
                                        <th className="text-right" width="20%">LINE TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="text-inverse">this.PROJECT_DESCRIPTION</div>
                                            <small>Website design &amp; development</small>
                                        </td>
                                        <td className="text-center">this.HSN_SAS_CODE</td>
                                        <td className="text-center">₹ this.PRICE </td>
                                        <td className="text-center">₹ this.GST </td>
                                        <td className="text-center">₹ this.TAX</td>
                                        <td className="text-right">₹ this.TOTAL_AMOUNT</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="invoice-price col-md-12">
                            <div className="invoice-price-left">
                                <div className="invoice-price-row">
                                    <div className="sub-price">
                                        <small>SUBTOTAL</small>
                                        <span className="text-inverse"> this.TOTAL_AMOUNT </span>
                                    </div>
                                    <div className="sub-price">
                                        <i className="fa fa-plus text-muted"></i>
                                    </div>
                                    <div className="sub-price">
                                        <small>Miscellaneous</small>
                                        <span className="text-inverse">₹0.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="invoice-price-right">
                                <small>TOTAL</small> <span className="f-w-600">₹4508.00</span>
                            </div>
                        </div>

                    </div>

                    <div className="invoice-note">
                        <div>* Make all cheques payable to CreationSoul Soft-Tech</div>
                        <div>* If you have any questions concerning this invoice, contact Dibyendu, 7003990798,
                            dibyendud @cssoftech.com</div>
                    </div>

                    <div className="invoice-footer">
                        <p className="text-center m-b-5 f-w-600">
                            THANK YOU FOR YOUR BUSINESS
                        </p>
                        <p className="text-center">
                            <span className="m-r-10"><i className="fa fa-fw fa-lg fa-globe"></i> CreationSoul Soft-Tech</span>
                            <span className="m-r-10"><i className="fa fa-fw fa-lg fa-phone-volume"></i> T: 7003990798</span>
                            <span className="m-r-10"><i className="fa fa-fw fa-lg fa-envelope"></i> dibyendud @cssoftech.com</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Invoice;