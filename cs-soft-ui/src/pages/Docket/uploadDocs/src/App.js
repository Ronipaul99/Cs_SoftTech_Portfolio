import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const App = ({setDocs}) => {
  const back = () => {
    setDocs(false)
  }
  return(
    <div className='container mt-4'>
    <ArrowBackIcon style={{
      display: "flex",
      alignItems: "left"
    }} onClick={back} /><br />
    <h4 className='display-4 text-center mb-4'>
      <i /> Select and upload your file
    </h4>

    <FileUpload />
  </div>
  )
}

export default App;
