import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
                <div className="text-center" style={{height:"400px" , alignContent:"center"}}>
                    Info Share
                </div>
            }
        </div>
    );
}