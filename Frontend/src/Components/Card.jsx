import React from 'react';

const Card = ({item}) => {
    console.log(item);
    
    return (
        <div className="mt-4 my-3 p-2">
            <div className="card glass w-70 shadow-xl hover:scale-105 duration-200 ">  
                <figure >
                    <img 
                        src={item.image}
                        alt=""
                    />
                </figure>
                <div className="card-body">
                    <h2 className={"card-title"}>{item.name}</h2>
                    <div className="badge badge-secondary">{item.category}</div>    
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        
     <div className="badge badge-outline">${item.price}</div>
   <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
