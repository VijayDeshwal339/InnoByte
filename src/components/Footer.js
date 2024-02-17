import React, { useEffect, useState } from 'react';
import standard from '../assests/img/Standard Collection 27.png';
import Twitter from '../assests/img/Twitter.png';
import Instagram from '../assests/img/Instagram.png';
import Facebook from '../assests/img/Facebook.png';
import classes from'./Footer.module.css'

const SubHeading ={
  color:'#4F5665',
  fontFamily:'Rubik',
  cursor:'pointer',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight:' 30px',
}

const Heading ={
fontFamily: 'Rubik',
fontSize: '18px',
fontWeight: '500',
lineHeight: '30px',
}


const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <>
    <div  className="container border border-white py-5 bg-white text-dark" style={{marginBottom:'-100px',position:'relative'}} >
    <div className="d-md-flex justify-content-around align-items-centers text-wrap">
      <div >
        <p className={classes['Subscribe']}>
          Subscribe Now for Get Special Features!
        </p>
        <p className={classes['Subscribe1']}>
          Let's subscribe with us and find the fun.
        </p>
      </div>
      <div>
      <button type="button"  style={{backgroundColor: '#F53838',borderRadius:' 10px',border:'#F53838' ,marginTop: '10px',marginBottom: '50px',width:'250px',height:'60px',padding: '10px',boxShadow: '0px 30px 30px #F5383859'}}>
       <span style={{ fontFamily: 'Rubik',fontSize:'16px',fontWeight: '700',lineHeight:'25px',color:' #FFFFFF'}}>
       Subscribe Now
        </span> 
        </button>
      </div>
    </div>
  </div>
    
    <div style={{backgroundColor:'#F8F8F8',height:'100%'}}>
     
      
    <div className='container' >
      <div className='row justify-content-center'>

        <div className='col-sm-5 col-md-3 mb-2' style={{marginTop:'140px'}}>
          <div className='d-flex align-items-center gap-2'>
            <img src={standard} alt='logo' className='h-10' />
            <p className='fs-5 fw-semibold mb-0 ml-2' style={{ fontFamily:'Rubik',}}> Lasles<span className='fw-bold'>VPN</span></p>
          </div>
         
          <p className='mt-2' style={{color:'#4F5665', fontFamily:'Rubik',}}>LaslesVPN is a private virtual network that has unique features and has high security.</p>
          <div className='d-flex'>
            <img src={Facebook} alt='facebook' style={{cursor:'pointer'}}/>
            <img src={Twitter} alt='twitter' style={{cursor:'pointer'}}/>
            <img src={Instagram} alt='instagram' style={{cursor:'pointer'}}/>
          </div>
          <p className='text-start ' style={{color:'#AFB5C0', fontFamily:'Rubik',}}>©2020 LaslesVPN</p>
        </div>

        <div className='col-sm-5 col-md-2 mb-4' style={{ marginLeft: 'auto', marginTop: windowWidth > 576 ? '140px' : '0px' }}>
 

          <p className='mb-2  6' style={{ ...Heading}}>Product</p>
          <p className='mb-2' style={{...SubHeading}}>Download</p>
          <p className='mb-2' style={{...SubHeading}}>Pricing</p>
          <p className='mb-2' style={{...SubHeading}}>Locations</p>
          <p className='mb-2' style={{...SubHeading}}>Server</p>
          <p className='mb-2' style={{...SubHeading}}>Countries</p>
          <p className='mb-2' style={{...SubHeading}}>Blog</p>
        </div>

        <div className=' col-sm-6 col-md-2 mb-4' style={{marginTop: windowWidth > 767 ? '140px' : '0px'}}>
          <p className='mb-2' style={{ ...Heading}}>Engage</p>
          <p className='mb-2' style={{...SubHeading}}>LaslesVPN?</p>
          <p className='mb-2' style={{...SubHeading}}>FAQ</p>
          <p className='mb-2' style={{...SubHeading}}>Tutorials</p>
          <p className='mb-2' style={{...SubHeading}}>About Us</p>
          <p className='mb-2' style={{...SubHeading}}>Privacy Policy</p>
          <p className='mb-2' style={{...SubHeading}}>Terms of Service</p>
        </div>

        <div className=' col-sm-6 col-md-2 mb-xs-4 mb-md-2 ' style={{marginTop: windowWidth > 767 ? '140px' : '0px'}}>
          <p className='mb-2' style={{ ...Heading}}>Earn Money</p>
          <p className='mb-2' style={{...SubHeading}}>Affiliate</p>
          <p className='mb-2 ' style={{...SubHeading}} >Become Partner</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Footer;

