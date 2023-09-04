import React from 'react'
import { useState } from 'react'
import emailjs from "@emailjs/browser";
import './form.css'
import back4 from './back4.jpg'
const API_KEY="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"
function Form() {
    const [form, setForm] = useState({
        email: "",
        fname: "",
        age: "",
        education: "",
        college: "",
        wherestudy: "",
        exp:"",
        cacollege: "",
        program: "",
        cntry: "",
        goals: "",
        listening: "",
        reading: "",
        speaking: "",
        writing: "",
        pay: "",
        fee: "",
        gic:"",
        gicpay:""
      });
      const [loading, setLoading] = useState(false);
      const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };
      //email,fname,age,education,college,wherstudy,cacollege,program,cntry,goals,listening,reading,speaking,writing,message,pay,fee,gic,gicpay
    const generateSOP = async () => {
      setLoading(true);
        const APIBody={
            "model":"text-davinci-003",
            prompt:`Write Statement of Purpose for following details: Name:${form.fname}, Age:${form.age}, Highest Level of Education:${form.education}, Institute where you completed your highest level of education:${form.college}
            , Studied at:${form.wherestudy}, Work Experience:${form.exp}, Admitted to ${form.cacollege} college in Canada, Program of Study in Canada:${form.program}, Applying from Country:${form.cntry}, Having Future Goals:${form.goals}
            , English Scores - Listening:${form.listening}, English Scores - Reading:${form.reading}, English Scores - Speaking:${form.speaking}
            , English Scores - Writing:${form.writing}, Did he pay your first year tuition?:${form.pay}, With Tution Fee paid:${form.fee}
            , If he did a GIC:${form.gic}, Amount paid to GIC:${form.gicpay}.`,
            "temperature":0,
            "max_tokens":3500,
            "top_p":1.0,
            "frequency_penalty":0.0,
        }
        try {
            const response = await fetch("https://api.openai.com/v1/completions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`,
              },
              body: JSON.stringify(APIBody),
            });
        
            if (!response.ok) {
              throw new Error(`API request failed with status ${response.status}`);
            }
        
            const data = await response.json();
            const generatedsop = data.choices[0].text;
            console.log(generatedsop);
        emailjs
          .send(
            'service_m8m72ld',
            'template_bm1ijdi',
            {
              from_name: "Effizient",
              to_name: form.fname,
              from_email:"dattatanu20@gmail.com",
              to_email: form.email,
              subject:"Your SOP",
              message: generatedsop,
            },
            '4LTIL2vhxXFuisfQh'
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you. Your SOP is sent to your E-mail!");
    
              setForm({
                email: "",
                fname: "",
                age: "",
                education: "",
                college: "",
                wherestudy: "",
                exp:"",
                cacollege: "",
                program: "",
                cntry: "",
                goals: "",
                listening: "",
                reading: "",
                speaking: "",
                writing: "",
                pay: "",
                fee: "",
                gic:"",
                gicpay:""
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              alert("Ahh, something went wrong. Please try again.");
            }
          );
          } catch (error) {
            console.error(error);
          }
      };
  return (
    <div className='form_bg'>
    <img className='bg4' src={back4} alt='bg'></img>
    <div className='form'>
      <form className='needs-validation ' noValidate>
  <div className="form-row front-row1">
    <div className="form-group col-md-3">
      <label for="inputEmail4" className='font-weight-bold'>Email<span className='star'>*</span></label>
      <input type="email" class="form-control " name='email' value={form.email} onChange={handleChange} id="inputEmail4" placeholder="Your Email" required/>
    </div>
    <div className="form-group col-md-3">
      <label for="inputPassword4" className='font-weight-bold'>Full Name<span className='star'>*</span></label>
      <input type="text" class="form-control" id="inputAddress" name='fname' value={form.fname} onChange={handleChange} placeholder="Your Name" required/>
    </div>
    <div className="form-group col-md-3">
    <label for="inputAddress" className='font-weight-bold'>Age<span className='star'>*</span></label>
    <input type="number" class="form-control" id="inputAddress" name='age' value={form.age} onChange={handleChange} placeholder="Your Age" required/>
  </div>
  </div>
  <div className='form-row front-row2'>
    <div className="form-group col-md-3 upar">
      <label for="inputState" className='font-weight-bold'>Highest Level of Education<span className='star'>*</span></label>
      <select id="inputState" name='education' value={form.education} onChange={handleChange} class="form-control">
        <option selected>Choose...</option>
        <option>Grade 12</option>
        <option>Diploma</option>
        <option>Bachelors Degree</option>
        <option>Masters Degree</option>
        <option>PhD</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputCity" className='font-weight-bold'>Institute where you completed your highest level of education<span className='star'>*</span></label>
      <input type="text" class="form-control" id="inputCity" onChange={handleChange} name='college' value={form.college} placeholder="Your Answer" required/>
    </div>
    <div className="form-group col-md-3 upar">
      <label for="inputCity" className='font-weight-bold'>Where did you Study?<span className='star'>*</span></label>
      <input type="text" class="form-control" id="inputCity" onChange={handleChange} name='wherestudy' value={form.wherestudy} placeholder="Your Answer" required/>
    </div>
    </div>
  <div class="form-row front-row3">
    <div class="form-group col-md-8">
      <label for="inputCity" className='font-weight-bold'>Do you have any relevant work experience?<span className='star'>*</span><br/>
Write None if no work experience. Provide the following details if yes:<br />
1.Job Title<br />
2.Company Name<br />
3.Job duties<br />
Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.</label>
      <textarea rows="7" cols="90" className='form-control' type="text" onChange={handleChange} name='exp' value={form.exp} id="inputCity"  placeholder="Your Answer" required></textarea>
    </div>
    </div>
    <div className='form-row front-row4'>
    <div class="form-group col-md-3">
      <label for="inputZip" className='font-weight-bold'>What institute did you get admitted to in Canada?<span className='star'>*</span></label>
      <input type="text" class="form-control" name='cacollege' onChange={handleChange} value={form.cacollege} id="inputZip" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip" className='font-weight-bold'>What is your program of study in Canada?<span className='star'>*</span></label>
      <input type="text" class="form-control" name='program' onChange={handleChange} value={form.program} id="inputZip" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip" className='font-weight-bold'>Which country are you applying from?<span className='star'>*</span></label>
      <input type="text" class="form-control" name='cntry' onChange={handleChange} value={form.cntry} id="inputZip" required/>
    </div>
  </div>

  <div className='form-row front-row5'>
    <div class="form-group col-md-9">
      <label for="inputZip" className='font-weight-bold'>What are your future goals?<span className='star'>*</span></label>
      <textarea rows="7" cols="90" className='form-control'  type="text" onChange={handleChange} name='goals' value={form.goals} id="inputCity"  placeholder="Your Answer" required></textarea>
    </div>
  </div>

  <div className='form-row front-row6'>
    <div class="form-group col-md-2">
      <label for="inputZip" className='font-weight-bold'>English Scores - Listening<span className='star'>*</span></label>
      <input type="text" class="form-control" onChange={handleChange} name='listening' value={form.listening} id="inputZip" required/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip" className='font-weight-bold'>English Scores - Reading<span className='star'>*</span></label>
      <input type="text" class="form-control" onChange={handleChange} name='reading' value={form.reading} id="inputZip" required/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip" className='font-weight-bold'>English Scores - Speaking<span className='star'>*</span></label>
      <input type="text" class="form-control" onChange={handleChange} name='speaking' value={form.speaking} id="inputZip" required/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip" className='font-weight-bold'> English Scores - Writing<span className='star'>*</span></label>
      <input type="text" class="form-control" onChange={handleChange} name='writing' value={form.writing} id="inputZip" required/>
    </div>
  </div>
  
  <div className='form-row front-row7'>
  <div class="form-group col-md-4">
      <label for="inputState" className='font-weight-bold'>Did you pay your first year tuition?<span className='star'>*</span></label>
      <select id="inputState" name='pay' value={form.pay} onChange={handleChange} class="form-control">
        <option selected>Choose...</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip" className='font-weight-bold'>How much tuition fee did you pay?<span className='star'>*</span></label>
      <input type="text" class="form-control" onChange={handleChange} name='fee' value={form.fee} id="inputZip" required/>
    </div>
  </div>

  <div className='form-row front-row8'>
  <div class="form-group col-md-2">
      <label for="inputState" className='font-weight-bold'>Did you do a GIC?<span className='star'>*</span></label>
      <select id="inputState" name='gic' value={form.gic} onChange={handleChange} class="form-control">
        <option selected>Choose...</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip" className='font-weight-bold'>How much did you pay towards GIC?<span className='star'>*</span></label>
      <input type="text" name='gicpay' onChange={handleChange} value={form.gicpay} class="form-control" id="inputZip" required/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary btn-lg rounded-lg" onClick={(e) => { e.preventDefault(); generateSOP();  }} >      {loading ? "Sending..." : "Send"}       </button>
</form>
</div>
    </div>
  )
}

export default Form
