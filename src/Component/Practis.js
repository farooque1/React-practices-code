import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Practice() {

    let arr=[1,3,5,78,9,10,2,6,4,1,2,4,3,5,6]
    console.log("array",arr);

    let sarr=arr.slice(4,7);//start and end postion
    console.log("modify arr", sarr);

    arr.splice(1,0,100);
    console.log("splice array-adddd",arr);

    let sort=arr.sort();
    console.log("sort array ",sort);

    let asending=arr.sort((a,b)=>a - b);
    console.log(asending);

    let desending=arr.sort((a,b)=>b - a);
    console.log(desending);

    let removedublicate=new Set(asending);
    console.log(removedublicate);

    let str="farooque";
    let reverse=str.split('').reverse().join('');
    console.log(reverse);
    
    console.log(str);
    let rme=str.slice(0,1);
    console.log(rme);

    str=str.slice(6);
    console.log(str);
  
    const [data,setdata]=useState([]);
    const [search,setsearch]=useState();

    const productdetails=()=>{
        axios.get(`https://boppotech.github.io/react-task-json.github.io/reactjob.json`)
        .then(res=>{console.log(res.data); setdata(res.data)})
        .catch(err=>console.log(err))
    }
    const searchproduct=(e)=>{
        e.preventDefault();
        const filter=data.filter((name)=>name.title.toLowerCase().includes(search.toLowerCase()))
        setdata(filter);
        console.log(filter);
    }

    useEffect(()=>{
        productdetails();
    },[])
    
    // const tags=data.flatMap((item)=>item.tags);
    // console.log(tags);

    return (
    <div>Practice
        <form onClick={searchproduct}>
        <label>Search product</label>
        <input type='text' name='search' value={search} onChange={(e)=>setsearch(e.target.value)}>
        </input>
        <button className='btn btn-primary'>Search</button>

        </form>
        
        {
            data && data.map((datas)=>(
                <div key={datas.handle}>
                    <img src={datas.images.nodes[0].url} width="100px"/>
                    <h1>{datas.title}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default Practice