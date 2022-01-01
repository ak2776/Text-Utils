import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');   //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=> {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor='#021128';
      showAlert('Dark mode enabled.', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode enabled.', 'success');
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutUs="About us"/> */}
    {/* <Navbar /> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />

    <div className="container" my-5>
    <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
    {/* <About/> */}
    </div>
    
    
    </>
  );
}

export default App;
