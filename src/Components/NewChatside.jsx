import React from 'react'
import { useDispatch } from 'react-redux';
import { Chatside } from '../Store/Data';
import Users from './Users';

const NewChatside = () => {
  const dispatch = useDispatch()
  
  return (
    <div className="fbody">
        <div className="fbody_1 border-bottom pt-5">
          <div className="d-flex align-items-center gap-3 px-3 pb-3">
            <i className="fas fa-arrow-left fa-lg fa-fw text-white cs-pointer" onClick={() => dispatch(Chatside())}></i>
            <div className="fw-bold text-white text-capitalize lead">new chat</div>
          </div>
            <div className="d-flex align-items-center gap-3 px-3 py-2 bg-white">
              <div className="bg-light rounded w-100">
                <form className='d-flex align-items-center'>
                  <i className="fas fa-search fa-sm fa-fw text-muted"></i>
                  <input type="text" name="" placeholder="Search or start a new chat" className="form-control bg-transparent border-0" />
                </form>
              </div>
            </div>
        </div>
        <div className="fbody_2 greyscroll overflow-y-auto">
          <Users />
        </div>
    </div>
  )
}

export default NewChatside