import React from 'react'
import heroImage from '../assets/Okuper.jpg'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import TikTok from '../assets/Tiktok.png'


const HeroBanner = () => {
  return (
    <div className='hero-container' style={{height: "450px", margin: '-898px 0 200px 0'}}>
      <img className='heroBanner1' style={{height: "450px" }} src={heroImage} alt="Hero Banner" />
      
      <div className='social-icons'>
          <img src={whatsapp} alt="Whatsapp" />
          <img src={instagram} alt="Instagram" />
          <img src={TikTok} alt="Tiktok" />
      </div>
    </div>
  )
}

export default HeroBanner;
