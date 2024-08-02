import React from 'react'
import "./specialization.css"
import education_img from "../../Images/education.jpg"
import taxi_driver from "../../Images/texi_app.jpg"
import SaaS_img from "../../Images/SaaS.jpg"

import Travel_img from "../../Images/TourTravel.jpg"
const Specializations = () => {

  return (

    <div className='specialization_container cmn_margin'>
        <h3 className='cmn_heading'>Our industry <br></br>  Specialization</h3>
        <p className='cmn_paragraph express_consultant_paragraph'>Express Consultants excels through the synergy of our expert teams and loyal clients, ensuring exceptional productivity, customer satisfaction, and respect for achievements at every level.</p>
    <div className='row mt-5'>
        <div className='col-lg-3 col-sm-12 col-md-6'>
            <div className='industry_slide'>

           <img src={education_img}/>
           <div className='industrySlide_content'>
            <div className='industrySlide_content_outer'>
            <h3>Education Enhancement Solutions:</h3>
            <p>Transforming learning experiences through innovative technology solutions.</p>
            </div>
                
           </div>
            </div>
        </div>
        <div className='col-lg-3 col-sm-12 col-md-6'>
        <div className='industry_slide'>

        <img src={taxi_driver}/>
<div className='industrySlide_content'>
 <div className='industrySlide_content_outer'>
 <h3>Next-Gen Ride-Hailing Services:</h3>
 <p>Revolutionizing your transportation business with state-of-the-art technology.</p>
 </div>
     
</div>
 </div>
        </div>
        <div className='col-lg-3 col-sm-12 col-md-6'>
        <div className='industry_slide'>

<img src={SaaS_img}/>
<div className='industrySlide_content'>
<div className='industrySlide_content_outer'>
<h3>Scalable Software Services:</h3>
<p>Empowering businesses with robust and adaptable software solutions, served as a service.</p>
</div>

</div>
</div>
        </div>
        <div className='col-lg-3 col-sm-12 col-md-6'>
        <div className='industry_slide'>

<img src={Travel_img}/>
<div className='industrySlide_content'>
<div className='industrySlide_content_outer'>
<h3>Dynamic Travel Tech Solutions:</h3>
<p>Enriching travel companies with seamless booking and management technology.</p>
</div>

</div>
</div>
        </div>
    </div>
    
    </div>
  
  )
}

export default Specializations