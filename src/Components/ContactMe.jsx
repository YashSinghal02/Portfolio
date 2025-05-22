import React, { useState } from 'react';
import { Clock } from './Clock';

const ContactMe = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    copy: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <div className="container mt-5 pt-5" style={{ backgroundColor: props.mode === 'dark' ? '#000000' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
<div className="row text-center mb-5">
    <h2 className='fs-2 fw-bold'>Reach Me Out</h2>
</div>


        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col">
            {/* <img src="" alt="" /> */}
            <h2>Have Any Questions?</h2>
            <p>Do you have any questions or need more information? I'm here to assist you! Whether it's about a specific project, my skills, or how we can collaborate, don't hesitate to reach out. Your inquiries are important to me, and I'll do my best to respond promptly. Use the form below to send me a message, and let's start a conversation. Looking forward to hearing from you soon!</p>
            <br />

    <h5><i className="fa-solid fs-4 fa-mobile-screen-button"></i> +91-6397341005</h5><br />
    <h5><i className="fa-solid fs-4 fa-envelope"></i> yash92singhal@gmail.com</h5><br />
    <h5><i className="fa-solid fs-4 fa-location-dot"></i> Uttrakhand,Dehradun</h5><br />
    <h5><Clock/></h5>


          </div>

          <div className="col contactme">
            <form style={{ border:"2px solid ",borderRadius:"5px",borderColor: props.mode === 'dark' ? 'white' : '#000000',backdropFilter:"blur(10px)",background:"url(https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-green-flower-clipart-png-image_10021632.png),rgb(108 108 108 / 14%)",backgroundPosition:"center",backgroundSize:"auto"}} onSubmit={handleSubmit}>
              {/* <!-- Name input --> */}
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example1">Name</label>
                <input type="text" id="form4Example1" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>

              {/* <!-- Email input --> */}
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example2">Email address</label>
                <input type="email" id="form4Example2" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>

              {/* <!-- Message input --> */}
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example3">Message</label>
                <textarea className="form-control" id="form4Example3" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                {errors.message && <div className="text-danger">{errors.message}</div>}
              </div>

              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  name="copy"
                  checked={formData.copy}
                  onChange={handleChange}
                  id="form4Example4"
                />
                <label className="form-check-label" htmlFor="form4Example4">
                  Send me a copy of this message
                </label>
              </div>

              {/* <!-- Submit button --> */}
              {/* <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-4">Send</button> */}


              <button>
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>


              {/*  */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;