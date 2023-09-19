import React from 'react'
import gym from '../../asset/gym2.png'
import dumble from '../../asset/dumble.png'
import '../../Styles/Hero.css'

const Hero = () => {
  return (
  
   <>
   <section >
    <div className="container">
        <div className="hero_wrapper">
            <div className="hero_content">
                <h2 className='Section_tittle'>
 Achieve Your Dream Physique through  <span className='highlights'> Dedicated Training
    </span>
</h2>
<p>A gym is a dedicated space where individuals embark on a journey to enhance their physical fitness
It's a place filled with various exercise equipment and resources to help you get in shape. </p>
<div className="hero_btns">
    <button className='register_btn'>Get Started </button>
    <button className="watch_btn"><span><i class="ri-play-fill"></i></span>Watch Video</button>
</div>
            </div>
            <div className="hero_img">
                <div className="hero_img-wrapper">

<div className="box-01">
    <div className="box-02">
            <div className="box_img">
                <img src={gym} alt="" />
            </div>
      
    </div>
</div>

<div className="heart_rate">
    <h5>Heart Rate</h5>
    <span><i class="ri-heart-pulse-fill"></i></span>
    <h6>2567 BPM</h6>
</div>

<div className="gym_location">
    <span><i class="ri-map-pin-line"></i></span>
    <h5>Find a new Gym  <br />Near You</h5>
</div>

<div className="dumble_icon">
    <img src={dumble} alt="" />
</div>

                </div>
            </div>
        </div>
    </div>
   </section>
   </>

  )
}

export default Hero