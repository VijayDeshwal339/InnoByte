import React from 'react';
import standard from '../assests/img/Standard Collection 27.png';
import Twitter from '../assests/img/Twitter.png';
import Instagram from '../assests/img/Instagram.png';
import Facebook from '../assests/img/Facebook.png';



const Footer = () => {
  return (
    <>
    <div  className="container border border-white py-5 bg-white text-dark" style={{marginBottom:'-100px',position:'relative'}} >
    <div className="d-md-flex justify-content-between align-items-centers text-wrap">
      <div>
        <p className="fs-3 fw-bold">
          Subscribe Now for Get Special Features!
        </p>
        <p className="fw-normal">
          Let's subscribe with us and find the fun.
        </p>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-danger  mt-4 fw-medium fs-6"
          style={{
            width: "250px",
            height: "60px",
            padding: "10px",
            boxShadow: " 0px 30px 30px #F5383859",
          }}
        >
          Get started
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
            <p className='fs-5 fw-semibold mb-0 ml-2'> Lasles<span className='fw-bold'>VPN</span></p>
          </div>
         
          <p className='mt-2' style={{color:'#4F5665'}}>LaslesVPN is a private virtual network that has unique features and has high security.</p>
          <div className='d-flex'>
            <img src={Facebook} alt=''/>
            <img src={Twitter} alt=''/>
            <img src={Instagram} alt=''/>
          </div>
          <p className='text-start ' style={{color:'#AFB5C0'}}>©2020 LaslesVPN</p>
        </div>

        <div className='col-sm-5 col-md-2 mb-4' style={{ marginLeft: 'auto', marginTop: window.innerWidth > 576 ? '140px' : '0px' }}>
 

          <p className='mb-2  fw-medium fw-bold fs-6'>Product</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Download</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Pricing</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Locations</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Server</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Countries</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Blog</p>
        </div>

        <div className=' col-sm-6 col-md-2 mb-4' style={{marginTop: window.innerWidth > 767 ? '140px' : '0px'}}>
          <p className='mb-2  fw-medium fw-bold fs-6'>Engage</p>
          <p className='mb-2' style={{color:'#4F5665'}}>LaslesVPN?</p>
          <p className='mb-2' style={{color:'#4F5665'}}>FAQ</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Tutorials</p>
          <p className='mb-2' style={{color:'#4F5665'}}>About Us</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Privacy Policy</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Terms of Service</p>
        </div>

        <div className=' col-sm-6 col-md-2 mb-4 ' style={{marginTop: window.innerWidth > 767 ? '140px' : '0px'}}>
          <p className='mb-2  fw-medium fw-bold fs-6'>Earn Money</p>
          <p className='mb-2' style={{color:'#4F5665'}}>Affiliate</p>
          <p className='mb-2 ' style={{color:'#4F5665'}} >Become Partner</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Footer;

