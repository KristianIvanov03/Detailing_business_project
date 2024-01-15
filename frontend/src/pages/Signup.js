// Signup.jsx
import React, {useState} from 'react';
import {useSignup} from "../hooks/useSignup";

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const {signup, error, isLoading} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(firstName, lastName, email, password, phone);
  }

  return (
    <main>
        <div className="signup-page">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input 
                type="text" 
                id="firstName" 
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName} 
                />

                <label htmlFor="lastName">Last Name:</label>
                <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}/>

                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>

                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                id="password" 
                name="password"
                onChange={(e)=> setPassword(e.target.value)} 
                value={password}/>

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber"
                onChange={(e) => setPhone(e.target.value)} 
                value={phone}/>

                <button type="submit" className='btn' disabled={isLoading}>Sign Up</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    </main>
  );
};

export default Signup;
