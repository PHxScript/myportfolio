import React, { useState } from 'react'
import './about.css';
import { IoMdDownload } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import profile from '../../assets/about/profile.jpg';
import gallery1 from '../../assets/about/gallery1.jpg'
import gallery2 from '../../assets/about/gallery2.jpg'
import image3 from '../../assets/about/itsMe.jpg'



const About = () => {

  const [button] = useState([{id: 1, title : 'INTRODUCTION'}, {id: 2, title: 'GALLERY'}])
  const [activeButton, setActiveButton] = useState({id: 1})
 
  const setActive = (id) => {
    setActiveButton(id)
  }



  return (
    <div className='about_container' id='about'>
      <div className='about_content'>
        <div className='about'>
          <div className='about_title-heading-content'>
            <h1>ABOUT <span>ME</span></h1>
          </div>
          
          <div className='about_myself-content'>
            <img src={profile} alt='profile' className='about_profile-image'/>
            <div className='about_information-content'>
              <div className='about_active-button-content '>
              {button?.map((item, index)=> {
                return(
                  <div key={index}><button className={activeButton.id === item.id ? 'active' : '' } onClick={()=>setActive({id: item.id})}><h3>{item.title}</h3></button></div>
                )
              })}
              </div>
              {activeButton.id === 1 ? <div>
                <p>With a passion for crafting clean and efficient code. Currently building foundational skills in programming, web development, and software design.</p>
              <div className='about_school-content'>
                <h5>BSIT - STI COLLEGE OF DAVAO</h5>
              </div>
              <div className='about_workExperience-content'>
                <div>
                <h5>EXPERIENCE</h5>
                <button>Download CV <IoMdDownload className='about_workExperience-icon'/> </button>
                </div>
                <div>
                  <div className='about_workExperience-information-content'>
                  <h5>Freelance Jr. Software Tester</h5>
                  <p>3 Months</p>
                  <p>Inriver</p>
                  </div>
                  <div className='about_workExperience-information-content'>
                  <h5>Junior Programmer</h5>
                  <p>1 Year </p>
                  <p>Retriever Tech Corp</p>
                  </div>
                </div>
              </div>
              </div> 
              :
              <div className='about_services-content'>
                 <Swiper className='about_services-swiper-content'
                  spaceBetween={5}
                  slidesPerView={1.1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  >
                  <SwiperSlide className='about_services-swiper-slide'>
                      <img src={gallery2} alt='image2'/>
                  </SwiperSlide>
                  <SwiperSlide className='about_services-swiper-slide'>
                      <img src={gallery1} alt='image1'/>
                  </SwiperSlide>
                  <SwiperSlide className='about_services-swiper-slide'>
                      <img src={image3} alt='image3'/>
                  </SwiperSlide>
                </Swiper>
              </div>}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About