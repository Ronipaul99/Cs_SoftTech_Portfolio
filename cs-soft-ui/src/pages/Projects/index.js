import { CircularProgress , colors, Divider, FormControl, Icon, InputLabel, OutlinedInput} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

import BookmarksIcon from '@material-ui/icons/Bookmarks';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import BookIcon from '@material-ui/icons/Book';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LatestOrders from '../Dashboard/dashboard_components/LatestOrders';
const useStyles = makeStyles((theme)=>({
    root: {
      minWidth: 275,
    },
    margin: {
        margin: theme.spacing(1),
      },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));
  
export default function (props) {
    const classes = useStyles()
    const [spin , setSpin] = useState(false)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    useEffect(()=>{
        setSpin(true)
        setTimeout(() => {
            setSpin(false)
        }, 10);
    },[])
    return (
        <div>
            {spin ? 
                <div className="spinner" style={{height:"400px" , alignContent:"center"}}>
                    <CircularProgress style={{ marginTop:"15%" , marginLeft:"48%" , alignItems:"center" }}/>
                </div>
                :
                <div className="text-center" style={{ alignContent:"left"}}>
                    <div className="row">  
                        <div className="col-3 ">
                            <Card 
                                className={classes.root}
                            >
                                <CardContent>
                                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                    </Typography> */}
                                    <Typography 
                                        variant="h5" 
                                        component="h2"
                                        color="textSecondary"
                                        gutterBottom

                                    >
                                       <BookmarksIcon /> Total Projects 
                                    </Typography>
                                    <Typography 
                                        variant="h3" 
                                        component="h1"
                                        style={{color:colors.red[800]}}
                                    >
                                        <Box fontWeight={500} m={1}>
                                            10
                                        </Box>
                                    </Typography>

                                </CardContent>
                            </Card>
                        </div>

                        <div className="col-3 offset-1">
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography 
                                        variant="h5" 
                                        component="h2"
                                        color="textSecondary"
                                        gutterBottom
                                    >
                                        <Box 
                                            m={1}
                                        >
                                            <BookIcon/>Project In Progress
                                        </Box>
                                       
                                    </Typography>
                                    <Typography 
                                        variant="h3" 
                                        component="h1"
                                        style={{color:colors.green[700]}}
                                    >
                                        <Box fontWeight={500} m={1}>
                                            3
                                        </Box>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="col-3 offset-1">
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography 
                                        variant="h5" 
                                        component="h2"
                                        color="textSecondary"
                                        gutterBottom
                                    >
                                       <BeenhereIcon/> Complete Project 
                                    </Typography>
                                    <Typography 
                                        variant="h3" 
                                        component="h1"
                                        style={{color:colors.orange[600]}}
                                    >
                                        <Box fontWeight={500} m={1}>
                                            7
                                        </Box>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>  
                    </div>
                    <div className="text-center" style={{marginTop:"2%"}}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            style={{width:"60%"}}
                            startIcon={<AddBoxIcon />}
                            onClick={handleClickOpen}
                        >
                             create New Project
                        </Button>
                    </div>
                    <Divider style={{backgroundColor:colors.grey[800] , marginTop:"3%" , marginBottom:"2%"}} />
                    <div>
                        {/* <Typography >
                            <Box 
                                fontWeight={500}
                                fontSize={30}
                                fontStyle="sans-serif"
                                textAlign="left" 
                                style={{color:colors.purple[500]}}
                                m={1}
                            >
                                List Of Projects
                            </Box>  
                        </Typography> */}
                        <LatestOrders/>
                    </div> 
                    <Dialog
                        // fullWidth={fullWidth}
                        fullWidth={true}
                        maxWidth="Sm"
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="max-width-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Create Project</DialogTitle>
                            <DialogContent >
                                <Card className={classes.root}>
                                    <CardContent>
                                        <form className={classes.root} noValidate autoComplete="off">
                                            <FormControl fullWidth className={classes.margin} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-amount">Project Title</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    labelWidth={150}
                                                />
                                            </FormControl>
                                            <FormControl fullWidth className={classes.margin} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-amount">Client id</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    labelWidth={150}
                                                />
                                            </FormControl>
                                            <div className="row">
                                                <div className="col-6">
                                                    <FormControl fullWidth className={classes.margin} variant="outlined">
                                                        <InputLabel htmlFor="outlined-adornment-amount">Total value</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-amount"
                                                            labelWidth={150}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <div className="col-6">
                                                    <FormControl fullWidth className={classes.margin} variant="outlined">
                                                        <InputLabel htmlFor="outlined-adornment-amount">Developer Id</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-amount"
                                                            labelWidth={150}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div>
                                                    <FormControl fullWidth className={classes.margin} variant="outlined">
                                                        <InputLabel htmlFor="outlined-adornment-amount">Mile Stone Title</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-amount"
                                                            labelWidth={150}
                                                        />
                                                    </FormControl>
                                                    <TextField
                                                        className={classes.margin}
                                                        fullWidth
                                                        id="outlined-multiline-static"
                                                        label="Description"
                                                        multiline
                                                        rows={2}
                                                        variant="outlined"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        className={classes.margin}
                                                        startIcon={<AddIcon />}
                                                    >
                                                        Add Milestone
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.margin}
                                                        startIcon={<AddIcon />}
                                                    >
                                                        create
                                                    </Button>
                                                </div>
                                        </form>
                                    </CardContent>
                                </Card>
                            </DialogContent>
                    </Dialog>             
                </div>

            }
        </div>
    );
}

