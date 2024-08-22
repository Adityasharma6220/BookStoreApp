import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider  from 'react-slick';
import list from "../../public/list.json"
import Card from './Card';
// import Card from './Card';
const Freebook = () => {
  //In this I have to filter out the data which is presenet in the list.json file which is free category this is paernt component
    const filterData =list.filter((data)=>data.category==="free")
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (

       <>

      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:text-white'>
         
         <div><h1 className='font-bold text-xl pb-2'>Free book Store</h1>
         <p className='pb-2'>"Saga" is an epic space opera/fantasy comic book series written by Brian K. Vaughan and illustrated by Fiona Staples. The series is published by Image Comics and has received critical acclaim for its storytelling, character development, and artwork.</p></div>
       
          <div>
          <Slider {...settings}>
 {
    filterData.map((item,i)=>{
        return (
            <div key={i}>
       
             <Card item={item}/>
            </div>
        )
    })
 }
          </Slider>
          </div>
          </div>
      </>

  )
}

export default Freebook



{/* <Slider {...settings}>
           {filterData.map((item)=>(
            <Card item={item} key={item.id}/>
           )) }
      </Slider> */}