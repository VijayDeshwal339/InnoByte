import React, { useState } from 'react'
import Free from '../assests/img/Free.png';
import RightClick1 from '../assests/img/Group 1223.png';
import Global from "../assests/img/Huge Global.png";
import Netflix from "../assests/img/Mask Group.svg";
import Reddit from "../assests/img/Mask Group.png";
import Amazon from "../assests/img/Mask Group (1).png";
import Discord from "../assests/img/Mask Group (2).png";
import Spotify from "../assests/img/Mask Group (3).png";

const Click ={
  height:'24px',
  width:'24px'
}
const Text ={
  fontWeight: '400',
   fontSize: '14px',
    lineHeight: '30px',
    fontFamily:'Rubik',
    color:'#4F5665'
}
const Plan = {
  fontWeight: '500', 
  fontSize: '18px',
   lineHeight: '30px',
   fontFamily:'Rubik'
}
const Rate ={
  fontWeight: '500', 
  fontSize: '25px',
   lineHeight: '30px',
   fontFamily:'Rubik'
}
const button ={
  width: '177.88px',
  borderRadius: '50px',
  height: '45px', 
  border: '2px solid #F53838',
 color: '#F53838'
}
const image = {
  height: '165.37px',
  width: '144.9px',
  marginTop: '70px'
}

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState('premium');

    const handleSelect = (plan) => {
      setSelectedPlan(plan);
    };
  return (
    <>
    <div  className='mb-5' style={{background:'linear-gradient(rgb(248, 248, 248) -45.04%, rgba(248, 248, 248, 0) 88.56%)'}}>
      <div className='text-center p-5'>
        <p style={{ color: '#0B132A', fontWeight: '500', fontSize: '35px', lineHeight: '50px',fontFamily:'Rubik'}}>Choose Your Plan</p>
        <p style={{ color: '#4F5665', fontWeight: '400', fontSize: '16px', lineHeight: '30px',fontFamily:'Rubik'}}>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>

      <div className="container-sm ">
        <div className="row justify-content-center gap-sm-4 gap-2 ">
          {/* First box */}
          <div className=' col-sm-10 col-md-6 col-lg-3' >
            <div className={`card text-center ${selectedPlan === 'free' ? 'border-danger border border-2' : ''}`} style={{ width: '100%', height: '760px' }}>
              <img src={Free} alt="..." style={{...image}} className='mx-auto' />
              <h5 className="my-4 " style={{...Plan}}>Free Plan</h5>
              <div className='h-100'>
                <div className="d-flex justify-content-center ">
                  <div className="text-start">
                    <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Unlimited Bandwidth</p></div>
                    <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}} /><p className="card-text" style={{...Text}}>Encrypted Connection</p></div>
                    <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}} /><p className="card-text" style={{...Text}}>No Traffic Logs</p></div>
                    <div className='d-flex gap-2 align-items-center'><img src={RightClick1} alt='right' style={{...Click}} /><p className="card-text" style={{...Text}}>Works on All Devices</p></div>
                  </div>
                </div>
              </div>

              <div className='mx-auto mb-5'>
                <p className=" my-4" style={{...Rate}}>Free</p>
                <button type="button" onClick={() => handleSelect('free')} className={`${selectedPlan === 'free' ? 'bg-danger text-white' : 'bg-white'}`} style={{...button  }}>
                  <h7 className='fs-5 fw-bold'>Select</h7>
                </button>
              </div>
            </div>
          </div>

          {/* Second box */}
          <div className='col-sm-10 col-md-6 col-lg-3' >
          <div className={`card text-center ${selectedPlan === 'standard' ? 'border-danger border border-2' : ''}`} style={{ width: '100%', height: '760px' }}>
         <img src={Free}  alt="..."  style={{...image}} className='mx-auto'/>
         <h5 className="my-4" style={{...Plan}}>Standard Plan</h5>
         <div className='h-100'>
         <div className="d-flex justify-content-center">
         <div className="text-start">
         <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Unlimited Bandwidth</p></div>
         <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Encrypted Connection</p></div>
         <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Yes Traffic Logs</p></div>
         <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Works on All Devices</p></div>
         <div className='d-flex gap-2 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Connect Anyware</p></div>
         </div>
     </div>
    
     </div>

         <div className='mx-auto mb-5'>
         <p className="my-4" style={{...Rate}}>$9 <span style={{fontWeight: '400',color:'#4F5665'}}>/ mo</span></p>
         <button type="button" onClick={() => handleSelect('standard')} className={`${selectedPlan === 'standard' ? 'bg-danger text-white' : 'bg-white'}`} style={{...button }}>
                  <h7 className='fs-5 fw-bold'>Select</h7>
                </button>
         </div>
       </div>
          </div>

          {/* Third box */}
          <div className='col-sm-10 col-md-6 col-lg-3' >
          <div className={`card text-center ${selectedPlan === 'premium' ? 'border-danger border border-2' : ''}`} style={{ width: '100%', height: '760px' }}>
         <img src={Free}  alt="..."  style={{...image}} className='mx-auto'/>
         <h5 className="my-4" style={{...Plan}}>Pemimum Plan</h5>
         <div className='h-100'>
         <div className="d-flex justify-content-center">
         <div className="text-start">
         <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Unlimited Bandwidth</p></div>
         <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Encrypted Connection</p></div>
         <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Yes Traffic Logs</p></div>
         <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Works on All Devices</p></div>
         <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Connect Anyware</p></div>
         <div className='d-flex gap-2 align-items-center'><img src={RightClick1} alt='right' style={{...Click}}/><p className="card-text" style={{...Text}}>Get New Features</p></div>
       </div>
     </div>
     </div>

     <div className='mx-auto mb-5'>
         <p className="my-4" style={{...Rate}}>$12 <span style={{fontWeight: '400',color:'#4F5665'}}>/ mo</span></p>
         <button type="button" onClick={() => handleSelect('premium')} className={` ${selectedPlan === 'premium' ? 'bg-danger text-white' : 'bg-white'}`} style={{...button }}>
                  <h7 className='fs-5 fw-bold'>Select</h7>
                </button>
         </div>
         </div>
          </div>
        </div>
      </div>
    </div>
       <div>
       <div className="text-center ">
         <p
           style={{
             fontFamily:'Rubik',
             color: "#0B132A",
             fontWeight: "500",
             fontSize: "35px",
             lineHeight: "50px",
             marginTop:'50px'
           }}
         >
           Huge Global Network of Fast VPN
         </p>
         <p
           style={{
            fontFamily:'Rubik',
             color: "#4F5665",
             fontWeight: "400",
             fontSize: "16px",
             lineHeight: "30px",
             marginBottom: "100px",
           }}
         >
           See{" "}
           <span
             style={{
               color: "#4F5665",
               fontWeight: "500",
               fontSize: "16px",
               lineHeight: "30px",
             }}
           >
             LaslesVPN
           </span>{" "}
           everywhere to make it easier for you when you move locations.
         </p>
       </div>
       <div class="container-md text-center">
         <img src={Global} alt="global" style={{ width: "100%" }} />
       </div>
     </div>

     <div className="container-fluid ">
       <div className="row justify-content-center align-items-center gap-md-4 gap-2">
         <div className="col-2 text-center">
           <img src={Netflix} alt="netflix" className="img-fluid" />
         </div>

         <div className="col-2 text-center">
           <img src={Reddit} alt="reddit" className="img-fluid" />
         </div>

         <div className="col-2 text-center">
           <img src={Amazon} alt="amazon" className="img-fluid" />
         </div>

         <div className=" col-2 text-center">
           <img src={Discord} alt="discord" className="img-fluid" />
         </div>

         <div className=" col-2 text-center">
           <img src={Spotify} alt="spotify" className="img-fluid" />
         </div>
       </div>
     </div>
     </>
  )
}

export default Pricing
