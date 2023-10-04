import { useState, useEffect } from 'react';

const Lifecycle = () => {
  const [users, setUsers] = useState([]);
  const[colors,setColors]=useState('red');
  const[inc,setInc]=useState(0);

 const color =(e)=>{
  setColors(e.target.value);    
  }

  const Incre=()=>{
    setInc(inc+1);
    console.log(setInc);
  }

  useEffect(() => {
    console.log("component Did mount 1 method");
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = (user) => {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => setUsers([...users, data]));
      console.log("component Did update 2 method dependency ");  
  };

  const deleteUser = (userId) => {
    fetch(`http://localhost:3001/users/${userId}`, {
      method: 'DELETE'
    })
      .then(() => {
        const newUsers = users.filter(user => user.id !== userId);
        setUsers(newUsers);
      });
      console.log("component willunmount 3 method return");
  };

  const updateUser = (updatedUser) => {
    fetch(`http://localhost:3001/users/${updatedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser)
        })
      .then(response => response.json())
      .then(data => {
        const newUsers = users.map(user => {
          if (user.id === data.id) {
            return data;
          }
          return user;
        });
        setUsers(newUsers);
      });
      console.log("component Did update 2 method dependency ");  
  };

  return (
    <div>
    <input type="text" onChange={color} value={colors}/>
    <button style={{color:colors}}>My button</button>
    <button onClick={Incre}>{inc} Increment</button>
      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
          <button onClick={() => updateUser({ id: user.id, name: 'Farooque khan', email: 'xyz@example.com' })}>Update</button>
        </div>
      ))}
      <button onClick={() => addUser({name: 'New User kj', email: 'newuser@example.com' })}>Add User</button>
    </div>


  );
};

export default Lifecycle;
