import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BasicReact from './BasicReact';
import { CProvider } from './Contextdata';
import Contextdetails from './Contextdetails';


function Test2() {

    const [Data, setData] = useState({
        name: 'M Farooque shaikh',
        email: 'sfarooque@gmail.com',
        phone: '96587412302',
        address: 'XYZ Building XYZ Area XYZ state..'
    })
    const [Items, SetItems] = useState([]);
    const [datavalue,Setdatavalue]=useState([]);
    const uservalue = (email, depart, salary) => {
        console.log(userdetails.name + " " + email + " " + depart + " " + salary + " " + userdetails.address);
    }
    var userdetails = {
        name: "farooque",
        address: "xyz"
    }
    var user1 = [1, 2, 3, 4];
    var user2 = [13, 24, 33, 34];
    var user3 = ['farooque', 'shaikh', 'a', 'b'];
    var user4 = ['Mohd farooque', 'sk', 'desfra', 'bbb'];
    var result = [...user1, ...user2];
    console.log("Results ....", result);
    var result1 = [...user4, ...user3];
    console.log("Results1 Value....", result1);
    console.log("Results Value....", result1[0]);


    uservalue.call(userdetails, "sfarooque65@gmail.com", "IT", 5500000);

    // console.log("apply value ",userdetails);

    uservalue.apply(userdetails, ["sfarooq@gmail.com", "Developer", 10500000]);

    var mydetails = uservalue.bind(uservalue);

    mydetails("Farooque shaikh", "Software developer", 53257572363828);
    // console.log(mydetails);

    const Apicall = () => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((res) => { SetItems(res.data); console.log(res.data); })
            .catch((error) => { console.log(error); })
    }

    useEffect(() => {
        Apicall();
        setTimeout(()=>{
            myapitest();
        },10000)

    },[])


    var arrayOne = [1, 3, 4, 2, 5, 4, 6, 8, 9, 1, 2];
    console.log("Original Array ", arrayOne);

    var arrayname = ['farooque', 'shaikh','khan','noor','farooque','farooque'];
    console.log("Original Array name", arrayname);

    var sort12 = arrayname.sort();
    console.log("Sort name", sort12);

    var remove12 = new Set(sort12);
    console.log("remove dublicate name", remove12);

    var sort = arrayOne.sort();
    console.log("Sort", sort);

    var remove = new Set(sort);
    console.log("remove dublicate", remove);

    var Assending_order=new Set(arrayOne.sort( ( a , b ) => b - a ));
    console.log("Assending_order list....",Assending_order);

    var Desending_order=new Set(arrayOne.sort( ( a , b ) => a - b ));
    console.log("Desending_order list....",Desending_order);

    var AverageNumber=new Set(arrayOne.sort( ( a , b ) => a + b ));
    console.log("Average Number....",AverageNumber);

    console.log("Max number...",Math.max(...Assending_order));
    console.log("Min number...",Math.min(...Assending_order));

    // var ArrayTwo = [1, 33, 42, 42, 56, 47, 68, 8, 99, 1, 2];
    // console.log("Array Two ", ArrayTwo);

    // let Sort_Array_Two = ArrayTwo.sort();
    // console.log("Sort Array Two... ", Sort_Array_Two);

    // let removeTwo = new Set(Sort_Array_Two);
    // console.log("remove dublicate Two", removeTwo);


    // let sort_array =  array.sort((a,b)=>a-b);
    // console.log("Sort array ",sort_array);

    let numbers=[1,5,3,7,9,2];
    let sortno=numbers.sort();
    console.log(sortno);

    let remove1=new Set(numbers);
    console.log(remove1);

    let ase=numbers.sort((a,b)=>a - b);
    console.log(ase);

    let des = numbers.sort((a,b)=>b-a);
    console.log(des);

const myapitest =()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{Setdatavalue(res.data); console.log(res.data)})
    .catch(err=>console.log(err))

}   
    return (
        <div className='container'>
        <div>
            
            {
                datavalue.map((id)=>
                <div key={id.id}>Testing {id.title}</div>)
            }
            
        </div>
            
            {/* {props.name}
            {props.company_name}
            {props.salary} */}
                <h1>Hello</h1>
            <div>
                {/* {Data.name}--  
            {Data.email}--
            {Data.address}--
            {Data.phone} */}
            </div>
            {/* {
                Items && Items.map((item,id)=>(
                    <div key={id}> {item.title} </div>
                ))
            } */}

            {/* <CProvider value={Data}>
                <Contextdetails />
                <BasicReact />
            </CProvider> */}
        </div>
    )
}

export default Test2