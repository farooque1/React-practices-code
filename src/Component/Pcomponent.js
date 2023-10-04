import React, { useCallback, useState } from 'react'
import Ccomponent from './Ccomponent';

function Pcomponent() {
  const [inc,setinc]=useState(0);
  const [todos, setTodos] = useState([]);

  const inccmp=()=>{
    setinc(inc+1);
    console.log(inc);
  }

  const addTodo =useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
    console.log(todos);
  },[todos])


  return (
    <div>
      <Ccomponent todos={todos} addTodo={addTodo} />

      <button onClick={inccmp}>Increment {inc}</button>
    </div>
  )
}

export default Pcomponent