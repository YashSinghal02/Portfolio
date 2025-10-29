import Sendbtn from "../Buttons/Sendbtn";
import "./Contact.css";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data) {
    console.log("Submitted Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
  }
  return (
    <div>
      <div className="about-heading">
        <h2>Get in Touch</h2>
      </div>
      <div className="contact-flex">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,

            transition: { duration: 0.3 },
          }}
          className="form-txt"
        >
          <h2>Have Any Questions?</h2>
          <p>
            Do you have any questions or need more information? I'm here to
            assist you! Whether it's about a specific project, my skills, or how
            we can collaborate, don't hesitate to reach out. Your inquiries are
            important to me, and I'll do my best to respond promptly. Use the
            form below to send me a message, and let's start a conversation.
            Looking forward to hearing from you soon!
          </p>
          <div className="contact-icons">
            <h4>
              <i className="fa-solid fa-mobile-screen-button"></i>{" "}
              +91-6397341005
            </h4>
            <h4>
              <i className="fa-solid fa-envelope"></i> yash92singhal@gmail.com
            </h4>
            <h4>
              <i className="fa-solid fa-location-dot"></i> Uttrakhand,Dehradun
            </h4>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,

            transition: { duration: 0.3 },
          }}
          className="form-app"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/,
                  message: "Enter a valid Name",
                },
              })}
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}

            {/* Phone Number */}
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^(\+91|0)?[6-9]\d{9}$/,
                  message: "Enter a valid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="error-text">{errors.phone.message}</p>
            )}

            {/* Email */}
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}

            {/* Message */}
            <label>Message</label>
            <textarea
              rows={4}
              cols={3}
              placeholder="Your message"
              {...register("message", {
                required: "Message is required",
                minLength: { value: 5, message: "Minimum 5 characters" },
              })}
            />
            {errors.message && (
              <p className="error-text">{errors.message.message}</p>
            )}

            {/* Submit Button */}
            <Sendbtn disabled={isSubmitting} />
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
