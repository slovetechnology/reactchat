import React from 'react'
import nochat from "../images/download-5.svg"

const Nochats = () => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center vh-100">
        <div className="w-350">
            <div className="text-center"> <img src={nochat} alt="" className="w-100" /> </div>
            <div className="text-center"><div className="lead fs-3 text-secondary">Slovetechnology ChatApp</div></div>
            <div className="text-center text-secondary">Assisting you in making your web chat experience better then ever <i className="far fa-smile fa-lg fa-fw text-success"></i> </div>
        </div>
    </div>
  )
}

export default Nochats