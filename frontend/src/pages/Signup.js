// Signup.jsx
import React from 'react';

const Signup = () => {
  return (
    <main>
        <div className="signup-page">
            <h2>Create an Account</h2>
            <form>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" />

                <button type="submit" className='btn'>Sign Up</button>
            </form>
        </div>
    </main>
  );
};

export default Signup;
