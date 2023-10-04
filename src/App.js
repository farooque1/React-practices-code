import './App.css';
import BasicReact from './Component/BasicReact';
import Child from './Component/Child';
import ClassComponet from './Component/ClassComponet';
import Contextdetails from './Component/Contextdetails';
import CrudOperation from './Component/CrudOperation';
import Parent from './Component/Parent';
import Lifecycle from './Component/Lifecycle';
import Test2 from './Component/Test2';
import Testing from './Component/Testing';
import Test3 from './Component/Test3';
import Api from './Component/Api';
import Proje from './Component/Proje';
import Testt from './Component/Testt';
import Lifecycl from './Component/UseEffect';
import Freshcmp from './Component/Freshcmp';
import Hof from './Component/Hof';
import Pcomponent from './Component/Pcomponent';
import CountryComponent from './Component/CountryComponent';
import Mycomponent from './Component/Mycomponent';
// import Practice from './Component/Practice';
import Passwordgenerate from './Component/Passwordgenerate';
import BasicVarible from './Component/BasicVarible';
import Basic from './Component/01_Basic';
import CurrancyComponent from './comp/CurrancyComponent';
import UsercontextProvider from './contextapi/UsercontextProvider';
import Login from './Newcomp/Login';
import Profile from './Newcomp/Profile';
import UserContextProvider from './contextapi/UsercontextProvider';
import { Themeprovider } from './contextapi/theme';
import { useEffect, useState } from 'react';
import Themebtn from './Newcomp/Themebtn';
import Cards from './Newcomp/Cards';


function App() {  

  const [themeMode, setthemeMode] = useState("light");
  
  const lightTheme=()=>{
    setthemeMode("light");
  }

  const darkTheme=()=>{
    setthemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    // document.querySelector('html').dataset.remove("light","dark");
    // document.querySelector('html').dataset.add(themeMode);
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  // let numbers=[1,5,3,7,9,2];
  // let sortno=numbers.sort();
  //console.log(sortno);
  return (

    // <>
    //  {/* <CrudOperation /> */}
    //  {/* <Testing /> */}
    //  {/* <Mycomponent /> */}
    // {/* <Test3 /> */}
    // {/* <Api /> */}
    // {/* <Testt /> */}
    // {/* <Freshcmp /> */}
    // {/* <Lifecycl /> */}
    // {/* <Proje /> */}
    //  {/* <Test2 />
    //  <BasicReact /> */}
    //  {/* <Lifecycle />  */}
    //  {/* <Contextdetails /> */}
    //  {/* <ClassComponet /> */}
    //   {/* <Parent />
    //   <Child />  */}
    //   {/* <Hof /> */}
    //   {/* <Pcomponent /> */}
    //   {/* <CountryComponent /> */}
    //   {/* <Practice /> */}
    //   {/* <Passwordgenerate /> */}
    //   {/* <BasicVarible /> */}
    //   {/* <Basic /> */}
    //   {/* <CurrancyComponent /> */}

      // <UsercontextProvider>
      // <h1>Hello context api</h1>
      // <Login />
      // <Profile />
      // </UsercontextProvider>
    // </>
      // <h1>Hello context api</h1>
    //     <UserContextProvider>
    //   <h1>Hello context api</h1>
    //  <Login />
    //  <Profile />
    //  </UserContextProvider>

    <Themeprovider value={{ darkTheme , lightTheme , themeMode}}>
     <Themebtn />
     <Cards themeMode={themeMode}/> 
    </Themeprovider>

  );
}
export default App;
