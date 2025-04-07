import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contact.module.css"; // Importing CSS Module

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const trimmedName = formData.name.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedMessage = formData.message.trim();
      
        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
          alert("Please fill in all fields correctly. Whitespaces are not allowed.");
          return;
        }
      
        const templateParams = {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        };
      
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then((response) => {
            if (response.status === 200) {
              alert("Message Sent Successfully!");
              setFormData({ name: "", email: "", message: "" });
            } else {
              throw new Error("EmailJS response was not 200");
            }
          })
          .catch((error) => {
            alert("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
          });
    };      

    return (
        <>
            <section id="contact" className={styles.contactSection}>
                <h2 className={styles.sectionTitle}>Contact Me</h2>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div>
                        <label className={styles.label}>Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            name="name" 
                            required 
                            onChange={handleChange} 
                            value={formData.name}
                            className={styles.input}
                        />
                    </div>

                    <div>
                        <label className={styles.label}>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            required 
                            onChange={handleChange} 
                            value={formData.email}
                            className={styles.input}
                        />
                    </div>

                    <div>
                        <label className={styles.label}>Message</label>
                        <textarea 
                            name="message" 
                            placeholder="Type your message" 
                            required 
                            onChange={handleChange} 
                            value={formData.message}
                            className={styles.textarea}
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.button}>Send</button>
                </form>
            </section>
        </>
    );
};

export default Contact;
