import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">GET IN TOUCH</p>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p className="contact-intro">
            I'm currently looking for opportunities in software
            development, Python, and data analytics. Feel free to
            connect with me!
          </p>
        </motion.div>

        <div className="contact-content">

          {/* Contact Information */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Let's work together 🚀</h3>

            <p>
              Have a job opportunity, project idea, or simply want
              to connect? I'd love to hear from you.
            </p>

            <div className="contact-details">

              <a href="mailto:your-email@gmail.com">
                <div className="contact-icon">📧</div>

                <div>
                  <span>Email</span>
                  <strong>aditijagtap44@gmail.com</strong>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-icon">💼</div>

                <div>
                  <span>LinkedIn</span>
                  <strong>https://www.linkedin.com/in/aditi-jagtap-16ab972b2/</strong>
                </div>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-icon">💻</div>

                <div>
                  <span>GitHub     </span>
                  <strong>https://github.com/aditijagtap44</strong>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                placeholder="Enter subject"
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="contact-button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message →
            </motion.button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;