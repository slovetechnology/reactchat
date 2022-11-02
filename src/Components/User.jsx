import React from 'react'
import { useDispatch } from 'react-redux'
import { chatroom } from '../Store/Data';

const User = ({user}) => {
      const dispatch = useDispatch();
    const openChatroom = () => {
      dispatch(chatroom())
    }
  return (
    <div className="d-flex align-items-center p-2 gap-3 cs-pointer usersfdiv" onClick={openChatroom}>
      <div className=""> <img src={user.img} alt="" className="usersimg ob-fit-cover ob-position-center br-50" /> </div>
      <div className="border-bottom w-100 py-2">
        <div className="d-flex justify-content-between">
          <div className="">
            <div className="fs-5 fw-semibold">Lorem ipsum dolor sit amet. </div>
            <div className="fs-7 text-secondary"> <i className="fas fa-check fs-7 text-success fa-fw"></i> <span className="">Lorem ipsum dolor sit amet consectetur adipisicing.</span> </div>
          </div>
          <div>
            <div className="text-end"><i className="fas fa-circle fa-fw dots"></i> </div>
            <div className="fs-7 text-end">2d ago</div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default User