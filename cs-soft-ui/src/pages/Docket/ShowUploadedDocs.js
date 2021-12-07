import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const axios = require('axios');
const UploadedDocs = ({ setDocs }) => {
  const [uploadedDocuments, setDocuments] = useState(null)
  const back = () => {
    setDocs(false)
  }
  useEffect(() => {
    axios.get("http://localhost:3000/getUploadedDocuments")
      .then(response => {

        setDocuments(response.data)
      });

  }, []);
  return (
    uploadedDocuments!==null?
    <div className='container mt-4'>
      {console.log(uploadedDocuments.fileNames)}
      <ArrowBackIcon style={{
        display: "flex",
        alignItems: "left"
      }} onClick={back} /><br />
      <span className='text-center mb-4'>

        <ul>
          {
            uploadedDocuments.fileNames.map((doc, i) => (
              <li key={i}>{doc.fileName}</li>
            ))
          }
        </ul>

      </span>
    </div>:""
  );
}

export default UploadedDocs;
