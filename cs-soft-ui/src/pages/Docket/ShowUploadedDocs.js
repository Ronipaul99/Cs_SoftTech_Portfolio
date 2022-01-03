import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import App from './uploadDocs/src/App';
import PublishIcon from '@material-ui/icons/Publish';
import FolderOpen from '@material-ui/icons/FolderOpen';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Box } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import Typography from '@material-ui/core/Typography';
const axios = require('axios');

const UploadedDocs = ({ setDocs }) => {
  const [uploadedDocuments, setDocuments] = useState(null)
  const [uploadStatus, setUploadStatus] = React.useState(false)
  const back = () => {
    setDocs(false)
  }
  const uploadDocs = () => {
    setUploadStatus(true)
    console.log("Upload your docs...");
  }
  useEffect(() => {
    axios.get("http://localhost:3000/getUploadedDocuments")
      .then(response => {

        setDocuments(response.data)
      });

  },[uploadStatus]);
  return (

    uploadStatus ? <div className="text-center">
      {console.log("tests")}
      <App setUploadStatus={setUploadStatus}></App>
    </div>
      :
      <div>
        {console.log("test-run")}
        {uploadedDocuments !== null ?
          <div>

            <ArrowBackIcon style={{
              display: "flex",
              alignItems: "left"
            }} onClick={back} />
            <div className='text-end'><IconButton><PublishIcon variant="Upload Docs" onClick={uploadDocs} /></IconButton><br /><span className='text-center'>UPLOAD</span></div><br />
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {console.log(uploadedDocuments.fileNames)}
              {uploadedDocuments.fileNames.map(data => (
                
                <Grid item xs={12} sm={6} md={2}>
                  <Card>
                    <CardMedia>
                      <DescriptionIcon style={{ maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px' }} />
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="body" component="div">
                        {data.fileName}
                      </Typography>

                    </CardContent>
                    <CardActions >
                      {console.log(data.filePath+'/'+data.fileName)}
                      <Button size="small" href={data.filePath+'/'+data.fileName} download>Download</Button>
                      <Button size="small">Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>


          </div> :
          <div>
            <ArrowBackIcon style={{
              display: "flex",
              alignItems: "left"
            }} onClick={back} />
            <div className='text-end'><IconButton><PublishIcon variant="Upload Docs" onClick={uploadDocs} /></IconButton><br /><span className='text-center'>UPLOAD</span></div><br />
            <span className='text-center mb-4'>
              No Documents available
            </span>
          </div>}
      </div>
  );
}

export default UploadedDocs;
