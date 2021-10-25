import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
//
import FolderOpen from '@material-ui/icons/FolderOpen';
import ShowDocs from "./ShowDocs"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

}));

export default function Docket() {
    const [docs, setDocs] = React.useState(false);
    const [invoices, setInvoices]=React.useState([])

    useEffect(() => {
        // GET request using axios inside useEffect React hook to fetch the Invoice data and set it to invoices hook
        axios.get('http://localhost:3000/getDocsById/U1001').then((response)=>{
            setInvoices(response.data);
            
        });
    
    }, []);
    const fetchInvoices = () => {
        setDocs(true)
        console.log("Fetching Invoices...", docs);
        console.log(invoices);

    }
    
    const fetchDocs = () => {
        // setDocs(true)
        console.log("Fetching Docs...", docs)
    }
    
    return (

        <div>
            {docs ?
                <div className="text-center" >
                    <ShowDocs setDocs={setDocs} invoices={invoices}></ShowDocs>
                </div >
                :
                <div>
                    
                    <IconButton color="primary" onClick={fetchInvoices}>
                        <div><FolderOpen style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px' }} /></div>
                    </IconButton><br />
                    <span>Invoices</span><br />

                    <IconButton color="primary" onClick={fetchDocs} >
                        <FolderOpen style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px' }} />
                    </IconButton><br />
                    <span>Documents</span>
                </div>
            }
        </div>
    )
}