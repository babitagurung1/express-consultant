import React from 'react'
import "./service.css"
import testing_img from "../../Images/testing.png"
import ui_ux_img from "../../Images/uiux.png"
import custom_img from "../../Images/custom.png"

import game_img from "../../Images/Game.png"
import cloud_migration from "../../Images/cloud_migration.png"
import software_product_img from "../../Images/softwareproduct.png"

const Services = () => {
  return (
    <div className='services_container'>
        <div className='d-flex justify-content-between quote_outer'>
            <div>
            <h3 className='cmn_heading'>A Comprehensive Range of  <br></br> Services Tailored to Your Needs</h3>
            <p className='cmn_paragraph tools_paragraph'>Delivering an extensive array of services to address all facets of your business requirements, ensuring tailored solutions with expertise and excellence.</p>
            </div>
     <div>
     <button className='cmn_btn'>Get a quote</button>
     </div>
        </div>
        <div className='row'>
            <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='service_card'>
                    <img src={testing_img}/>
                  <h3>Testing</h3>
                  <p className='cmn_paragraph '>We offer comprehensive testing services to ensure your software is bug-free, reliable, and performs optimally under all conditions.</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='service_card'>
                    <img src={ui_ux_img}/>
                  <h3>UI/UX Design</h3>
                  <p className='cmn_paragraph'>Our UI/UX design services focus on creating user-centric designs that enhance usability and provide an aesthetically pleasing experience for your digital products.</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='service_card'>
                    <img src={game_img}/>
                  <h3>Game Development</h3>
                  <p className='cmn_paragraph'>Our serviceed developers create engaging and immersive games across various platforms, delivering exceptional user experiences that captivate your audience.</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='service_card  mt-4'>
                    <img src={cloud_migration}/>
                  <h3>Cloud Migration Service</h3>
                  <p className='cmn_paragraph'>We facilitate smooth and secure cloud migration, helping you leverage the power of cloud computing to enhance your business agility and efficiency.</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='service_card  mt-4'>
                    <img src={custom_img}/>
                  <h3>Custom Software Service</h3>
                  <p className='cmn_paragraph'>Our custom software solutions are designed to address your unique challenges, ensuring optimal performance and scalability for your business operations.</p>
                </div>
            </div>
            <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='service_card  mt-4'>
                    <img src={software_product_img}/>
                  <h3>Software Product Development</h3>
                  <p className='cmn_paragraph'>From concept to launch, we develop high-quality software products that meet your specific requirements and drive business growth.</p>
                </div>
            </div>
            
            
            
        </div>
        <div className='text-center mt-4 load_more_btn_outer'>
      <button className='cmn_btn'>Load More</button>
    </div>
    </div>
  )
}

export default Services