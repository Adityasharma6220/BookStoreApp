import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import toast from "react-hot-toast";

const Signup = () => {
let [state,setState]=useState({
 name:"",email:"",password:"",id:Date.now(),list:[]
})
let { name,email,password, id, list } = state
  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    if(!name||!email||!password){
        alert("Plz addd Data inside it")
        return
    }else{
        toast.success("Data sent Succesfully")
    }
    let newObj = { name,email,password, id }
    setState({
        name: "",
        email :"",
      password: "",
      id:Date.now(),
      list: [...list, newObj]
    })
    console.log(newObj);
    // console.log("Data sent Succesfully");
  }
  
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
<div className="w-[600px]">
  <div className="modal-box hover:shadow-2xl bg-white">
    <form method="dialog"onSubmit={handleSubmit}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-semibold text-lg"><strong className='text-black'>Signup !</strong></h3>

    <div className='mt-4 space-y-2'>
      <label htmlFor="name" className='text-black font-bold'>Name :</label>
      <br />
      <input type="text" placeholder='Enter FullName'  className='w-80 px-1 border text-black font-semibold  bg-white rounded-md outline-none'onChange={handleChange} name='name' value={name}/>
    </div>

    <div className='mt-4 space-y-2'>
    <label htmlFor="email" className='text-black font-bold'>Email :</label>
      <br />
      <input type="email" placeholder='Enter Username'  className='w-80 px-1 border text-black font-semibold  bg-white rounded-md outline-none' onChange={handleChange} name='email' value={email}/>
    </div>
    <div className='mt-4 space-y-2'>
    <label htmlFor="password" className='text-black font-bold'>Password :</label>
      <br />
      <input type="password" placeholder='Enter Password'  className='w-80 px-1 border text-black font-semibold  bg-white rounded-md outline-none' onChange={handleChange} name='password' value={password}/>
    </div>
    <div className='flex justify-around mt-4'>
    <button className='px-3 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-700 duration-200'>Signup</button>
    <p className='text-xl font-semibold'>Not registered? <button  className='underline text-pink-500 cursor-pointer' 
    onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>
    <Login/></p>
    </div>
    
 
    </form>
    
    
  </div>
</div>
    </div>
    </>
  )
}

export default Signup


