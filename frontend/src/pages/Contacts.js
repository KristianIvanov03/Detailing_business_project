import React from 'react';

const Contacts = () => {
  return (
    <div className="contacts-page">
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us using the form below:</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
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
