import React from 'react'
import "./blog.css"
import user_img from "../../Images/user12.webp"
import enhance_client_image from "../../Images/Enhancing_client_experience.png"
import customsoftware_image from "../../Images/Why_custom_software.png"
const Blog = () => {
  return (
    <div className='blog_outer paddingLeftRight cmn_margin' id='Blogs'>
        <div className='d-flex blog_content_outer'>
        <div>
        <h2 className='cmn_heading'>Grow your knowledge with us</h2>
        <p className='cmn_paragraph'>Expand your expertise with our comprehensive resources and expert insights. Join us to stay ahead in your field.</p>
         </div>
        <button className='cmn_btn'>More Blogs</button>

        </div>
        <div className='row mt-3'>
            <div className='col-lg-6 col-sm-12 col-md-12'>
                <div>
                    <div className='blog_imageouter'>
                        <img src={enhance_client_image} width="100%"/>
                    </div>
                    <h3 className='mt-3 blog_heading'>Enhancing Client Experience with Customized Software</h3>
                    <p className='cmn_paragraph'>In today’s competitive market, delivering an exceptional client experience is crucial for business success. Customized software solutions can play a…</p>
                <div className='blog_footer_outer d-flex justify-content-between align-items-center'>
                    <div className='blog_author d-flex gap-2 align-items-center'>
                     <div className='d-flex gap-3 align-items-center'>
                     <img src={user_img}/>
                       <h3 className='cmn_paragraph'>John</h3>
                     </div>
                       <h6 className='cmn_paragraph'>July 24, 2024</h6>
                    </div>
                 <button className='express_btn'>Read More</button>
                </div>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 col-md-12'>
                <div> 
                    <div className='blog_imageouter'>
                        <img src={customsoftware_image} width="100%"/>
                    </div>
                    <h3 className='mt-3 blog_heading'>Enhancing Client Experience with Customized Software</h3>
                    <p className='cmn_paragraph'>In today’s competitive market, delivering an exceptional client experience is crucial for business success. Customized software solutions can play a…</p>
                <div className='blog_footer_outer d-flex justify-content-between align-items-center'>
                    <div className='blog_author d-flex gap-2 align-items-center'>
                     <div className='d-flex gap-3 align-items-center'>
                     <img src={user_img}/>
                       <h3 className='cmn_paragraph'>John</h3>
                     </div>
                       <h6 className='cmn_paragraph'>July 24, 2024</h6>
                    </div>
                 <button className='express_btn'>Read More</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog