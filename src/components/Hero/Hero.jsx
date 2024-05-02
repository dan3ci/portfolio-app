import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pp.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Aakash Shrestha</span>, frontend Developer based in Nepal</h1>
        <p>I'm a React frontend Developer who has been working for around 3 years now.</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
