import React from 'react'
import student from '../assests/img/Illustration 1.svg';
import User from '../assests/img/user.png';
import location from '../assests/img/location.png';
import Server from  '../assests/img/Server.png';
import classes from './About.module.css';

const About = () => {
  return (
    <>
     <div className='container-sm' >
    <div className='row '>
    

      <div className='col-sm-12 col-lg-6 mt-md-5 gap-1'>
        <span className={classes['content']}>
          Want anything to be easy with <strong>LaslesVPN.</strong>
        </span>
        <p className='fw-normal fs-6 1h-1 mt-3' style={{color:'#4F5665'}}>Provide a network for all your needs with ease and fun using <span className='fw-medium'>LaslesVPN</span> discover interesting features from us.</p>
        
        <button type="button" className={classes['button1']}><span className={classes['button-text']}>Get started</span></button>
      </div>
      <div className='col-sm-12 col-lg-6 '>
        <img src={student} alt='img' style={{width:'100%',height:'90%'}} />
      </div>
    </div>
    </div>



    

<div className=" border-bottom shadow p-3 mb-3 bg-white text-dark rounded " style={{marginInline:'10%', marginBlock:'50px'}}>
      <div className="d-lg-flex justify-content-evenly my-4">

        <div className="d-flex align-items-center gap-4">
          <img src={User} alt='user' style={{ height: '55px', width: '55px' }} />
          <div className="row">
            <span className={classes['tittle']}>90+</span>
            <span className={classes['sub-tittle']}>users</span>
          </div>
        </div>
        <div className="d-none d-lg-block vr" style={{ height: '6rem' }}></div>
        <div className=" d-lg-none col-lg-8">
          <hr className="my-4" />
        </div>


        <div className="d-flex align-items-center gap-4">
          <img src={location} alt='location' style={{ height: '55px', width: '55px' }} />
          <div className="row">
            <span className={classes['tittle']}>30+</span>
            <span className={classes['sub-tittle']}>Locations</span>
          </div>
        </div>
        <div className="d-none d-lg-block vr" style={{ height: '6rem' }}></div>
        <div className=" d-lg-none col-lg-8">
          <hr className="my-4" />
        </div>

        <div className="d-flex align-items-center gap-4 ">
          <img src={Server} alt='server' style={{ height: '55px', width: '55px' }} />
          <div className="row" >
            <span className={classes['tittle']}>50+</span>
            <span className={classes['sub-tittle']} >Servers</span>
          </div>
        </div>
      </div>
      </div>

  



   
      
    </>
  )
}

export default About


