import React from 'react'
import "./contact.css"
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contactus = () => {
  return (
    <div className='contact_us_container paddingLeftRight cmn_margin' id='Contactus'>
        <dov className="">
  <div className='row'>
    <div className='col-lg-6 col-sm-12 col-md-12'>
        <div>
            <h3 className='cmn_heading'>Get in Touch with</h3>
            <h2 className='our_experts_heading'>Our <br></br> Experts</h2>
            <p className='cmn_paragraph'>We’d love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
            <h4 className='contact_info'>Contact info:</h4>
            <ul className='contact_info_list'>
                <li className='d-flex gap-3 align-items-center'>
                <IoCallOutline />
                    <h3>(972)423-9099</h3>
                </li>
                <li className='d-flex gap-3 align-items-center mt-3'>
                <MdMailOutline />
                    <h3>info@expressconsultants.us</h3></li>
                <li className='d-flex gap-3 align-items-center mt-3'>
                <IoLocationOutline />
                <h3>U.S.A</h3></li>
            </ul>
        </div>
    </div>
    <div className='col-lg-6 col-sm-12 col-md-12'>
        <div className='contact_us_form_outer'>
            <h3 className='cmn_heading'>Let’s Get to know you</h3>
            <div className='form-group'>
                <label>Full Name</label>
                <input className='form-control' type="text" placeholder='John'/>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input className='form-control' type="text" placeholder='john@gmail.com'/>
            </div>
            <div className='form-group'>
                <label>Phone</label>
                <input className='form-control' type="text" placeholder='+894546454'/>
            </div>
            <div className='form-group'>
                <label>Message</label>
                <textarea rows={5} className='form-control mt-2' type="text" placeholder='Briefly tell us about your project and current  goals.
                how can we help you ?'/>
            </div>
            <button className='cmn_btn mt-4'>Send Message</button>
        </div>
    </div>
  </div>

        </dov>
    </div>
  )
}

export default Contactus