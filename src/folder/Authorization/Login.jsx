import React from 'react';
import './Login.scss';

const Login = () => {
  const [error,setError] = React.useState(false);
  return (
    <div className='login__page'>
      <div className="login__wrapper">
        <h1>Login</h1>
        <input type="text" />
        <input type="password" />
        {error ? <p>Expected error: errorname</p> : ''}
        <button>Join</button>
      </div>
    </div>
  )
}

export default Login
