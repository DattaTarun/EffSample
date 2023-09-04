import React from 'react'
import { useRef } from 'react'
import back3 from "./back3.jpg"
import pic1 from "./pic1.png"
import pic3 from "./pic3.png"
import arrow from './arrow.png'
import './intro.css'
import Form from './Form'
function Intro() {
  const handleclick=()=>{
    window.scrollTo({
      top:800,
      behavior: "smooth"
  });
  }
  return (
    <div className='intro'>
      <img src={back3}  className="bg" alt='background'></img>
      <div className='textpart'>
      <h1 className='heading font-weight-bold'>Let's Create <br />your SOP!</h1>
      <ul className='wholepara'>
        <li className='para'><h4 className='font-weight-bold'>Fill this questionnaire for the student.</h4></li>
        <li className='para'><h4 className='font-weight-bold'>After submitting, you will receive an email <br />
      at the email address that you have provided <br />
      with a Statement of Purpose customized for you.</h4></li>
        <li className='para'><h4 className='font-weight-bold'>You can use and modify that as per your needs.</h4></li>
      </ul>
      </div>
      <div className='pictures'>
      <img src={pic1} alt='picture1' className='pic1'></img>
      <img src={pic3} alt='picture2' className='pic2'></img>
      </div>
      <a class="arrow down" onClick={handleclick}>Down</a>

    </div>
  )
}

export default Intro
