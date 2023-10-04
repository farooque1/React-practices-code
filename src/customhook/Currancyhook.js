import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'

function Currancyhook(currancy) {
const [data,setData]=useState({});
useEffect(()=>{
    // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currancy}.json`)
    // .then((res) => res.json())
    // .then((res) => setData(res[currancy]))
    axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currancy}.json`)
    .then(res=>{setData(res.data[currancy])})
    .catch(err=>console.log(err));
    console.log(data);
},[currancy])
console.log(data);
return data
}

export default Currancyhook


// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function Currencyhook(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     axios
//       .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//       .then((response) => {
//         setData(response.data[currency]);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [currency]);

//   console.log(data);

//   return data;
// }

// export default Currencyhook;
