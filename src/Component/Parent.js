import React, { useState } from 'react'
import Child from '../Component/Child';

function Parent() {

  const [data, setData] = useState({
    name: '?',
    email: '?',
  })
 const [Emp,setEmp]=useState({
    department:'',
    email:'',
    address:'',
 })

console.log(Emp);
console.log(data);

 const sendData = (data) => {
    setData(data)
  }

  const empdata = (Emp) =>{
    setEmp(Emp)
  }

  return (
    <div className="App">
      <h2>React Pass Data Child to Parent Component Examle</h2>
      
      <Child sendData={sendData} empdata={empdata}/>
      <div>
        The user data sent from Child compoent:
        <strong>{data.name + ' : ' + data.email}</strong>
      </div>
        {/* <Child  /> */}
        <span>Department {Emp.department} .</span>
        <span>Address {Emp.address} .</span>
        <span>Email {Emp.email} .</span>

    </div>
  )
}
export default Parent