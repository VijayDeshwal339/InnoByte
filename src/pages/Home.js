import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import student from '../assests/img/Illustration 1.svg';
import Men from '../assests/img/Illustration 2.png'
import RightClick from '../assests/img/Group 1120.png'
import User from '../assests/img/user.png';
import location from '../assests/img/location.png';
import Server from  '../assests/img/Server.png';
import Free from '../assests/img/Free.png';
import RightClick1 from '../assests/img/Group 1223.png';
import Global from '../assests/img/Huge Global.png'
import Netflix from '../assests/img/Mask Group.svg';
import Reddit from '../assests/img/Mask Group.png';
import Amazon from '../assests/img/Mask Group (1).png';
import Discord from '../assests/img/Mask Group (2).png';
import Spotify from '../assests/img/Mask Group (3).png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Star from '../assests/img/ant-design_star-filled.png';
import Avtar from '../assests/img/Ellipse 175.png';
import Avtar1 from '../assests/img/Ellipse 175 (1).png';
import Avtar2 from '../assests/img/Ellipse 175 (2).png';
import Union from '../assests/img/Union.png';
import Dot from '../assests/img/Ellipse 172.png';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

const Home = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleSelect = (plan) => {
      setSelectedPlan(plan);
    };
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
    <Header/>
    {/*-------------------------------------------------- First Box --------------------------------------------------------------- */}
    <div className='container-sm'>
    <div className='row'>
      <div className='col-sm-12 col-md-6 mt-5 gap-3'>
        <p className='fw-medium fs-1 text-start '>
          Want anything to be easy with <h1 className='fw-bold'>LaslesVPN.</h1>
        </p>
        <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
        
        <button type="button" class="btn btn-danger  mt-4 fw-medium fs-6 mb-5" style={{width:'45%',height:'60px',padding: '10px',boxShadow:' 0px 30px 30px #F5383859'}}>Get started</button>
      </div>
      <div className='col-sm-12 col-md-6'>
        <img src={student} alt='img' style={{width:'100%'}} />
      </div>
    </div>
    </div>
    {/*-------------------------------------------------- Second Box -------------------------------------------------------------- */}
    <div className='container-sm mt-5'>
    <div className='d-md-flex gap-5'>
    <div className='col-sm-12 col-md-6 col-lg-5  '>
        <img src={Men} alt='img' style={{width:'100%',height:'90%'}} />
      </div>
      <div className='col-sm-12 col-md-6 col-lg-6 mt-5 gap-3'>
        <p className='fw-medium fs-1 text-start '>
        We Provide Many Features You Can Use
        </p>
        <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
        
        <div className="text-start">
                <div className='d-flex gap-2 mb-3'><img src={RightClick} alt='right' /><p className="card-text">Unlimited Bandwidth</p></div>
                <div className='d-flex gap-2 mb-3'><img src={RightClick} alt='right' /><p className="card-text">Encrypted Connection</p></div>
                <div className='d-flex gap-2 mb-3'><img src={RightClick} alt='right' /><p className="card-text">No Traffic Logs</p></div>
                <div className='d-flex gap-2 '><img src={RightClick} alt='right' /><p className="card-text">Works on All Devices</p></div>
              </div>
      </div>
      
    </div>
    </div>
    {/*-------------------------------------------------- Third Box --------------------------------------------------------------- */}
    <div className="container-sm my-4 border-bottom shadow p-3 mb-3 bg-white text-dark rounded">
      <div className="d-sm-flex  justify-content-sm-evenly my-4 ">

        <div className="d-flex align-items-center gap-4">
          <img src={User} alt='user' style={{ height: '55px', width: '55px' }} />
          <div className="d-block text-center">
            <p className="fw-bold fs-5">90+</p>
            <p className="fw-normal fs-lg ">users</p>
          </div>
        </div>
        <div className="d-none d-sm-block vr"></div>
        <div className=" d-md-none col-md-8">
          <hr className="my-4" />
        </div>


        <div className="d-flex align-items-center gap-4">
          <img src={location} alt='location' style={{ height: '55px', width: '55px' }} />
          <div className="d-block text-center">
            <p className="fw-bold fs-5">30+</p>
            <p className="fw-normal fs-lg ">Locations</p>
          </div>
        </div>
        <div className="d-none d-sm-block vr"></div>
        <div className=" d-md-none col-md-8">
          <hr className="my-4" />
        </div>

        <div className="d-flex align-items-center gap-4 ">
          <img src={Server} alt='server' style={{ height: '55px', width: '55px' }} />
          <div className="d-block text-center" >
            <p className="fw-bold fs-5">50+</p>
            <p className="fw-normal fs-lg " >Servers</p>
          </div>
        </div>
      </div>
    </div>
    {/*-------------------------------------------------- Fourth Box -------------------------------------------------------------- */}
    <div>
      <div className='my-5 text-center '>
        <p style={{ color: '#0B132A', fontWeight: '500', fontSize: '35px', lineHeight: '50px' }}>Choose Your Plan</p>
        <p style={{ color: '#4F5665', fontWeight: '400', fontSize: '16px', lineHeight: '30px' }}>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>

      <div className="container-fluid mt-5">
        <div className="row justify-content-center gap-md-4 gap-2">
          {/* First box */}
          <div className='col-md-6 col-lg-3' >
            <div className={`card text-center ${selectedPlan === 'free' ? 'border-danger border border-2' : ''}`} style={{ width: '100%', height: '760px' }}>
              <img src={Free} alt="..." style={{ height: '165.37px', width: '144.9px', marginTop: '60px' }} className='mx-auto' />
              <h5 className="my-4 ">Free Plan</h5>
              <div className='h-100'>
                <div className="d-flex justify-content-center my-3 ">
                  <div className="text-start">
                    <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Unlimited Bandwidth</p></div>
                    <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Encrypted Connection</p></div>
                    <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">No Traffic Logs</p></div>
                    <div className='d-flex gap-2 '><img src={RightClick1} alt='right' /><p className="card-text">Works on All Devices</p></div>
                  </div>
                </div>
              </div>

              <div className='mx-auto mb-5'>
                <p className=" my-4 fw-bold fs-4">Free</p>
                <button type="button" onClick={() => handleSelect('free')} className={`${selectedPlan === 'free' ? 'bg-danger text-white' : 'bg-white'}`} style={{ width: '177.88px', borderRadius: '50px', height: '45px', border: '2px solid #F53838', color: '#F53838' }}>
                  <h7 className='fs-5 fw-bold'>Select</h7>
                </button>
              </div>
            </div>
          </div>

          {/* Second box */}
          <div className='col-md-6 col-lg-3' >
          <div className={`card text-center ${selectedPlan === 'standard' ? 'border-danger border border-2' : ''}`} style={{ width: '100%', height: '760px' }}>
         <img src={Free}  alt="..."  style={{height:'165.37px' ,width:'144.9px',marginTop:'60px'}} className='mx-auto'/>
         <h5 className="my-4 ">Standard Plan</h5>
         <div className='h-100'>
         <div className="d-flex justify-content-center my-3 ">
         <div className="text-start">
         <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Unlimited Bandwidth</p></div>
         <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Encrypted Connection</p></div>
         <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Yes Traffic Logs</p></div>
         <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Works on All Devices</p></div>
         <div className='d-flex gap-2 '><img src={RightClick1} alt='right' /><p className="card-text">Connect Anyware</p></div>
         </div>
     </div>
    
     </div>

         <div className='mx-auto mb-5'>
         <p className=" my-4 fw-bold fs-4">$9 / mo</p>
         <button type="button" onClick={() => handleSelect('standard')} className={`${selectedPlan === 'standard' ? 'bg-danger text-white' : 'bg-white'}`} style={{ width: '177.88px', borderRadius: '50px', height: '45px', border: '2px solid #F53838', color: '#F53838' }}>
                  <h7 className='fs-5 fw-bold'>Select</h7>
                </button>
         </div>
       </div>
          </div>

          {/* Third box */}
          <div className='col-md-6 col-lg-3' >
          <div className={`card text-center ${selectedPlan === 'premium' ? 'border-danger border border-2' : ''}`} style={{ width: '100%', height: '760px' }}>
         <img src={Free}  alt="..."  style={{height:'165.37px' ,width:'144.9px',marginTop:'60px'}} className='mx-auto'/>
         <h5 className="my-4 ">Pemimum Plan</h5>
         <div className='h-100'>
         <div className="d-flex justify-content-center my-3 ">
         <div className="text-start">
         <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Unlimited Bandwidth</p></div>
         <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Encrypted Connection</p></div>
         <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Yes Traffic Logs</p></div>
         <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Works on All Devices</p></div>
         <div className='d-flex gap-2 mb-3'><img src={RightClick1} alt='right' /><p className="card-text">Connect Anyware</p></div>
         <div className='d-flex gap-2'><img src={RightClick1} alt='right' /><p className="card-text">Get New Features</p></div>
       </div>
     </div>
     </div>

     <div className='mx-auto mb-5'>
         <p className=" my-4 fw-bold fs-4">$12 / mo</p>
         <button type="button" onClick={() => handleSelect('premium')} className={` ${selectedPlan === 'premium' ? 'bg-danger text-white' : 'bg-white'}`} style={{ width: '177.88px', borderRadius: '50px', height: '45px', border: '2px solid #F53838', color: '#F53838' }}>
                  <h7 className='fs-5 fw-bold'>Select</h7>
                </button>
         </div>
         </div>
          </div>
        </div>
      </div>
    </div>
    {/*-------------------------------------------------- FiFth Box --------------------------------------------------------------- */}
    <div >
    <div className='my-3 text-center '>
    <p style={{color:'#0B132A',fontWeight:'500',fontSize:'35px',lineHeight:'50px'}}>Huge Global Network of Fast VPN</p>
    <p style={{color:'#4F5665',fontWeight:'400',fontSize:'16px',lineHeight:'30px', marginBottom:'100px'}}>See <span style={{color:'#4F5665',fontWeight:'500',fontSize:'16px',lineHeight:'30px'}} >LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>

    </div>
    <div class="container-md text-center">
     <img src={Global} alt='global' style={{width:'100%'}} />

    </div>
    </div>
    {/*-------------------------------------------------- Sixth Box --------------------------------------------------------------- */}
    <div className='container-fluid mt-5'>
      <div className='row justify-content-center align-items-center gap-md-4 gap-2'>
        <div className="col-xs-6 col-sm-4 col-lg-2 text-center">
          <img src={Netflix} alt='netflix' className="img-fluid" />
        </div>

        <div className="col-xs-6 col-sm-4 col-lg-2 text-center">
          <img src={Reddit} alt='reddit' className="img-fluid" />
        </div>

        <div className="col-xs-6 col-sm-4 col-lg-2 text-center">
          <img src={Amazon} alt='amazon' className="img-fluid" />
        </div>

        <div className=" col-xs-6 col-sm-4 col-lg-2 text-center">
          <img src={Discord} alt='discord' className="img-fluid" />
        </div>

        <div className=" col-xs-6col-sm-4 col-lg-2 text-center">
          <img src={Spotify} alt='spotify' className="img-fluid" />
        </div>
      </div>
    </div>
    {/*-------------------------------------------------- Seventh Box ------------------------------------------------------------- */}
    <div className='container-sm text-center mt-5 mb-2'>
      <p className='fw-bold 1h-1 fs-3 '>Trusted by Thousands of Happy Customer</p>
      <p className='fw-normal fs-6'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
    </div >
    {/*-------------------------------------------------- Eight Box --------------------------------------------------------------- */}
    <div className={`container-sm my-5 ${isMobile ? 'mobile-view' : ''}`}>
      {isMobile ? (
        <Carousel
           Dots={false}
          showThumbs={false}
          showStatus={false}
          selectedItem={activeIndex}
          onChange={(index) => setActiveIndex(index)}
          swipeable
          emulateTouch
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border p-3 rounded">
              <div className='d-flex justify-content-center align-items-center gap-4'>
                <img src={testimonial.avatar} alt=''  style={{height:'50px',width:'50px'}}/>
                <div className='mt-1'>
                  <p>{testimonial.name}</p>
                  <p>{testimonial.location}</p>
                </div>
                <p className='ms-auto d-flex align-items-center gap-2'>{testimonial.rating} <img src={testimonial.icon} alt='' /></p>
              </div>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className='d-flex gap-md-3   gap-xl-4'>
           {testimonials.map((testimonial, index) => (
             <div
               key={index}
               className={`border p-3 col-md-4 rounded ${index === activeIndex ? 'border-danger border border-2' : ''}`}
             >
               <div className='d-flex align-items-center '>
                 <img src={testimonial.avatar} alt='' />
                 <div className='col justify-content-center'>
                   <p>{testimonial.name}</p>
                   <p>{testimonial.location}</p>
                 </div>
                 <p className='d-flex align-items-center gap-2'>{testimonial.rating} <img src={testimonial.icon} alt='' /></p>
               </div>
               <p>{testimonial.feedback}</p>
             </div>
           ))}
         </div>
       )}
    

      <div className='d-sm-flex mt-4'>
        <div className='col'>
          <div className='d-flex gap-3'>
           {activeIndex ===0 ? <img src={Union} alt='active'/> : <img src={Dot} alt='not-active'/>  }
           {activeIndex ===1 ? <img src={Union} alt='active'/> : <img src={Dot} alt='not-active'/>  }
           {activeIndex ===2 ? <img src={Union} alt='active'/> : <img src={Dot} alt='not-active'/>  }
        

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
    {/*-------------------------------------------------- First Box --------------------------------------------------------------- */}
    {/*-------------------------------------------------- First Box --------------------------------------------------------------- */}
    <Footer/>
    </>  
    
  )
}

export default Home
