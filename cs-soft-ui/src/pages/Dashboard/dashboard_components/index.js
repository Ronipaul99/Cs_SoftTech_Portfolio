import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import Budget from './Budget';
import TotalProfit from './TotalProfit';
import Sales from './Sales';
import TrafficByDevice from './TrafficByDevice';
import LatestProducts from './LatestProducts';
import LatestOrders from './LatestOrders';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function (props) {
    const [spin , setSpin] = useState(false)
    useEffect(()=>{
        setSpin(true)
        setTimeout(() => {
            setSpin(false)
        }, 2000);
    },[])
    return (
        <div>
            {spin ? 
                <div className="spinner" style={{height:"400px" , alignContent:"center"}}>
                    <CircularProgress style={{ marginTop:"15%" , marginLeft:"48%" , alignItems:"center" }}/>
                </div>
                :
                <Container maxWidth={false}>
                        <Grid
                            container
                            spacing={3}
                            xs={12}
                        >
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <Budget />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <TotalCustomers />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <TasksProgress />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <TotalProfit sx={{ height: '100%' }} />
                            </Grid>
                            <Grid
                                item
                                lg={8}
                                md={12}
                                xl={9}
                                xs={12}
                            >
                                <Sales />
                            </Grid>
                            <Grid
                                item
                                lg={4}
                                md={6}
                                xl={3}
                                xs={12}
                            >
                                <TrafficByDevice sx={{ height: '100%' }} />
                            </Grid>
                            <Grid
                                item
                                lg={4}
                                md={6}
                                xl={3}
                                xs={12}
                            >
                                <LatestProducts sx={{ height: '100%' }} />
                            </Grid>
                            <Grid
                                item
                                lg={8}
                                md={12}
                                xl={9}
                                xs={12}
                            >
                                <LatestOrders />
                            </Grid>
                        </Grid>
                        
                    </Container>
            }
        </div>
    );
}
