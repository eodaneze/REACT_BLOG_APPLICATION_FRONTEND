import React from 'react'
import './write.css'
import writeImg from "../../../assets/blog-4.jpg"
const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src={writeImg} alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="fas fa-plus writeIcon"></i>
                </label>
                 <input type="file" id="fileInput" style={{display: "none"}} />
                 <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                 <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write