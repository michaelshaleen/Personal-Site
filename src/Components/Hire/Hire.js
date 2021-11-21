import swal from 'sweetalert';
import React from 'react';
import emailjs from 'emailjs-com';
import {useState} from 'react';
import './Hire.css';
function Hire() {
  const [userName, setName]= useState('');
  const [userEmail, setEmail]= useState('');
  const [message, setMessage]= useState('');
  const [software, setSoftware]= useState(false);
  const [coaching, setCoaching]= useState(false);
  const [massage, setMassage]= useState(false);
  console.log("massage", massage, "coach", coaching, "software", software);

  const sent = "Email Sent! Please allow up to 24 hours for a response";

  const sendEmail = (e) => {
    e.preventDefault();
    if(!userName || !userEmail || !message){
      console.log("user is missing input fields")
      swal({
        text: "Please complete all fields"
      });
    }
    else{
      console.log(e.target, "target");
    emailjs.sendForm('service_ztd1adp', 'template_x3nakci', e.target, 'user_scLGKaDBeC0iWgGw5KidR')
      .then((result) => {
          console.log("result success", result.text);
      }, (error) => {
          console.log("error verifyEmail", error.text);
      });
    console.log("name", userName);
    console.log("email", userEmail);
    console.log("message", message);
    swal({
        text: sent
      });
      setName('');
      setEmail('');
      setMessage('');
    }
  }
  
  return (<>
  <form onSubmit={sendEmail}>
    <div class="container">
      <div class="wrapper">
        {/* left side of form, checkboxes */}
        <div class="company-info">
          <p>
            Please let us know what
            services interest you, 
            check all that apply.
          </p>
          <input 
            type="checkbox"
            name="coaching"
            value={coaching}
            onChange={(event) => setCoaching(!coaching)}
          />
          Coaching
          <input 
            type="checkbox"
            name="software"
            value={software}
            onChange={(event) => setSoftware(!software)}
            />
          Software
          <input 
            type="checkbox"
            name="massage"
            value={massage}
            onChange={(event) => setMassage(!massage)}
            />
          Massage
        </div>
        {/* right side of form */}
        <div class="contact"> 
          <p>
            <label>Name</label>
            <input
              className="text-input"
              value={userName}
              type="text" 
              name="from_name"
              onChange={(event) => setName(event.target.value)}
              />
          </p> 
          <p>
            <label>Email</label>
            <input
              className="text-input"
              value={userEmail}
              type="email" 
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              />
          </p>  
          <p>
            <label>Message</label>
            <textarea
              className="text-input"
              value={message}
              name="message" 
              rows="5"
              onChange={(event) => setMessage(event.target.value)}>
            </textarea> 
          </p> 
        <button 
          className="emailBtn"  
          type="submit"
        >
            Send Email
        </button>
      </div>
    </div>
  </div>    
</form>
  </>)
}

export default Hire
