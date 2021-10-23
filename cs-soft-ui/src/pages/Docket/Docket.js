import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
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
    const fetchInvoices = () => {
        setDocs(true)
        console.log("Fetching Invoices...", docs);

    }
    const fetchDocs = () => {
        // setDocs(true)
        console.log("Fetching Docs...", docs)
    }
    
    return (

        <div>
            {docs ?
                <div className="text-center" style={{ maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px'}} >
                    <ShowDocs setDocs={setDocs}></ShowDocs>
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