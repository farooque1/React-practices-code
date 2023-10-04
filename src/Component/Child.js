import React from 'react';

const Child = (props) => {
console.log(props);
 const user = {
    name: 'Lisa Parker',
    email: 'lisa@gmail.com',
  }

  const onClick = () => {
    props.sendData(user)
    console.log(user);
  }

  const emp ={
    department:'IT',
    email:'suuport@it.com',
    address:'xyz',
  }

  const Data=()=>{
    props.empdata(emp)
    console.log(emp);
  }

  return (
    <div>
      <button onClick={onClick}>Click Here</button>
        <button className='btn btn-warning' onClick={Data}>Send Child data</button>
    </div>
  )
}

export default Child