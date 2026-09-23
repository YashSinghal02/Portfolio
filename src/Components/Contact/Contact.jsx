import Sendbtn from "../Buttons/Sendbtn";
import "./Contact.css";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";

function Contact() {
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  async function onSubmit(data) {
    console.log("Submitted Data:", data);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    reset();
  }

  return (
    <div className="contact-section">
      {/* Heading */}
      <motion.div
        className="about-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="contact-label">
          <span className="project-label-dot"></span>
          CONTACT
        </span>
        <h2>Get in Touch</h2>
        <p>
          Have a project in mind? Let's create something meaningful together.
        </p>
      </motion.div>

      <div className="contact-flex">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="form-txt"
        >
          <span className="contact-small-title">LET'S TALK</span>

          <h2>
            Have an idea?
            <br />
            <span>Let's make it happen.</span>
          </h2>

          <p>
            Whether you have a project idea, a question, or simply want to
            connect, feel free to reach out. I'm always open to discussing new
            ideas, creative projects, and opportunities to collaborate.
          </p>

          <div className="contact-icons">
            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>

              <div>
                <span>Phone</span>
                <h4>+91-6397341005</h4>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>

              <div>
                <span>Email</span>
                <h4>yash92singhal@gmail.com</h4>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div>
                <span>Location</span>
                <h4>Dehradun, Uttarakhand</h4>
              </div>
            </div>
          </div>

          <div className="availability">
            <span className="availability-dot"></span>
            Available for new projects
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="form-app"
        >
          <div className="form-top">
            <div>
              <span>01</span>
              <h3>Send a Message</h3>
            </div>

            <i className="fa-regular fa-paper-plane"></i>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name */}
            <div className="input-group">
              <label htmlFor="name">
                Name
                <span>*</span>
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                className={errors.name ? "input-invalid" : ""}
                {...register("name", {
                  required: "Please enter your name",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                  maxLength: {
                    value: 40,
                    message: "Name cannot exceed 40 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z\s.'-]{2,39}$/,
                    message: "Please enter a valid name",
                  },
                })}
              />

              {errors.name && (
                <p className="error-text">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone + Email */}
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="phone">
                  Phone
                  <span>*</span>
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  autoComplete="tel"
                  className={errors.phone ? "input-invalid" : ""}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^(\+91|0)?[6-9]\d{9}$/,
                      message: "Enter a valid Indian phone number",
                    },
                  })}
                />

                {errors.phone && (
                  <p className="error-text">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="email">
                  Email
                  <span>*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={errors.email ? "input-invalid" : ""}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />

                {errors.email && (
                  <p className="error-text">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="input-group">
              <label htmlFor="message">
                Message
                <span>*</span>
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className={errors.message ? "input-invalid" : ""}
                {...register("message", {
                  required: "Please enter your message",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Message cannot exceed 1000 characters",
                  },
                })}
              />

              {errors.message && (
                <p className="error-text">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="form-bottom">
              <p>
                <i className="fa-solid fa-lock"></i>
                Your information stays private.
              </p>

              <Sendbtn disabled={isSubmitting} />
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
