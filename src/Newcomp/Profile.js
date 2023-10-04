import React, { useContext } from 'react'
import UserContext from '../contextapi/Usercontext'

function Profile() {
    const { user }=useContext(UserContext);
    console.log(user);
    // if (!user) return <div>please login</div>
    // return <div>Welcome {user.username}</div>
    
  return (
     <div> {!user?<h1>Please Login</h1>:<h1>Welcome {user.username}</h1>} </div>
  )
}
export default Profile