import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState('light'); // check if dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="Home" randomShit="About" mode={mode} taggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className={`container text-${mode === `light` ? `dark` : `light`}`} mode={mode}   >
        <TextForm formhead="Enter the text to analyze below" showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
