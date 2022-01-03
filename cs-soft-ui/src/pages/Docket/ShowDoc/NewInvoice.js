import React from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import "../docket.css"
const axios = require('axios');
function Invoice({ setShowDoc, invoice }) {
    const exportPdf = () => {

        html2canvas(document.querySelector("#capture")).then(canvas => {
            document.body.appendChild(canvas);  // if you want see your screenshot in body.
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('portrait', 'px', 'a1', false);
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf");
        });

    }
    const back = () => {
        console.log(invoice);
        setShowDoc(false)
    }

    return (
        <div className="receipt-content" >
            <div className="container bootstrap snippets bootdey" id='capture'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="invoice-wrapper">
                            <div className='headColor'>
                                <div className="intro text-left">
                                    Hi <strong>{invoice.Company_Name}</strong>,
                                    <br />
                                    This is the receipt for a payment of <strong>₹{invoice.PRICE + invoice.GST + invoice.TAX}</strong> (INR) for your works
                                </div>

                                <div className="payment-info">
                                    <div className="row">
                                        <div className="col-sm-6 text-left">
                                            <span>Payment No.</span>
                                            <strong>434334343</strong>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span>Payment Date</span>
                                            <strong>Jul 09, 2014 - 12:20 pm</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="payment-details">
                                <div className="row">
                                    <div className="col-sm-6 text-left">
                                        <span>Client</span>
                                        <strong>
                                            {invoice.Company_Name}

                                        </strong>
                                        <p>
                                            {invoice.City}<br />
                                            {invoice.Street_Address} <br />
                                            {invoice.ZIP_Code}<br />
                                            India <br />
                                            <a href="#">
                                                abc@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <span>Payment To</span>
                                        <strong>
                                            CreationSoul Soft-Tech
                                        </strong>
                                        <p>
                                            95, Sreema Road, Kolkata 700065 <br />
                                            Phone: 7003990798 <br />
                                            GST: 19BORPD8133H1ZM <br />
                                            INDIA <br />
                                            <a href="#">
                                                dibyendud @cssoftech.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="line-items">
                                <div className="headers clearfix">
                                    <div className="row">
                                        <div className="col-xs-4 col-md-4">Description</div>
                                        <div className="col-xs-3 col-md-3">Quantity</div>
                                        <div className="col-xs-5 text-right col-md-5">Amount</div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="row item">
                                        <div className="col-xs-4 col-md-4 desc">
                                            {invoice.PROJECT_DESCRIPTION}
                                        </div>
                                        <div className="col-xs-3 col-md-3 qty">
                                            {invoice.QUANTITY}
                                        </div>
                                        <div className="col-xs-5 col-md-5 amount text-right">
                                            ₹{invoice.PRICE}
                                        </div>
                                    </div>

                                </div>
                                <div className="total text-right">
                                    <p className="extra-notes">
                                        <strong>Extra Notes</strong>
                                        Please send all items at the same time to shipping address by next week.
                                        Thanks a lot.
                                    </p>
                                    <div className="field">
                                        GST <span>₹{invoice.GST}</span>
                                    </div>
                                    <div className="field">
                                        TAX <span>₹{invoice.TAX}</span>
                                    </div>

                                    <div className="field grand-total">
                                        Sub Total <span>₹{invoice.PRICE + invoice.GST + invoice.TAX}</span>
                                    </div>
                                </div>

                                <div className="footer">
                                    Copyright © 2014. CreationSoul Soft-Tech
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="print">
                <button type="button" class="btn btn-info" onClick={exportPdf}>Download Invoice</button>
                {" "}
                <button onClick={back} className='btn btn-warning'>
                    <i className="fa fa-print text-left"></i>
                    Back
                </button>
            </div>
        </div>
    );
}

export default Invoice;