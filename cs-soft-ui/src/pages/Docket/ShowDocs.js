import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

}));

export default function ShowDocs({ setDocs }) {
    const back = () => {
        setDocs(false)
    }
    return (
        <div>
            <ArrowBackIcon style={{
                display: "flex",
                alignItems: "left"}}onClick={back}/><br />
            <Card sx={{ maxWidth: 60 }}>
                <CardMedia

                ><DescriptionIcon style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px' }} /></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        DOC Date
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Invoice for first part
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Download</Button>
                </CardActions>
            </Card>
        </div>
    )
}