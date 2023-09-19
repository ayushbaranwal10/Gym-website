import React from 'react'
import '../../Styles/Testmonial.css'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-cards";
import avtar1 from '../../asset/avatar01.png'
import avtar2 from '../../asset/avatar02.png'


// import { EffectCards } from "swiper";

const Testimonials = () => {
  return (
   <section id="testi">
    <div className="container sliders">

        <h2 className="section_title">Testimonials</h2>
    <Swiper
        effect={"cards"}
        grabCursor={true}
        // modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="silde_item">
                <div className="slide_img-01">
                    <img src={avtar1} alt="" />
                </div>
                <h4>Jesica Fernandes</h4>
                <p>Infinity Gym has been a game-changer for me. With top-notch equipment, expert trainers, and a welcoming community, it's the ultimate fitness destination. Thanks to Infinity Gym, I've achieved incredible results and found a supportive fitness family. It's more than just a gym; it's a life-changing experience.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="silde_item">
                <div className="slide_img-02">
                    <img src={avtar2} alt="" />
                </div>
                <h4>Rita drani</h4>
                <p>nfinity Gym is my fitness sanctuary. It offers top-tier equipment, expert trainers, and a supportive community that has transformed my life. Thanks to Infinity Gym, I've achieved remarkable results and made lifelong friends. It's not just a gym; it's a life-changing journey."</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="silde_item">
                <div className="slide_img-02">
                    <img src={avtar2} alt="" />
                </div>
                <h4>Rita drani</h4>
                <p>nfinity Gym is my fitness sanctuary. It offers top-tier equipment, expert trainers, and a supportive community that has transformed my life. Thanks to Infinity Gym, I've achieved remarkable results and made lifelong friends. It's not just a gym; it's a life-changing journey."</p>
            </div>
        </SwiperSlide>
       
      </Swiper>

    </div>
   </section>
  )
}

export default Testimonials