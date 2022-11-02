import React from 'react'
import { format } from 'timeago.js';

const Chat = ({chat}) => {
  return (
    <>
        {chat.sender ? 
            <div className="incoming position-relative">
                <div className="indiv bg-white rounded-3 py-1 px-3 shadow-sm">
                    <div className="fs-8 fw-semibold">{chat.text}</div>
                    <div className="text-end fs-7 text-muted">{format(chat.createdAt)}</div>
                </div>
            </div>
        :
        <div className="outgoing position-relative">
            <div className="outdiv rounded-3 py-1 px-3 shadow-sm">
                <div className="fs-8 fw-semibold">{chat.text}</div>
                <div className="text-end fs-7 text-muted">{format(chat.createdAt)}</div>
            </div>
        </div>
        }
    </>
  )
}

export default Chat