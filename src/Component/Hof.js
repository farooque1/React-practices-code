import React, { useEffect, useState } from 'react'
import axios from "axios";

function Hof() {

    const companies=[
        {id:2,name:"flipkart",category:"service base",salary:200000,isActive:true},
        {id:5,name:"flipkart",category:"service base",salary:200000,isActive:true},
        {id:3,name:"google",category:"product base",salary:300000,isActive:false},
        {id:4,name:"paytm",category:"service base",salary:100000,isActive:true},
        {id:1,name:"amazon",category:"product base",salary:100000,isActive:true},
    ];
    const ages = [33,12,20,16,5,54,21,44,61,13,15,45,32,33,12];
    // const ages = [1,2,3,5,3,6,9,6,3,5,5];
    const arname = ["farooque", "shaikh", "abc", "pqrs", "nmn"];
    console.log(arname);

   const rm=new Set(companies.sort((a,b)=> a.name - b.name));
    console.log(companies);
    console.log(rm);
    console.log(ages);

    const agsort=arname.sort();
    console.log(agsort);

    const agas =arname.sort((a,b)=>b-a);
    console.log(agas);

    const [inc,setinc]=useState(0);
    const [data,setdata]=useState([]);


    const increment=()=>{
      setinc(inc+1);
    }

    // const fetchdetails=()=>{
    //   fetch('https://fakestoreapi.com/products')
    //   .then(res =>{
    //     return res.json();
    //   })
    //   .then(data=>{
    //   console.log(data);
    //     setdata(data)
    //   })
    // }

    const fdata=()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res=>{console.log(res.data);})
      .catch(err=>{console.log(err);})
    }


    useEffect(()=>{
      //fetchdetails();
      fdata();
    },[])
    // const names=[];
    // companies.forEach((cmp)=> 
    // {if(cmp.isActive){
    //   names.push(cmp.name);
    // }});

    // console.log(names);

    //foreach loop

    // for(let i=0;i<=companies.length;i++){
    //     // console.table(companies[i]);
    //     console.log(companies[i].name);
    // }

    // companies.forEach(function(company,index){
    //     console.log(company.name);
    // })

    // companies.forEach((company,index)=>console.log(index))

    //filter

    // for(let i=0;i<=ages.length;i++){
    //     if(ages[i] >= 20)
    //     console.log(ages[i]);
    // }

    // ages.filter(function(age){
    //     if(age <= 20)
    //     console.log({age});
    // })
    
//  const age=ages.filter((age)=>(age >= 20));
//  console.log("final age",age);

// const company=companies.filter((comp,index)=>(comp.salary===100000));
//  console.log("company",company);

//  const company1=companies.filter((comp,index)=>(comp.name==="paytm"));
//  console.log("company",company1);



const obj=[
  {id:1,name:"xyz",inActive:true},
  {id:1,name:"mnp",inActive:false},
]

  return (
    <div>Hof Component
    <div className='mobiletext'>Mobile Text</div>
    <div className='desktoptext'>Desktop Text</div>
    <button onClick={increment}>Increment {inc}</button>
    {
      data && data.map(i=>
      <div key={i.id}>
        <h1>{i.title}</h1>
      </div>)
    }
    </div>
  )
}

export default Hof