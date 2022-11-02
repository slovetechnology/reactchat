import React from 'react'
import User from './User';
import users from "../Userdata"

const Users = () => {
  
    return (
      <div>
        {users.map((item, index) => (
          <User key={index} user={item} />
        ))}
      </div>
    )
  }
  

export default Users