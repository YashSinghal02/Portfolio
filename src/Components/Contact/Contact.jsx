import Sendbtn from '../Buttons/Sendbtn'
import './Contact.css'

function Contact() {
  return (
    <div>
      <div className="about-heading">
        <h2>Get in Touch</h2>
      </div>
      <div className="contact-flex">
        <div className="form-txt">
       <h2>Have Any Questions?</h2>
      <p>Do you have any questions or need more information? I'm here to assist you! Whether it's about a specific project, my skills, or how we can collaborate, don't hesitate to reach out. Your inquiries are important to me, and I'll do my best to respond promptly. Use the form below to send me a message, and let's start a conversation. Looking forward to hearing from you soon!</p>
      <div className="contact-icons">
        <h4><i class="fa-solid fa-mobile-screen-button"></i> +91-6397341005</h4>
        <h4><i class="fa-solid fa-envelope"></i>  yash92singhal@gmail.com</h4>
        <h4><i class="fa-solid fa-location-dot"></i>  Uttrakhand,Dehradun</h4>
      </div>
        </div>
        <div className="form-app">
         <form action="">
          <label >Name</label>
          <input type="text" placeholder='Name' />
          <label >Phone Number</label>
          <input type="phone" placeholder='Phone Number' />
          <label >Email</label>
          <input type="email" placeholder='Email' />
          <label >Message</label>
          <textarea name="" rows={4} cols={3} id=""></textarea>
          <Sendbtn/>
         </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
