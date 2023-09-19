import React from 'react'
import './../../Styles/Done.css'
import logo from './../../asset/body-.png'

const Done = () => {
    const year=new Date().getFullYear()
  return (
   <>
   <footer className='footer'>

    <div className="container">
        <div className="footer_wrapper">
            <div className="footer_box">
                <div className="logo">
                    <div className="logo_img">
                        <img src={logo} alt="" />
                    </div>
                    <h2>Infinity-Gym</h2>
                </div>
                <p>Located Near BBD college <br />Well Maintained and suitable for Everyone Man/Women</p>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Company</h4>
                <ul className="footer_links">
                    <li><a href="#">Our Program</a></li>
                    <li><a href="#">Our plames</a></li>
                    <li><a href="#">Become Member</a></li>

                </ul>

            </div>

            <div className="footer_box">
                <h4 className="footer_title">Quick Start</h4>
                <ul className="footer_links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Support</a></li>

                </ul>

            </div>

            <div className="footer_box">
                <h4 className="footer_title">Quick Start</h4>
                <ul className="footer_links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Support</a></li>

                </ul>

            </div>
        </div>
        <p className='copy'>Copyright-{year}  Developed by Abhinav All rights reserved</p>
    </div>
  
   </footer>
   </>
  )
}

export default Done