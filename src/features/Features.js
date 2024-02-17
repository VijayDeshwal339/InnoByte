import React from 'react'
import Men from '../assests/img/Illustration 2.png'
import RightClick from '../assests/img/Group 1120.png'

const RightIcon ={
  height:'24px',
  width:'24px'
}
const text ={
  fontFamily: 'Rubik',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight:' 30px',
  color:'#4F5665'
}

const Features = () => {
  return (
    <div className='container-sm mt-5 mb-5'>
    <div className='d-md-flex gap-5'>
    <div className='col-sm-12 col-md-6 col-lg-5'>
        <img src={Men} alt='img' style={{width:'100%',height:'90%'}} />
      </div>
      <div className='col-sm-12 col-md-6 col-lg-5 mt-5  gap-3'>
        <p style={{fontFamily: 'Rubik',fontSize: '35px',fontWeight: '500',lineHeight:' 50px'}}>
        We Provide Many Features You Can Use
        </p>
        <p style={{fontFamily: 'Rubik',fontSize: '16px',fontWeight: '400',lineHeight:' 30px'}}>You can explore the features that we provide with fun and have their own functions each feature.</p>
        
        <div className="text-start">
                <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick} alt='right' style={{...RightIcon}} /><p className="card-text"style={{...text}}>Unlimited Bandwidth</p></div>
                <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick} alt='right' style={{...RightIcon}} /><p className="card-text" style={{...text}}>Encrypted Connection</p></div>
                <div className='d-flex gap-2 mb-3 align-items-center'><img src={RightClick} alt='right' style={{...RightIcon}} /><p className="card-text" style={{...text}}>No Traffic Logs</p></div>
                <div className='d-flex gap-2 align-items-center'><img src={RightClick} alt='right' style={{...RightIcon}} /><p className="card-text" style={{...text}}>Works on All Devices</p></div>
              </div>
      </div>
      
    </div>
    </div>
  )
}

export default Features