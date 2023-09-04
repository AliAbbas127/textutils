// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
 //import About from './components/About';
import Textform from './components/Textform';
import React, {useState}  from 'react';


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert =  (message, type)=>{

  setAlert({
    msg : message,
    type : type
  })

  setTimeout(() => {
    setAlert(null);
  }, 2000);

}
const toggleMode = ()=>{

  if(mode === 'light')
  {
  setMode('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert("Dark Mode Has Been Enabled", "success");
  }
  else
  {
    setMode("light");
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has Been Enabled","success"); 
  }
}
  return (

<>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>

    
<Textform mode={mode} showAlert={showAlert}/> 
          
      
</div>

</>
  );
}
export default App;
