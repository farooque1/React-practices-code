import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CConsumer, Consumer } from './Contextdata';

const BasicReact = () => {

    const [name, Setname] = useState();
    const [mycolor, setColor] = useState();
    const [datass, setData] = useState([]);
    const [inc,setinc]=useState(0);

    const incre=()=>{
        setinc(inc+1);
    }

    let numbers=[1,5,3,7,9,2];
    let sortno=numbers.sort();
    console.log(sortno);

    const color = (e) => {
        Setname(e.target.value);
    }

    const Changecolor = () => {
        setColor();
    }

    const apicall = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                console.log(res.data)
                setData(res.data);
            })

            .catch((err) => console.log(err));
    }
    useEffect(() => {
        apicall();
    }, [])

    return (
        <>
            <div className='container my-5'>
                
                {/* <h1>Basic React Question</h1>
                <p>Props,state,event,key,map,context api,api</p> */}
                {/* <h2>MY Name is <Test2 name="Farooque shaikh" /></h2>
                <h2>MY salary is <Test2 salary="6564646546546" /></h2> */}

                <div>
                    {/* <h2>MY Company Name is <Test2 company_name="x tOols" /></h2> */}

                    <button className='btn btn-danger' onClick={incre}>Click me to incress</button>
                    <span>Increment value  {inc}</span> 
                    <span>My state value is {name}</span>
                    <input type="text" value={name} onChange={color} />
                    <button style={{ backgroundColor: name }} className="btn btn-outline-dark">My button color change with state value </button>

                    <p style={{ Color: mycolor }}>Hello change my color</p>
                    <button onClick={Changecolor} className="btn btn-outline-dark"> Click me to change the color </button>
                </div>

                {/* <CConsumer>
                    {
                        (data) => <div>
                                    <p>{data.email}</p>
                                    <p>{data.name}</p>
                                    <p>{data.phone}</p>
                                  </div>
                    }
                </CConsumer> */}
                <div>
                    {
                        datass ? (datass.map(d =>
                        (
                            <div className='container bg-warning d-flex my-2' key={d.id}>
                                <p>{d.id} ---- </p>
                                <p>{d.title}</p>
                            </div>
                        ))) : (<p>Loading...</p>)}
                </div>
            </div>
        </>
    )
}

export default BasicReact