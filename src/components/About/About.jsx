import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pro_pp from '../../assets/profile_imagepp.svg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pro_pp} alt=""/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm an experienced frontend developer with a passion for creating seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in crafting responsive and visually appealing web applications.</p>
            <p>My passion lies in React.js and frontend development, where I thrive on the ever-evolving nature of web technologies.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML &CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Java Script</p><hr style={{width:"85%"}}/></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width:"30%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>happy clients</p>
        </div>
      </div>

    </div>
  )
}

export default About
