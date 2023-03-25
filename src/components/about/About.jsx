import React from 'react'
import "./about.css"
import Image from "../../images/Image.png"
const About = () => {
  return (
 <section className='about container section' id="about">
  <h2 className='section__title'>About Me</h2>
  <div className='about__container grid'>
    <img src={Image} alt='' className='about__img' />
    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
  Experienced full stack web developer proficient in front-end and back-end development with a passion for creating efficient and user-friendly web applications
      </p>
        <a href="https://drive.google.com/file/d/101yKOWnX4hMONLTRnOXfzwY4Fo3qGDlp/view?usp=share_link&" download  className='btn'>Dowload CV</a>
      </div>
      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Development</h3>
            <span className='skills__number '>90%</span>
          </div>
          <div className='skills__bar'>
        <span className='skills__percentage development'></span>
          </div>
        </div>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>UI/UX design</h3>
            <span className='skills__number '>70%</span>
          </div>
          <div className='skills__bar'>
        <span className='skills__percentage ui__design'></span>
          </div>
        </div>
      </div>
    </div>
  </div>
 </section>
  )
}

export default About