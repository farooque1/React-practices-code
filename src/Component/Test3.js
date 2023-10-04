import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Test3() {

    const [data,setdata]=useState([]);
    const [inc,setinc]=useState(0);

    const incrr=()=>{
        setinc(inc+1);
        console.log(setinc);
    }

    var arr = [1, 3, 4, 2, 5, 4, 6, 8, 9, 1, 2];      
      console.log(arr);

      let sortp=arr.splice(2,1);
      console.log(sortp);

      let sort=arr.sort();
      console.log(sort);

      let remove=new Set(sort);
      console.log(remove);

      let des=new Set(arr.sort((a,b)=> b - a));
      console.log(des);

      let ase=new Set(arr.sort((a,b)=>a-b));
      console.log(ase);

      function a(x) {
        return function (y) {
            return function (z){
                return x+y+z;
            }
        }
      }
      console.log(a(2)(10)(15));

      const fetch=()=>{
        axios.get('hello.com')
        .then(res=>{setdata(res);console.log(res)})
        .catch(err=>{console.log(err);})
      }

      useEffect(()=>{
        fetch();
      })


  return (
    <div>
    Test3
    <div>
        {
           data.map((id)=>(
            <h1 key={id}>{id.title}</h1>
           )) 
        }
    </div>
        <button className='btn btn-primary' onClick={incrr}>Click me {inc}</button>

    </div>

  )
}

export default Test3