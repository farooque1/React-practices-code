import React, { useContext } from 'react'
import userContext from '../contextapi/Usercontext'

function Profile() {
    const { user }=useContext(userContext);

  return (
     <div> 
    
    {/* // { !user ? 
    //         <h1>Welcome {user}</h1> 
    //         : <h1>Please Login</h1>
    //         } */}
    <h1>Profile page</h1>
    
    </div>
  )
}
export default Profile