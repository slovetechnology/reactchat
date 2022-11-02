import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState(false);
  const [load, setLoad] = useState(false);
  const [formerr, setFormerr] = useState({
    email: '',
    password: '',
  });
  const [forms, setForms] = useState({
    email: '',
    password: '',
  });
  const handleforms = (e) => {
    e.persist();
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const loginaccount = async (e) => {
    e.preventDefault();
    if (forms.email !== '') {
      setFormerr({ email: '' });
      if (forms.password !== '') {
        setFormerr({ password: '' });
        setLoad(true);
        const data = {
          email: forms.email,
          password: forms.password,
        };
          await axios.post('/user/login', data).then((res) => {
            setLoad(false);
            if (res.data.status === 200) {
              Swal.fire({
                title: 'Request Successful',
                text: res.data.msg,
                icon: 'success',
                confirmButtonText: 'Back',
              });
              localStorage.setItem('token', res.data.token);
              navigate('/');
            } else {
              Swal.fire({
                title: 'Request Failed oo',
                text: res.data.msg,
                icon: 'error',
                confirmButtonText: 'Back',
              });
            }
          });
      } else {
        setFormerr({ password: 'formerr' });
      }
    } else {
      setFormerr({ email: 'formerr' });
    }
  };
  return (
    <div>
      {load && (
        <div className='overlay'>
          <div className='spin'></div>
        </div>
      )}
      <div className='formcont vh-100'>
        <div className='formcontdiv vh-100'>
          <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6'>
              <div className='container my-5'>
                <div className='w-350 mx-auto p-3 formdiv rounded shadow'>
                  <form onSubmit={loginaccount}>
                    <div className='fs-3 fw-semibold text-secondary border-bottom mb-3'>
                      Login Account
                    </div>
                    <div className='form-group mb-3'>
                      <input
                        type='text'
                        name='email'
                        value={forms.email}
                        onChange={handleforms}
                        placeholder='Enter Email Address'
                        className={`${formerr.email} form-control bg-transparent`}
                      />
                    </div>
                    <div className='form-group mb-3 position-relative'>
                      <div className='position-absolute top-0 end-0 mt-2 me-1'>
                        {' '}
                        <i
                          className={`fas ${
                            pass ? 'fa-eye' : 'fa-eye-slash'
                          } fa-lg fa-fw text-muted cs-pointer`}
                          onClick={() => setPass(!pass)}></i>{' '}
                      </div>
                      <input
                        type={pass ? 'text' : 'password'}
                        name='password'
                        value={forms.password}
                        onChange={handleforms}
                        placeholder='Enter Password'
                        className={`${formerr.password} form-control formspass bg-transparent`}
                      />
                    </div>
                    <div className='text-center'>
                      <button className='btn btn-primary px-3 text-capitalize fw-semibold'>
                        login account
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div className='text-center'>
                    <div className='fw-7 text-secondary mb-3'>
                      Dont have an account yet?...
                    </div>
                    <Link
                      to='/register'
                      className='btn btn-success px-3 text-capitalize fw-semibold'>
                      create account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
