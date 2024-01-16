import React, {useState} from 'react';
import {useAuthContext} from '../hooks/useAuthContext'
import {useContact} from '../hooks/useContact'

const Contacts = () => {
  const {user} = useAuthContext()
  const {sendContact} = useContact();
  const [name, setName] = useState(user ? `${user.firstName} ${user.lastName}` : "");
  const [email, setEmail] = useState(user ? `${user.email}` : "");
  const [message, setMessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    await sendContact(name, email, message);
  }
  return (
    <div className="contacts-page">
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us using the form below:</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            onChange={(e) => setName(e.target.value)}
            value={name}
            required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
            id="message" 
            name="message" 
            rows="5" 
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <h2>Contact Information</h2>
        <p>Feel free to contact us through the following channels:</p>

        <div className="contact-info">
          <div>
            <h3>Email:</h3>
            <p>info@reviveandshinedetailing.com</p>
          </div>

          <div>
            <h3>Phone:</h3>
            <p>+1 (123) 456-7890</p>
          </div>

          <div>
            <h3>Address:</h3>
            <p>123 Main Street, Cityville, State, Zip Code</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
