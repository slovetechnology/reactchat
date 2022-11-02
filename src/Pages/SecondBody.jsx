import React from 'react'
import { useSelector } from 'react-redux'
import Chatroom from './Chatroom';
import Nochats from './Nochats'

const SecondBody = () => {
  const {room} = useSelector((state) => state.chattoggle);
  return (
    <div className="lbody bg-light  d-none d-md-block">
        {!room ? <Nochats /> : <Chatroom />}
    </div>
  )
}

export default SecondBody