import React, { useState } from 'react'
import Chat from '../Components/Chat';
import img1 from "../images/1.jpg"
import chats from "../ChatData"

const Chatroom = () => {
    const [forms, setForms] = useState({
        text: '',
    })
    const handleforms = e => {
        e.persist()
        setForms({...forms, [e.target.name]: e.target.value});
    }
    const sendMsg = e => {
        e.preventDefault();
    }
    const openChatroom = () => {
        //
    }
  return (
    <div className="">
        <div className="d-flex align-items-center justify-content-between py-2 px-4">
            <div className="d-flex align-items-center gap-3">
                <div className="d-lg-none" onClick={openChatroom}> <i className="fas fa-arrow-left fa-lg fa-fw cs-pointer"></i> </div>
                <img src={img1} alt="" className="frimg ob-fit-cover br-50 ob-position-center" />
                <div className="">
                    <div className="fw-semibold">Lorem ipsum dolor sit amet.</div>
                    <div className="fs-7 text-secondary text-capitalize">Online</div>
                </div>
            </div>
            <div className="d-flex align-items-center gap-4">
                <i className="fas fa-search fs-5 text-muted fa-fw cs-pointer"></i>
                <i className="fas fa-ellipsis-v fs-5 text-muted fa-fw cs-pointer"></i>
            </div>
        </div>
        {/* chat room */}
        <div className="chatroom overflow-y-auto greyscroll py-3 px-5">
            {chats.map((item, index) => (
                <Chat key={index} chat={item} />
            ))}
        </div>
        <form onSubmit={sendMsg}>
            <div className="d-flex align-items-center gap-3 px-3 py-1">
                <i className="far fa-smile fs-4 fa-fw text-secondary cs-pointer"></i>
                <i className="fas fa-paperclip fs-4 fa-fw text-secondary cs-pointer"></i>
                <div className="w-100">
                        <textarea cols="30" value={forms.text} name="text" onChange={handleforms} rows="2" placeholder='Type a message' className='form-control border-0'></textarea>
                </div>
                <button className="btn br-50"> <i className="far fa-paper-plane fs-4 fa-fw"></i> </button>
            </div>
        </form>
    </div>
  )
}

export default Chatroom