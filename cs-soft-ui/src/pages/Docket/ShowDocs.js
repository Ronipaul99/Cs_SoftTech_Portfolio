import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
//
import Invoice from './ShowDoc/NewInvoice';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }

}));

export default function ShowDocs({ setDocs, invoices }) {
    const [showDoc, setShowDoc] = React.useState(false);
    const [invoice, setInvoice]=React.useState({})
    const classes = useStyles()
    const back = () => {
        setDocs(false)
    }
    const generatePdf = (data) => {
        
        setInvoice(data)
        console.log("test",invoice);
        setShowDoc(true)
    }

    return (
        <div>
            {showDoc ?
                <div className="text-center" >
                    <Invoice setShowDoc={setShowDoc} invoice={invoice}></Invoice>
                </div >
                :
                <div className={classes.root}>
                    <ArrowBackIcon style={{
                        display: "flex",
                        alignItems: "left"
                    }} onClick={back} /><br />

                    <div className={classes.root}>
                        <Grid
                            container
                            spacing={2}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            {invoices.map(data => (
                                <Grid item xs={12} sm={6} md={2}>
                                    <Card>
                                        <CardMedia>
                                            <DescriptionIcon style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px' }} />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="body" component="div">
                                                {data.PROJECT_DESCRIPTION}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {data.Company_Name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions >
                                            <Button size="small" onClick={()=>{generatePdf(data)}}>View</Button>
                                            
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            }
        </div>
    )
}