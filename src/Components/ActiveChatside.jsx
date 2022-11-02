import React, { useState } from 'react';
import Users from '../Components/Users';
import { Chatside } from '../Store/Data';
import { Link, useNavigate } from 'react-router-dom';
import img1 from "../images/1.jpg"
import { useDispatch } from 'react-redux';

const ActiveChatside = () => {
  const [showlogs, setShowlogs] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => {
    navigate('/login')
  }
  
  return (
    <>
      <div className='fbody position-relative bg-white'>
        {showlogs && (
          <div className='showlogs rounded shadow'>
            <Link to=''>New Group</Link>
            <Link to=''>Profile</Link>
            <Link to=''>Catalog</Link>
            <Link to=''>Starred Messages</Link>
            <Link to=''>Labels</Link>
            <Link to=''>Settings</Link>
            <Link to='' onClick={logout}> Logout </Link>
          </div>
        )}
        <div className='fbody1 border-bottom'>
          <div className='d-flex align-items-center justify-content-between py-2 px-4 bg-light'>
            <div className='d-flex align-items-center gap-3'>
              <img
                src={img1}
                alt=''
                className='frimg ob-fit-cover br-50 ob-position-center'
              />
            </div>
            <div className='d-flex align-items-center gap-4'>
              <i className='fas fa-search fs-5 fa-fw cs-pointer'></i>
              <i
                className='far fa-comment-alt fs-5 fa-fw cs-pointer'
                onClick={() => dispatch(Chatside())}></i>
              <i
                className='fas fa-ellipsis-v fs-5 fa-fw cs-pointer'
                onClick={() => setShowlogs(!showlogs)}></i>
            </div>
          </div>
          <div className='d-flex align-items-center gap-3 px-3 py-2'>
            <div className='bg-light rounded w-100'>
              <form className='d-flex align-items-center'>
                <i className='fas fa-search fa-sm fa-fw text-muted'></i>
                <input
                  type='text'
                  name=''
                  placeholder='Search or start a new chat'
                  className='form-control bg-transparent border-0'
                />
              </form>
            </div>
            <div className=''>
              {' '}
              <i className='fas fa-align-justify fa-lg fa-fw text-muted'></i>{' '}
            </div>
          </div>
        </div>
        <div className='fbody2 greyscroll overflow-y-auto'>
          <Users />
          {/* ends */}
        </div>
      </div>
    </>
  );
  }
  
export default ActiveChatside;
