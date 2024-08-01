import React from 'react'
import commitment_img from "../../Images/Commitment.jpg"
import quality_assurace_img from "../../Images/Quality-assurance.jpg"
import integrity_img from "../../Images/Integrity.jpg"
import transparancy_img from "../../Images/Transparency.jpg"
import consultancy_img from "../../Images/consultancy.png"
import "./expressConsultant.css"
import { FaUsers } from "react-icons/fa6";

const ExpressConsultant = () => {
  return (
    <div className='paddingLeftRight ExpressConsultant_outer cmn_margin'>
        <div className='row'>
            <div className='col-lg-6 col-sm-12 col-md-12'>
             <div className='position-relative'>
                <img src={consultancy_img} className='' width="100%"/>
                <div className='client_count d-flex gap-1 align-items-center'>
                <FaUsers className='cmn_heading'/>
                    <div>
                        <h3 className='cmn_heading'>142 +</h3>
                        <h6>Satisfied Clients</h6>
                    </div>
                </div>
             </div>
            </div>
            <div className='col-lg-6 col-sm-12 col-md-12'>
                <div className='business_consulting_inner_content'>
               <div className='business_consulting_outer'>
                <h3 className='cmn_heading'>We are IT solution and Business Consulting company</h3>
                <p className='cmn_paragraph'> <b>ExpressConsultants</b>is a premier IT solutions and business consulting company dedicated to 
                    helping businesses achieve their technological and strategic goals. Our experienced team of professionals works tirelessly to deliver innovative solutions that drive growth and efficiency. Since our inception, we have been committed to providing top-notch services that cater to the unique needs of each client,
                     ensuring they stay ahead in an ever-evolving digital landscape.</p>
                </div> 
                <div className='d-flex consultancy_content_wrapper'>
                 <div className='d-flex gap-2 consultancy_content_outer'>
                    <img src={commitment_img}/>
                    <div>
                        <h3>Commitment</h3>
                        <p className='cmn_paragraph'>Dedicated to your success every step of the way.</p>
                    </div>
                 </div>
                 <div className='d-flex gap-2 consultancy_content_outer'>
                    <img src={quality_assurace_img}/>
                    <div>
                        <h3>Quality assurance</h3>
                        <p className='cmn_paragraph'>Ensuring excellence in every step of the process.</p>
                    </div>
                 </div>
                 </div>
                 <div className='d-flex consultancy_content_wrapper'>
                 <div className='d-flex gap-2 consultancy_content_outer'>
                    <img src={integrity_img} />
                    <div>
                        <h3>Integrity</h3>
                        <p className='cmn_paragraph'>Upholding the highest ethical standards in all interactions.</p>
                    </div>
                 </div>
                 <div className='d-flex gap-2 consultancy_content_outer'>
                    <img src={transparancy_img}/>
                    <div>
                        <h3>Transparancy</h3>
                        <p className='cmn_paragraph'>Clear and open communication at all project stages..</p>
                    </div>
                 </div>

                 </div>

                </div>

               
            </div>
        </div>
    </div>
  )
}

export default ExpressConsultant