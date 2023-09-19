import React from 'react'
import './../../Styles/Pricing.css'
// import {loadStripe} from '@stripe/stripe-js';

const Pricing = () => {

 


  return (
    <>
  
   <section id="pricing">
    <div className="container">
        <div className="pricing_top">
            <h2 className="section_title">Gym <span className="highlights">Price </span>Plan</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipbr
                isicing elit. Reiciendis quo itaque cumque adipisci dignissimos modi delectus mi
                <br />nus, optio deserunt facere! Ut amet nisi aspernatur delectus eligendi magni beatae porro numquam?</p>
        </div>




<div className="pricing_wrapper">
  <div className="pricing_item">
    <div className="pricing_card-top">
      <h2 className='section_title'>Regular Member</h2>
      <h2 className="pricing section_title">999₹ <span>/month</span></h2>
    </div>

    <div className="services">
      <ul>
        <li><span><i class="ri-checkbox-circle-fill"></i></span>Unlimited Acess to the gym</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span> Customer Support</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span> Trainer</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span>Standard options</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span> 5 C lasses per week</li>
        
      </ul>
      <button className="register_btn">Join </button>
    </div>


  </div>



  <div className="pricing_item pricing_item_03">
    <div className="pricing_card-top ">
      <h2 className='section_title'>Golden Member</h2>
      <h2 className="pricing section_title">2000₹  <span>/month</span></h2>
    </div>

    <div className="services">
      <ul>
        <li><span><i class="ri-checkbox-circle-fill"></i></span>Unlimited Acess to the gym</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span> Customer Support+additional benefits</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span>Personal Trainer+Home Trainer</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span>Standard options like  <br />suppliments and Helath coach</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span> 7 C lasses per week</li>
        
      </ul>
      <button className="register_btn">Join</button>
    </div>
     </div>

  <div className="pricing_item pricing_item_02">
    <div className="pricing_card-top ">
      <h2 className='section_title'>Premium Member</h2>
      <h2 className="pricing section_title">1499₹  <span>/month</span></h2>
    </div>

    <div className="services">
      <ul>
        <li><span><i class="ri-checkbox-circle-fill"></i></span>Unlimited Acess to the gym</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span> Customer Support</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span>Personal Trainer</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span>premium options</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span> 5 C lasses per week</li>
        <li><span><i class="ri-checkbox-circle-fill"></i></span> Suppliments </li>
        
      </ul>
      <button className="register_btn"  >Join</button>
    </div>




  </div>



 

</div>
    </div>
   </section>
   </>
  )
}

export default Pricing