import React from 'react'
import "./clientreview.css"
import user_img from "../../Images/the-eiffel-tower.jpg"
import quatation_img from "../../Images/quatation.png"

const ClientReview = () => {
  return (
    <div className='cmn_radius cmn_margin paddingTopBottom paddingLeftRight' id='Testimonals'>
        <h3 className='cmn_heading'>What Our Clients Say About Us​</h3>
        <p className='cmn_paragraph tools_paragraph'>Our clients' testimonials highlight the exceptional service and support we provide. Discover why they trust us as their preferred partner.​</p>
  <div className='row'>
    <div className='col-lg-4 col-sm-12 col-md-6'>
        <div className='testimonal_card'>
            <div className='d-flex gap-2 align-items-center'>
                <div className='img_outer'>
                <img src={user_img} />

                </div>
                <div className='client_info_outer'>
                    <h3>Emma Davis</h3>
                    <h6 className=''>Operations Manager</h6>
                </div>
            </div>
          
        
            <div className='client_quote'>
          <img src={quatation_img}/>
                <p className='cmn_paragraph'>ExpressConsultants proved to be an invaluable asset to our team. Their flexibility and proactive approach helped us navigate through complex project requirements smoothly. They consistently demonstrated their commitment to delivering high-quality work within budget and timeline constraints. A pleasure to work with!</p>
            </div>
        </div>
    </div>
    <div className='col-lg-4 col-sm-12 col-md-6'>
        <div className='testimonal_card position-relative'>
            <div className='d-flex gap-2 align-items-center'>
                <div className='img_outer'>
                <img src={user_img} />

                </div>
                <div className='client_info_outer'>
                    <h3>Emma Davis</h3>
                    <h6 className=''>Operations Manager</h6>
                </div>
            </div>
          
        
            <div className='client_quote'>
          <img src={quatation_img}/>
                <p className='cmn_paragraph'>ExpressConsultants proved to be an invaluable asset to our team. Their flexibility and proactive approach helped us navigate through complex project requirements smoothly. They consistently demonstrated their commitment to delivering high-quality work within budget and timeline constraints. A pleasure to work with!</p>
            </div>
        </div>
    </div>
    <div className='col-lg-4 col-sm-12 col-md-6'>
        <div className='testimonal_card position-relative'>
            <div className='d-flex gap-2 align-items-center'>
                <div className='img_outer'>
                <img src={user_img} />

                </div>
                <div className='client_info_outer'>
                    <h3>Emma Davis</h3>
                    <h6 className=''>Operations Manager</h6>
                </div>
            </div>
          
        
            <div className='client_quote'>
          <img src={quatation_img}/>
                <p className='cmn_paragraph'>Impressed by ExpressConsultants' professionalism and adaptability. They not only met but exceeded our expectations by enhancing our project scope without compromising quality. Their team's responsiveness and clear communication made the entire process seamless. Highly recommend them for any tech project!</p>
            </div>
        </div>
    </div>
  </div>
  </div>
  )
}

export default ClientReview