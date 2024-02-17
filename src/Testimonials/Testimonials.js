import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Star from '../assests/img/ant-design_star-filled.png';
import Avtar from '../assests/img/Ellipse 175.png';
import Avtar1 from '../assests/img/Ellipse 175 (1).png';
import Avtar2 from '../assests/img/Ellipse 175 (2).png';
import Union from '../assests/img/Union.png';
import Dot from '../assests/img/Ellipse 172.png';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

const Tittle ={
  fontFamily: 'Rubik',
  fontSize: '35px',
  fontWeight: '500',
  lineHeight:' 50px'
}
const SubTittle ={
  fontFamily: 'Rubik',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight:' 30px',
  color:'#4F5665'
}
const name ={
  fontFamily: 'Rubik',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight:' 30px'
}
const location={
  fontFamily: 'Rubik',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight:' 30px',
  color:'#4F5665'
}
const Rating ={
  fontFamily: 'Rubik',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight:' 30px'
}

const RatingIcon ={
  height:'16px',
  width:'16px'
}
const feedback={
  fontFamily: 'Rubik',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight:' 30px'
}

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      handleResize(); // Initial check
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const testimonials = [
      {
        avatar: Avtar,
        name: 'Viezh Robert',
        location: 'Warsaw, Poland',
        rating: '4.5',
        icon: Star,
        feedback:
          '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.”',
      },
      {
        avatar: Avtar1,
        name: 'Yessica Christy',
        location: 'Shanxi, China',
        rating: '4.5',
        icon: Star,
        feedback: '“I like it because I like to travel far and still can connect with high speed.”',
      },
      {
        avatar: Avtar2,
        name: 'Kim Young Jou',
        location: 'Seoul, South Korea',
        rating: '4.5',
        icon: Star,
        feedback:
          '“This is very unusual for my business that currently requires a virtual private network that has high security.”',
      },
    ];
  return (
    <>
    <div className='container-sm text-center mt-5 mb-2'>
    <p style={{...Tittle}}>Trusted by Thousands of Happy Customer</p>
    <p style={{...SubTittle}}>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
    </div >


  <div className={`container-sm my-5 ${isMobile ? 'mobile-view' : ''}`}>
    {isMobile ? (
      <Carousel
         Dots={false}
        showThumbs={false}
        showStatus={false}
        selectedItem={activeIndex}
        showIndicators={false} 
        onChange={(index) => setActiveIndex(index)}
        swipeable
        emulateTouch
      >
        {testimonials.map((testimonial, index) => (
         <div key={index} className="border p-3 rounded">
         <div className='d-flex justify-content-between align-items-center gap-2 '>
              <div className='d-flex '>
               <img src={testimonial.avatar} alt='' style={{ height: '50px', width: '50px' }}/>
               <div className='row '>
                 <span style={{...name}}>{testimonial.name}</span>
                 <span style={{...location}}>{testimonial.location}</span>
               </div>
               </div>
               <p className='d-flex align-items-center gap-1' style={{...Rating}}>{testimonial.rating} <img src={testimonial.icon} alt='' style={{...RatingIcon}} /></p>
             </div>
             <p style={{...feedback}}>{testimonial.feedback}</p>
           </div>
       
        ))}
      </Carousel>
    ) : (
      <div className='d-flex gap-md-3 gap-xl-4'>
         {testimonials.map((testimonial, index) => (
           <div
             key={index}
             className={`border p-3 col-md-4 rounded ${index === activeIndex ? 'border-danger border border-2' : ''}`}
           >
             <div className='d-flex justify-content-between align-items-center gap-2 '>
              <div className='d-flex gap-3'>
               <img src={testimonial.avatar} alt='' style={{ height: '50px', width: '50px' }}/>
               <div className='row '>
                 <span style={{...name}}>{testimonial.name}</span>
                 <span style={{...location}}>{testimonial.location}</span>
               </div>
               </div>
               <p className='d-flex align-items-center gap-1' style={{...Rating}}>{testimonial.rating} <img src={testimonial.icon} alt='' style={{...RatingIcon}} /></p>
             </div>
             <p style={{...feedback}}>{testimonial.feedback}</p>
           </div>
         ))}
       </div>
     )}
  

    <div className='d-sm-flex mt-4'>
      <div className='col'>
        <div className='d-flex gap-3'>
         {activeIndex ===0 ? <img src={Union} alt='active'/> : <img src={Dot} alt='not-active' onClick={() => setActiveIndex(0)}/>  }
         {activeIndex ===1 ? <img src={Union} alt='active'/> : <img src={Dot} alt='not-active' onClick={() => setActiveIndex(1)}/>  }
         {activeIndex ===2 ? <img src={Union} alt='active'/> : <img src={Dot} alt='not-active' onClick={() => setActiveIndex(2)}/>  }
      

        </div>
        
      </div>
      <div className='row gap-2 mt-4 mt-sm-0'>
        <div
          className={`rounded-circle d-flex justify-content-center align-items-center ${
            activeIndex === 0 ? ' border-danger border border-2 bg-white text-danger' : 'bg-danger text-white border-white'
          }`}
          style={{ height: '60px', width: '60px' }}
          onClick={() => setActiveIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1))}
        >
          <ArrowLeft size={32} />
        </div>
        <div 
          className={`rounded-circle d-flex justify-content-center align-items-center ${
            activeIndex === testimonials.length - 1 ? ' border-danger border border-2 bg-white text-danger' : 'bg-danger text-white'
          }`}
          style={{ height: '60px', width: '60px' }}
          onClick={() => setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? prevIndex : prevIndex + 1))}
        >
          <ArrowRight size={32} />
        </div>
      </div>
    </div>
  </div>

  </>
  )
}

export default Testimonials