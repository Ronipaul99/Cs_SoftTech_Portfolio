import { CircularProgress , colors, Divider, FilledInput, FormControl, Icon, Input, InputLabel, OutlinedInput} from '@material-ui/core';
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


import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    delete:{
        marginLeft:"65%",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
  }));
  
export default function (props) {
    const classes = useStyles()
    const [spin , setSpin] = useState(false)
    const [open, setOpen] = useState(false);
    const [milestone , setMilestone] = useState([{id:"milestone-1",name:"",description:""}])
    const [expanded, setExpanded] = useState(0);
    const [project , setProject] = useState({
        title:'',
        clientId:'',
        totalValue:0,
        DeveloperId:'',
    })
    const [error , setError] = useState({
        title:'',
        clientId:'',
        totalValue:'',
        DeveloperId:'',
        milestone:[]
    })

    const handelChange = (e) => {
        var name = e.target.name
        var value = e.target.value
        if (name==="milestone") {
            
        }
        setProject({...project,[name]:value})
        validate(name,value)
    }

    const validate = (name,value) => {
        var message= ''
        switch (name) {
            case "title":
                var regex = new RegExp(/^[a-zA-Z]+(\s[a-zA-Z]+)?$/)
                value === "" ? message = "Please enter your Title" : regex.test(value) ? message = "" : message = "Title id format is wrong";
                break;
            case "clientId":
                var regex1 = new RegExp(/^[A-Z]/)
                var regex2 = new RegExp(/^[0-9]/)
                value === "" ? message = "Please enter clientId" :  message = "" 
                regex1.test(value.slice(0,4))&& value[4]==='c' && regex2.test(value.slice(5,12)) ? message = "" : message = "clientId id format is wrong"
                break;
            case "totalValue":

                value <= 0 ? message = "TotalValue should be grater than 0 " : message = ""
                break;
            case "DeveloperId":
                var regex1 = new RegExp(/^[A-Z]/)
                var regex2 = new RegExp(/^[0-9]/)
                value === "" ? message = "Please enter DeveloperId" :  message = "" 
                regex1.test(value.slice(0,4))&& value[4]==='d' && regex2.test(value.slice(5,12)) ? message = "" : message = "DeveloperId id format is wrong"
                break;
            default:
                break;
        }
        setError({...error,[name]:message})
    }

    const handelSubmit = () => {
        var milestoneErr = []
       for (let index = 0; index < milestone.length; index++) {
           if(milestone[index].name === "" || milestone[index].description === ""){
               milestoneErr.push(index)
           }
       }
        setError({...error,milestone:milestoneErr})

    }
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleExpandClick = (value) => {
        if(value!==expanded){
            setExpanded(value);
        }else{
            setExpanded(0)
        }
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
    const editMilestone = (e,index) => {
        var name = e.target.name
        var value = e.target.value
        var mStone = milestone
        for (let i = 0; i < milestone.length; i++) {
            if(i===index){
                mStone[i][name]=value
            }
        }
        setMilestone(mStone)
    }
    const addMilestone = () => {
         var Milestone = milestone
         var newMilestone = parseInt(Milestone[Milestone.length-1].id.split('-')[1])+1
         newMilestone = {id:"milestone-"+newMilestone,name:"",description:""}
        setMilestone(milestone.concat(newMilestone))
        //console.log(Milestone);
    }

    const deleteMileStone = (index) => {
        var Milestone = milestone
        var new_array = []
        for (let i = 0; i < Milestone.length; i++) {
           if(i!==index){
               new_array.push(Milestone[i])
           }
        }
        setMilestone(new_array)
    } 
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
                        maxWidth="sm"
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="max-width-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Create Project</DialogTitle>
                            <DialogContent >
                                <Card className={classes.root}>
                                    <CardContent>
                                        <form className={classes.root} noValidate autoComplete="off">
                                            <div className="form-group">
                                                <label for="title">Project Title</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    name="title" 
                                                    id="title" 
                                                    placeholder="e:g Example"
                                                    onChange={handelChange}
                                                />
                                                <span className="text-danger"><small>{error.title!==""&&error.title}</small></span>
                                            </div>
                                            <div className="form-group">
                                                <label for="clientId">Client id</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    id="clientId" 
                                                    name="clientId" 
                                                    placeholder="e:g Example"
                                                    onChange={handelChange}
                                                />
                                                <span className="text-danger"><small>{error.clientId!==""&&error.clientId}</small></span>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label for="totalValue">Total value</label>
                                                        <input 
                                                            type="number" 
                                                            className="form-control"
                                                            id="totalValue" 
                                                            name="totalValue" 
                                                            placeholder="e:g Example"
                                                            onChange={handelChange}
                                                        />
                                                        <span className="text-danger"><small>{error.totalValue!==""&&error.totalValue}</small></span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label for="DeveloperId">Developer Id</label>
                                                        <input type="text" 
                                                            className="form-control" 
                                                            id="DeveloperId" 
                                                            name="DeveloperId" 
                                                            placeholder="e:g Example"
                                                            onChange={handelChange}
                                                        />
                                                        <span className="text-danger"><small>{error.DeveloperId!=="" && error.DeveloperId}</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {milestone.map((milestoneName , index) => {
                                                
                                                return(
                                                    <div key={index} style={{marginBottom:"2%"}}>
                                                        <Card className={classes.root}>
                                                            
                                                            <CardActions disableSpacing>
                                                                    
                                                                    <Typography>
                                                                        {"Milestone"+(index+1)}
                                                                    </Typography>
                                                                
                                                                    {index!==0 && <IconButton 
                                                                        className={classes.delete}
                                                                        onClick={_=>{deleteMileStone(index)}}
                                                                    >
                                                                        <DeleteOutlineIcon/>
                                                                    </IconButton>}
                                                                    <IconButton
                                                                        className={clsx(classes.expand, {
                                                                            [classes.expandOpen]: (index+1)===expanded ? true : false,
                                                                        })}
                                                                        onClick={()=>{handleExpandClick(index+1)}}
                                                                        aria-expanded={(index+1)===expanded ? true : false}
                                                                        aria-label="show more"
                                                                    >
                                                                        <ExpandMoreIcon />
                                                                    </IconButton>
                                                            </CardActions>
                                                            <Collapse in={(index+1)===expanded ? true : false} timeout="auto" unmountOnExit >
                                                            
                                                                    <div style={{marginInline:"2%"}}>
                                                                        <div className="form-group">
                                                                            {/* <label for="exampleFormControlInput1">Milestone{index+1} Title</label> */}
                                                                            <input type="text" 
                                                                                className="form-control" 
                                                                                name="name" 
                                                                                id="name" 
                                                                                placeholder={`Milestone ${index+1} Title`}
                                                                                onChange={e=>{editMilestone(e,index)}}
                                                                            />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            {/* <label for="exampleFormControlTextarea1">{"Milestone"+(index+1)+" Description"}</label> */}
                                                                            <textarea 
                                                                                className="form-control" 
                                                                                name="description" 
                                                                                id="description" 
                                                                                rows="3" 
                                                                                placeholder={`Milestone ${index+1}Description`}
                                                                                onChange={e=>{editMilestone(e,index)}}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                            </Collapse>
                                                        </Card>
                                                        <span className="text-danger"><small>{error.milestone.includes(index)&&"Please Enter Milestone Details"}</small></span>
                                                    </div>
                                                )
                                            })}
                                            
                                                <div className="text-center">
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        className={classes.margin}
                                                        startIcon={<AddIcon />}
                                                        onClick={addMilestone}
                                                    >
                                                        Add Milestone
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.margin}
                                                        startIcon={<AddIcon />}
                                                        onClick= {handelSubmit}
                                                        disabled = {error.title==="" && error.clientId==="" && error.totalValue==="" && error.DeveloperId==="" ? false : true}
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

