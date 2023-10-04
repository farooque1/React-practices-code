import React from 'react'
import useTheme from '../contextapi/theme'

function Themebtn() {

const{darkTheme,lightTheme,themeMode}= useTheme();

document.body.className = themeMode;

   const onchangebtn=(e)=>{
    const modestatus=e.target.value;
    console.log(modestatus);
    if(modestatus==='dark'){
        darkTheme()
        console.log("dark theme",darkTheme());
    }else if(modestatus==='light'){
        lightTheme()
        console.log("dark theme",lightTheme());
    }
   }

  return (
    <div className='container'>
    <p></p>Themebtn
    <select className='form-control my-2' onChange={onchangebtn} value={themeMode}>
        <option value="default">Select Theme color</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
    </select>
    </div>
  )
}

export default Themebtn