import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
  
    // Check if email or password is empty
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    console.log(email, password);
    let registerUser = {
      email: email,
      password: password,
    };
    console.log(registerUser);
  
    setEmail("");
    setPassword("");
  }
  
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={formSubmit}>
      
            <h3 className="font-semibold text-lg"><strong>Login!</strong></h3>
            <div className='mt-4 space-y-2'>
              <label htmlFor="email">Email :</label><br />
              <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-80 px-1 border rounded-md outline-none' />
            </div>
            <div className='mt-4 space-y-2'>
              <label htmlFor="password">Password :</label><br />
              <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-80 px-1 border rounded-md outline-none' />
            </div>
            <div className='flex justify-around mt-4'>
              <button type="submit" className='px-3 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-700 duration-200'>Login</button>
              <p>Not registered? 
                <Link to="/signup" className='underline text-pink-500 cursor-pointer'>Signup</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
