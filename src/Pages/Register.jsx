import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState(false);
  const [pass2, setPass2] = useState(false);
  const [viewphoto, setViewphoto] = useState('');
  const [formerr, setFormerr] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    photo: '',
  });
  const [forms, setForms] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
  });
  const [photo, setPhoto] = useState({ image: null });
  const handleforms = (e) => {
    e.persist();
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const loginaccount = async (e) => {
    e.preventDefault();
    if (photo) {
      setFormerr({ photo: '' });
      if (forms.username !== '') {
        setFormerr({ username: '' });
        if (forms.email !== '') {
          setFormerr({ email: '' });
          if (forms.phone !== '') {
            setFormerr({ photo: '' });
            if (forms.password !== '') {
              setFormerr({ password: '' });
              if (forms.password2 !== '') {
                setFormerr({ password2: '' });
                if (forms.password2 === forms.password) {
                  setFormerr({ password: '', password2: '' });
                  const data = new FormData();
                  data.append('image', photo.image);
                  data.append('username', forms.username);
                  data.append('email', forms.email);
                  data.append('phone', forms.phone);
                  data.append('password', forms.password);
                  data.append('password2', forms.password2);
                 await axios
                    .post('/user/register', data)
                    .then((res) => {
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
                    })
                    .catch((err) => {
                      Swal.fire({
                        title: 'Request Failed Main',
                        text: err,
                        icon: 'error',
                        confirmButtonText: 'Back',
                        confirmButtonColor: 'red',
                      });
                    });
                } else {
                  setFormerr({ password: 'formerr', password2: 'formerr' });
                }
              } else {
                setFormerr({ password2: 'formerr' });
              }
            } else {
              setFormerr({ password: 'formerr' });
            }
          } else {
            setFormerr({ photo: 'formerr' });
          }
        } else {
          setFormerr({ email: 'formerr' });
        }
      } else {
        setFormerr({ username: 'formerr' });
      }
    } else {
      setFormerr({ photo: 'Upload a photo' });
    }
  };
  const upoadphoto = (e) => {
    const file = e.target.files[0];
    setPhoto({ image: e.target.files[0] });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setViewphoto(e.target.result);
    };
  };
  return (
    <div>
      <div className='formcont vh-100'>
        <div className='formcontdiv vh-100'>
          <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6'>
              <div className='container my-5'>
                <div className='w-350 mx-auto p-3 formdiv rounded shadow'>
                  <form
                    onSubmit={loginaccount}
                    encType='multipart/form-data'>
                    <div className='fs-4 fw-semibold text-secondary border-bottom mb-3'>
                      Create Account
                    </div>
                    <div className='text-center form-group mb-3'>
                      <label className='cs-pointer'>
                        {!viewphoto ? (
                          <i className='fas fa-user fa-4x fa-fw text-secondary'></i>
                        ) : (
                          <img
                            src={viewphoto}
                            className='photoimg br-50 ob-fit-cover ob-position-center'
                            alt=''
                          />
                        )}
                        <input
                          type='file'
                          name='image'
                          hidden
                          onChange={upoadphoto}
                        />
                      </label>
                      <div className='fs-7 text-danger'>{formerr.photo}</div>
                    </div>
                    <div className='form-group mb-3'>
                      <input
                        type='text'
                        name='username'
                        value={forms.username}
                        onChange={handleforms}
                        placeholder='Enter Username'
                        className={`${formerr.username} bg-transparent form-control fs-7`}
                      />
                    </div>
                    <div className='form-group mb-3'>
                      <input
                        type='text'
                        name='email'
                        value={forms.email}
                        onChange={handleforms}
                        placeholder='Enter Email Address'
                        className={`${formerr.email} bg-transparent form-control fs-7`}
                      />
                    </div>
                    <div className='form-group mb-3'>
                      <input
                        type='text'
                        name='phone'
                        value={forms.phone}
                        onChange={handleforms}
                        placeholder='Enter Contact'
                        className={`${formerr.phone} bg-transparent form-control fs-7`}
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
                        className={`${formerr.password} form-control bg-transparent fs-7 formspass`}
                      />
                    </div>
                    <div className='form-group mb-3 position-relative'>
                      <div className='position-absolute top-0 end-0 mt-2 me-1'>
                        {' '}
                        <i
                          className={`fas ${
                            pass2 ? 'fa-eye' : 'fa-eye-slash'
                          } fa-lg fa-fw text-muted cs-pointer`}
                          onClick={() => setPass2(!pass2)}></i>{' '}
                      </div>
                      <input
                        type={pass2 ? 'text' : 'password'}
                        name='password2'
                        value={forms.password2}
                        onChange={handleforms}
                        placeholder='Confirm Password'
                        className={`${formerr.password2} form-control bg-transparent fs-7 formspass`}
                      />
                    </div>
                    <div className='text-center'>
                      <button className='btn btn-primary px-3 text-capitalize fw-semibold fs-8'>
                        create account
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div className='text-center'>
                    <div className='fw-7 text-secondary mb-3 fs-8'>
                      Already have an account?{' '}
                      <Link
                        to='/login'
                        className=''>
                        Login account
                      </Link>
                    </div>
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

export default Register;
