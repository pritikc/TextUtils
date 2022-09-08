
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

// let name ="Prity";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message , type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
      
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';

      showAlert("Dark mode has been enable", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils is Nice';
      // }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#eeeeee';

      showAlert("Light mode has been enable", "success");
      // document.title = 'TextUtils - Light Mode';

    }
    
  }

  return (
  <>
<Router>{/* <Navbar title="TextUtils" aboutText="About"/> */}
{/* <Navbar/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> }>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
          </Route>
          <Route exact path="/about" element={<About  mode={mode}/>}>
          </Route>
         
        </Routes>
</div>
        </Router>


{/* <About/> */}
  </>
  );
}

export default App;
