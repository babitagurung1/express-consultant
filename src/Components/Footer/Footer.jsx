import React from 'react'
import logo from "../../Images/logo1.png"
import "./footer.css"
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { MdMailOutline } from 'react-icons/md'
import { FaLock } from "react-icons/fa";
import { PiNotebookBold } from "react-icons/pi";
import { PiNotebookFill } from "react-icons/pi";
const Footer = () => {
  return (
    <div className='footer_container paddingLeftRight cmn_margin'>
      <div className='footer_inner_content'>
      <div className='row'>
        <div className='col-lg-4 col-sm-12 col-md-6'>
          <div className='footer_logo_outer'>
            <img src={logo} className='express_logo'/>
          </div>
        </div>
        <div className='col-lg-5 col-sm-12 col-md-6 d-flex justify-content-center'>
        <ul className='contact_info_list footer_info_list'>
        <li className='d-flex gap-3 align-items-center  '>
                <MdMailOutline />
                    <h3>info@expressconsultants.us</h3></li>
                <li className='d-flex gap-3 align-items-center  mt-3'>
                <IoCallOutline />
                    <h3>(972)423-9099</h3>
                </li>
               
                <li className='d-flex gap-3 align-items-center  mt-3'>
                <IoLocationOutline />
                <h3>U.S.A</h3></li>
            </ul>
        </div>
        <div className='col-lg-3 col-sm-12 col-md-6'>
        <ul className='contact_info_list footer_info_list blog_lists'>
                <li className='d-flex gap-3 align-items-center'>
                <PiNotebookFill />
                    <h3>Blogs</h3>
                </li>
                <li className='d-flex gap-3 align-items-center mt-3'>
                <PiNotebookBold />
                    <h3>Terms and Conditions</h3></li>
                <li className='d-flex gap-3 align-items-center mt-3'>
                <FaLock />
                <h3>Privacy policy</h3></li>
            </ul>
        </div>
      </div>

      </div>
      <h6 className='copy_right_title'>Copyrights © 2024 expressconsultants.us.  All Rights Reserved.</h6>
    </div>
  )
}

export default Footer