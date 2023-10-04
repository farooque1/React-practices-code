import React, { memo, useState } from 'react'

function Ccomponent(todos) {
    const [incr,setincr]=useState(0);

    console.log("child component",todos);

    const incmp=()=>{
        setincr(incr+1);
        console.log(incr);
      }

  return (
    <div>
    <button onClick={incmp}>Click</button>
    Child component
    </div>
  )
}

export default memo(Ccomponent)