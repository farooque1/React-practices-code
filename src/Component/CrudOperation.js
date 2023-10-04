import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash';

function CrudOperation() {

    const [data, setData] = useState([]);
    const [Datafilter, setFilter] = useState(data);
    const [Search, setSearch] = useState("");

    const fetchdetails = () => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                console.log(res.data)
                setData(res.data);
            //     setFilter(res.data.filter((item)=>
            //     item.title.toLowerCase().indexOf(Search.toLowerCase()) !== -1
            // ))
            })
            .catch(err => { console.log(err); })
    }

    useEffect(() => {
        fetchdetails();
        const debouncesearch = debounce((event)=>{setFilter(data.filter((item)=>
            item.title.toLowerCase().indexOf(Search.toLowerCase()) !== -1
        ))
    },1000)
    debouncesearch(Search); 
    console.log(debouncesearch);
        // Searchoption();
    }, [Search])

    //  const Searchoption =()=>{
    //   setFilter(data.filter((item)=>
    //       item.title.toLowerCase().indexOf(Search.toLowerCase()) !== -1
    //   ))
    // .filter((data) => {
    //     if (Search === "") {
    //         return data;
    //     } else if (data.title.toLowerCase().indexOf(Search.toLowerCase()) !== -1) {
    //          return data;    
    //     }
    // setTimeout(()=>{
    //   },500) 
//}

// console.log(Datafilter);


// {Datafilter.filter((data) => {
//     if (Search === "") {
//         return data;
//     } else if (data.title.toLowerCase().indexOf(Search.toLowerCase()) !== -1) {
//          return data;    
//     }
//     }).map((data, id) => {

    const filterproduct = (cat) => {
        const list = data.filter((x) => x.category === cat);
        setFilter(list);
        console.log("update list", list);
    }

    return (
        <div className='container my-5'>
            <span className=''> Crud Operation </span>
            <input type="text"
                className="form-control my-3"
                placeholder='Search'
                onChange={(e) => { setSearch(e.target.value) }}
            />

            <div className='row justify-content-center'>
                <div className='buttons d-flex justify-content-center my-4'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}> All </button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterproduct("men's clothing")}>Men Cloth</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterproduct("women's clothing")}>Women's Cloth</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterproduct("electronics")}>Electronics </button>
                </div>

                {Datafilter && Datafilter.map((data, id) => {
                    return (
                        <div className='col-md-4 mb-3'>
                            <div class=" card h-100 text-center" key={data.id}>
                                {/* <img src={data.image} className="card-img-top p-4" alt={data.title} width="100px" height="300px" /> */}
                                <div class="card-body">
                                    <h6 class="card-title">{data.title}</h6>
                                    <p class="card-text">{data.category}</p>
                                </div>
                            </div>
                        </div>
                    )
                    })
                    } 
            </div>
        </div>

    )
}

export default CrudOperation