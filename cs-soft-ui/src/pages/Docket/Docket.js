import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import Button from '@material-ui/core/Button';

//
import FolderOpen from '@material-ui/icons/FolderOpen';
import ShowDocs from "./ShowDocs"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import App from './uploadDocs/src/App'
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
    const uploadDocs = () => {
        setTask(3)
        setDocs(true)
        console.log("Upload your docs...");
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
                    task == 3 ?
                        <div className="text-center">
                            <App setDocs={setDocs}></App>
                        </div>
                        :
                        <div className="text-center">
                            <ArrowBackIcon style={{
                                display: "flex",
                                alignItems: "left"
                            }} onClick={back} /><br />
                            Working in progress</div>
                :
                <div>

                    <IconButton color="primary" onClick={fetchInvoices}>
                        <div><FolderOpen style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px' }} /></div>
                    </IconButton><br />
                    <span>Invoices</span><br />

                    <IconButton color="primary" onClick={fetchDocs} >
                        <FolderOpen style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px' }} />
                    </IconButton><br />
                    <span>Documents</span><br />


                    <Button variant="Upload Docs" onClick={uploadDocs}>Upload Docs</Button>
                </div>
            }
        </div>
    )
}