import React, { useEffect } from 'react'
import './skills.css';
import {FaLaptopCode, FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaCheckDouble } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {

  useEffect(() => {
    AOS.init(
      {duration: 1000}
    );
  }, []) //make sure to add overflow: hidden after adding aos to avoid white space margin on the right


  return (
    <div className='skills_container' id='skills'>
      <div className='skills_content'>
        <div className='skills'>
          <div className='skills_heading-title-content'>
            <h1>MY <span>SKILLS</span></h1>
          </div>

          <div className='skills_technical-soft-content'>
          <div className='skills_technical-content'>
           <div className='skills_technical' data-aos='fade-right'>
            <div className='skills_icon-content'><FaReact className='icon icon_react'/></div>
            <div>
              <h3>Technical Proficiency</h3>
              <p>Proficient in [HTML, CSS, JavaScript, React JS, React Native, PHP, MySQL].</p>
              <p>Experience with frameworks [React].</p>
              </div>
           </div>
           <div className='skills_web-development' data-aos='fade-right'>
            <div className='skills_icon-content'><FaLaptopCode className='icon icon_webDev'/></div>
            <div>
            <h3>Web Development</h3>
           <p>Designed and developed responsive and user-friendly websites using HTML, CSS, and JavaScript.</p>
            </div>
           </div>
           <div className='skills_database-management' data-aos='fade-right'>
            <div className='skills_icon-content'><SiFirebase className='icon icon_database'/></div>
            <div>
            <h3>Database Management</h3>
            <p>Proficient in working with databases, including MySQL and firebase.</p>
            <p>Designed and optimized database structures for efficient data retrieval.</p>
            </div>
           </div>
          </div>





          <div className='skills_soft-content'>
          <div className='skills_problemSolving-content' data-aos='fade-left'>
          <div className='skills_icon-content'><FaCheckDouble className='icon icon_problem-solving'/></div>
          <div>
          <h3>Problem Solving</h3>
          <p>Thrive on tackling complex challenges and finding creative solutions.</p>
          <p>Approach problems systematically and enjoy the process of continuous learning.</p>
          </div>
          </div>
       
          <div className='skills_adaptability-content' data-aos='fade-left'>
          <div className='skills_icon-content'><LuBrainCircuit className='icon icon_adaptability'/></div>
          <div>          
          <h3>Adaptability</h3>
          <p>Quickly adapt to new technologies and industry trends.</p>
          <p>Comfortable working in dynamic and fast-paced environments.</p>
          </div>
          </div>

          <div className='skills_teamCollaboration-content' data-aos='fade-left'>
          <div className='skills_icon-content'><RiTeamFill className='icon icon_team-collaboration'/></div>
          <div>
          <h3>Team Collaboration</h3>
          <p>Excel in collaborative environments, fostering a positive and productive team spirit.</p>
          <p>Open to giving and receiving constructive feedback for continuous improvement.</p>
          </div>
          </div>
          </div>

          </div>
        

        </div>
      </div>
    </div>
  )
}

export default Skills