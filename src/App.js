import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState('');

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });



    setTimeout(() => {
      setalert(null);

    }, 1500);


  }

  function toggle() {

    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#0a1730';
      showalert('Dark mode has been enabled ', 'success');

    }

    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode has been enabled', 'success');
    }
  }

  return (

    <>
      <Navbar mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm heading="Enter the text" mode={mode} showalert={showalert} />
      </div>


    </>

  );
}

export default App;
