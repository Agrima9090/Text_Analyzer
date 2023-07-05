
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [alert, setAlert] = useState(null);
  // const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  // const togglemode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     document.body.style.backgroundColor = 'grey'
  //     showAlert("Dark mode has been enabled", "success")
  //   }
  //   else {
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Light mode has been enabled", "success")
  //   }
  // }

  return(
  <>
  {/* // <BrowserRouter>
  //  <Navbar title="TextMania" about="About TextMania" />
  //   <Alert alert={alert} />
  //   <div className="container my-4">
  //   <Routes>
  //     <Route path="/" element={<TextForm showAlert={showAlert} heading="Hey,Begin With The Writing!!" />}/>

  //    <Route path="/about" element={<About/>}/>
  //   </Routes>
  //   </div>
  // </BrowserRouter> */}
  

    
      
    {/* //     <Navbar title="TextMania" about="About TextMania" />
    //     <Alert alert={alert} />
    //     {/* <About /> */}
        

    {/* //     <div className="container my-4">
    //     <TextForm showAlert={showAlert} heading="Hey,Begin With The Writing!!"  />
    //    </div> */}
    <Navbar title="TextMania" />
    <Alert alert={alert} />
    <div className="container my-4">
     <TextForm showAlert={showAlert} heading="Hey,Begin With The Writing!!"  />
     </div>
    
      
     
</>
    );
  
}

export default App;
