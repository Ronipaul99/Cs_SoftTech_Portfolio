import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import Button from '@material-ui/core/Button';

//
import FolderOpen from '@material-ui/icons/FolderOpen';
import PublishIcon from '@material-ui/icons/Publish';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


import App from './uploadDocs/src/App';
import UploadedDocs from './ShowUploadedDocs';
import ShowDocs from "./ShowDocs"
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

}));

export default function Docket() {
    const [docs, setDocs] = React.useState(false);
    const [invoices, setInvoices] = React.useState([])
    const [task, setTask] = React.useState(0)
    useEffect(() => {
        // GET request using axios inside useEffect React hook to fetch the Invoice data and set it to invoices hook
        axios.get('http://localhost:3000/getDocsById/U1001').then((response) => {
            setInvoices(response.data);

        });

    }, []);
    const fetchInvoices = () => {
        setDocs(true)
        setTask(1)
        console.log("Fetching Invoices...", docs);
        console.log(invoices);

    }

    const fetchDocs = () => {
        setDocs(true)
        setTask(2)
        console.log("Fetching Docs...")
    }

    const back = () => {
        setDocs(false)
    }
    return (

        <div>
            {docs ?

                task === 1 ?
                    <div className="text-center" >
                        <ShowDocs setDocs={setDocs} invoices={invoices}></ShowDocs>
                    </div >
                    :
                    <div className="text-center">
                        <UploadedDocs setDocs={setDocs}></UploadedDocs>
                    </div>
                :
                <div className="row">

                    <div className="col-2">
                        <IconButton color="primary" onClick={fetchInvoices}>
                            <div><FolderOpen style={{ maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px' }} /></div>
                        </IconButton><br />
                        <span>Invoices</span><br />
                    </div>
                    <div className="col-2">
                        <IconButton color="primary" onClick={fetchDocs} >
                            <FolderOpen style={{ maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px' }} />
                        </IconButton><br />
                        <span>Documents</span><br />
                    </div>

                    {/* <div><IconButton><PublishIcon variant="Upload Docs" onClick={uploadDocs}/></IconButton><br/>Upload Docs</div> */}
                </div>
            }
        </div>
    )
}