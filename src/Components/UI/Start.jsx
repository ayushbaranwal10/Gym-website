import React from 'react'

import traine from '../../asset/trainer.png'

import './../../Styles/Start.css'


const Start = () => {
  return (
   <section id="schedule">
    <div className="container">
        <div className="start_wrapper">
            <div className="start_img">
                <img src={traine} alt="" />
            </div>

            <div className="start_content">
                <h2 className="section_tittle">
                    Ready to make a  <span className='highlights'>change ?</span>
                </h2>
                <p>
                    
Choose our gym for its convenient location, extensive equipment, and clean, well-maintained facilities. Our qualified trainers and diverse class offerings cater to various fitness goals. We offer flexible membership options and prioritize safety and hygiene. Enjoy a motivating and supportive atmosphere. Try us with our trial period and experience a gym that aligns with your fitness journey and lifestyle.
                </p>
                
                <button className="register_btn">Get Started</button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Start