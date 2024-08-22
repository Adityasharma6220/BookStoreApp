import React, { useState } from 'react'
import Navbar from './Navbar';
const Contact = () => {
  let [state,setState]=useState({
    name:"",email:"",message:"",id:Date.now(),list:[]
  })
  let{name,email,message,id,list}=state

   let handleChange =(e)=>{
let {name,value}=e.target;
setState({...state,[name]:value})
   }

   let formSubmit=(e)=>{
    e.preventDefault();
    if(!name||!email||!message){
      alert("Plz add data inside it")
    }else{
      console.log("Data Add succesfully");
      
    }

    let newObj = {name,email,message,id}
    setState({
        name:"",
        email:"",
      message: "",
      id:Date.now(),
      list: [...list, newObj]
    })
    console.log(newObj);
   }
  return (
    <>
    <div>
      <Navbar/>
      <div className='flex h-screen items-center justify-center'>
<div className="w-[600px]">
  <div className="modal-box hover:shadow-2xl bg-white">
    <form method=""onSubmit={formSubmit}>
      {/* if there is a button in form, it will close the modal */}
      {/* <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
  
    <h3 className="font-semibold text-lg"><strong className='text-black'>Contact !</strong></h3>

    <div className='mt-4 space-y-2'>
      <label htmlFor="name" className='text-black font-bold'>Name :</label>
      <br />
      <input type="text" placeholder='Enter FullName'  className='w-80 px-1 border text-black font-semibold bg-white rounded-md outline-none'onChange={handleChange} name='name' value={name}/>
    </div>

    <div className='mt-4 space-y-2'>
    <label htmlFor="email" className='text-black font-bold'>Email :</label>
      <br />
      <input type="email" placeholder='Enter Username'  className='w-80 px-1 border text-black font-semibold  bg-white rounded-md outline-none' onChange={handleChange} name='email' value={email}/>
    </div>
    <div className='mt-4 space-y-2'>
    <label htmlFor="message" className='text-black font-bold'>Message :</label>
      <br />
      <textarea type="message" placeholder='Enter message'  className='w-80 h-[100px] border text-black font-semibold bg-white rounded-md outline-none' onChange={handleChange} name='message' value={message}/>
    </div>
    <div className='flex justify-around mt-4'>
    <button className='px-3 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-700 duration-200'>Submit</button>
    </div>
    </form>
    
  </div>
</div>
    </div>
    
    </div>
  </>
  )
}

export default Contact

// * .bordered p{
//     height: 200px;
//     width: 300px;
//     border: 2px solid;
//     overflow: scroll;   
//     font-family: 'Times New Roman', Times, serif; */
    /* font-size: larger; */
/* }  */
/* 
p::-webkit-scrollbar{
    display: none;
 } */