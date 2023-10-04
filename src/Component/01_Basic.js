import axios from "axios";
import React, { useEffect, useState } from "react";

function Basic() {

    const [data,setdata]=useState([]);
    const [colorname,setColor]=useState('');
    const [inc,setInc]=useState(0);
    const [loading,setLoading]=useState(false);


   const Changecolor=(e)=>{
    setColor(e.target.value)
    }

    const Increment=()=>{
        setLoading(true);   

        setTimeout(()=>{
            setLoading(false);   
            setInc(inc+1);

           },1000)
    }

    // const Wait=()=>{
    //     setTimeout(()=>{
    //      Increment();   
    //      setLoading(true);   
    //     },1000)
    // }

    const apicall=async ()=>{
    //   axios.get(`https://fakestoreapi.com/products`)
    //   .then((res)=>{setdata(res.data);console.log(res.data);})
    //   .catch((err)=>console.log(err))

     const res=await fetch(`https://fakestoreapi.com/products`);
     const jsn=await res.json();
     setdata(jsn);
     console.log(jsn);
    }

    useEffect(()=>{
        apicall();
    },[])

    //reverse
    let str="farooque";
    console.log(str.split('').reverse().join(''));

    let no=123456;
    console.log(no.toString().split('').reverse().join(''));

    //marge array

    const arr1=[1,2,3,4];
    const arr2=[5,6,7,8,9,];
    let res=arr1+arr2;

    console.log(...arr1,...arr2);
    console.log(arr1.concat(arr2));
    console.log(res);

    //sort array

    const arraytest=[1,2,4,5,8,44,9,3,6,7,7,44,5,7,8];
    console.log("array test",arraytest);

    console.log("Sort dublicate array ",new Set(arraytest));
    console.log("Sort assending ",(arraytest.sort((a,b)=>b-a)));
    console.log("Sort desending ",(arraytest.sort((a,b)=>a-b)));

    console.log("remove ",arraytest.slice(0,3));
    console.log(" Array ",arraytest);

    console.log("remove position element",arraytest.splice(3,0,22));
    console.log(" Array ",arraytest);

  //obj
  const obj = {
    name: 20,
    email: "s@gmail.com",
    address: "xyz",
  };
  
  console.log(obj);

  //Array of obj
  const Arrobj = [
    {
      name: 21,
      email: "s1@gmail.com",
      address: "xyz",
    },
    {
      name: 22,
      email: "s2@gmail.com",
      address: "xyz",
    },
    {
      name: 23,
      email: "s3@gmail.com",
      address: "xyz",
    },
  ];
  console.log(Arrobj.map((d)=>(d.name)).sort((a,b)=>b-a));

  return (
    <div>
      01_Basic
      <input type="text" value={colorname}  onChange={Changecolor} />
      <div className="des" style={{color:'black',backgroundColor:colorname}}>Desktop Text1</div>
      <div className="mob">Mobile Text1</div>
            {loading ? 
            (<p>Loading...</p>) :
            (<button className="btn btn-primary" onClick={Increment}>{inc}</button>)}       

         

      { data && data.map((item)=>(
        <div style={{display: 'inline-flex',
        padding: '50px 100px 0px 150px'}}>
            <div key={item.id} style={{border: '1px solid rgba(0, 0, 0, 0.8)',padding: '10px',}}> 
                <img src={item.image} alt={item.title} width="100px" />
                {/* <h6>{item.title}</h6> */}
                <h5>{item.category}</h5>
            </div>
        </div>
        ))
      }
    </div>
  );
}

export default Basic;
