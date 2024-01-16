// Login.jsx
import React, {useState} from 'react';
import {useLogin} from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const {login, isLoading, error} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
  }
  return (
    <main>
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                onChange={(e) => setPassword(e.target.value)}
                value={password} />

                <button type="submit" className='btn' disabled={isLoading}>Log In</button>
                {error&&<div className="error">{error}</div>}
            </form>
        </div>
    </main>
  );
};

export default Login;
