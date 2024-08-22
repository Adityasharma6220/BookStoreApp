import React from 'react'
import Card from './Card'
import list from "../../public/list.json"
import { Link } from 'react-router-dom';
const Course = () => {
  
  return ( 
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Books are windows to different worlds, offering journeys through time, space, and imagination with every turn of the page. They provide not only knowledge and wisdom but also an escape, allowing readers to explore diverse perspectives and ideas from the comfort of their own space.!
          </p>
         
         <Link to="/"> <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">Back </button></Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course
