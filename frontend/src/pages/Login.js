// Login.jsx
import React from 'react';

const Login = () => {
  return (
    <main>
        <div className="login-page">
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit" className='btn'>Log In</button>
            </form>
        </div>
    </main>
  );
};

export default Login;
