import React from 'react'
import "./home.css"
import hero_bg from "../../Images/Home-Hero-first.jpg"
import triangle_img from "../../Images/triangle.png"
import Specializations from '../Specialization/Specializations'
import Services from '../Services/Services'
import TechnologyStack from '../TechnologyStack/TechnologyStack'
import Contactus from '../Contactus/Contactus'
import Footer from '../Footer/Footer'
import ClientReview from '../Clientreview/ClientReview'
import ExpressConsultant from '../ExpressConsultant/ExpressConsultant'
import Blog from '../Blog/Blog'

const Home = () => {
  return (
    <>
    <div className='paddingLeftRight'>
        <div className='home_container' id='#home'>
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <h3 className='cmn_heading digital_world_heading'>We help global brands <br></br>develop digital world</h3>
            <p className='cmn_paragraph'>We help global brands succeed in the digital world with innovative, customized solutions. Our expert team ensures a seamless and impactful digital journey from start to finish. Partner with us to bring your digital vision to life.</p>
            <div className='d-flex gap-4 services_btn_outer'>
                <button className='express_btn'>Our sevices</button>
                <button className='cmn_btn'>Contact Us</button>
            </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='herobg_outer '>
                    <h4 className='experience_heading'>10+ years <br></br> Experience</h4>
                  <div className='hero_bg_wrapper'>
              <img src={triangle_img} className='triangle_img'/>
              
                <img src={hero_bg} className='hero_bg'/>

                  </div>
                </div>
            </div>
        </div>
        </div>
        <Specializations/>
        <Services/>
       
    </div>
     <TechnologyStack/>
     <ExpressConsultant/>
     <ClientReview/>
  
    <Blog/>
    
     <Contactus/>
     <Footer/>
    </>
  )
}

export default Home