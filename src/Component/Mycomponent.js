import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Mycomponent() {
 
    const [inc,setinc]=useState(0);
    const [data,setdata]=useState([]);
    const [search,setsearch]=useState("");

    let arr=[1,2,5,7,9,5,,3,1,0,11,99,66];
    console.log(arr);

    let sort=arr.sort((a,b)=>a-b);
    console.log(sort);

    let filarr=new Set(sort);
    console.log(filarr);

    const apidetails=()=>{
        axios.get(`https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json`)
        .then(res=>{console.log(res.data);setdata(res.data)})
        .catch(err=>console.log(err))
    }

    const handlesearch=(e)=>{
    e.preventDefault();
    const filterdata=data.filter((countryname)=>countryname.name.toLowerCase().includes(search.toLowerCase()));
            setdata(filterdata);
            console.log(filterdata);
    };

    useEffect(()=>{
        apidetails();
    },[])

    const increment=()=>{
        setinc(inc+1);
        console.log(inc);
    }
    return (
    <div>
    Mycomponent
    <>
    <form onSubmit={handlesearch}>
        <label>Search Coontry</label>
        <input type='text' name="name" value={search} onChange={(e)=>setsearch(e.target.value)} />
        <button>search country </button>
    </form>
        {
            data.map((country)=>(
                <div key={country.id}>
                <h1>{country.name}</h1>
                <img src={country.flag} alt={country.name} />
                </div>
            ))
        }
    </>
    <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Mycomponent