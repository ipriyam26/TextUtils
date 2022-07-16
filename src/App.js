import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleAlert = (message,type) => {
            setAlert({
              msg:message,
              type:type,
            })
            setTimeout(()=>{
              setAlert(null);
            },1500);
  }

  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      toggleAlert("  Dark Mode has been activated","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      toggleAlert(" Light Mode has been activated","success");

    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleAlert={toggleAlert}/>
    <Alert message={alert}></Alert>
    <div className="container my-3">
    <TextForm heading="Enter Text to analyze" mode = {mode}/>
    </div>
    {/* <div className="container my-3">
      <About/>
    </div> */}
    </>

  );
}

export default App;
