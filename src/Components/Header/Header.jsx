// import { useRef } from 'react'
import React , { useRef} from 'react'
import '../../Styles/Header.css'
import body from  '../../asset/body-.png'
import { useEffect } from 'react'
import  { useState } from 'react';
import '../../Components/UI/LoginForm'



const nav_links=[
    {
    path:'#',
    display:'Home'
},
{
    path:"#schedule",
    display:'Schedule'
},
{
    path:"#testi",
    display:'Testmonials'
},
{
    path:"#pricing",
    display:'Pricing'
},
]


    
 

const Header = () => {

    const headerRef=useRef(null)
    const headFunc =()=>{
        if(document.body.scrollTop>80 ||document.documentElement.scrollTop>80){
            headerRef.current.classList.add('sticky_header')
        }
        else{
            headerRef.current.classList.remove('sticky_header')
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",headFunc);
        return ()=> window.removeEventListener('scroll',headFunc)
    },[]
    )


    const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
 
 <header className='header' ref={headerRef}>
    <div className="container">
        <div className="nav_wrapper">
            <div className="logo">
                <div className="logo_img">
                    <img src={body} alt="my-img" />
                </div>
                <h2>Infinity-Gym</h2>
            </div>
<div className="navigation">
    <ul className="menu">
        {
            nav_links.map(item=>(
                <li className='nav_item'><a href={item.path}>{item.display}</a></li>
            ))
        }
    </ul>
</div>
{/* <div className="nav_right">
   <a href="../Register/Register.jsx"> <button className="register-btn">Register</button></a>
    <span className="mobile_menu"><i class="ri-menu-fill"></i></span>
</div> */}
  <div className="nav_right">
        <button className="register-btn" onClick={toggleLoginForm}>
          Register
        </button>
        <span className="mobile_menu"><i class="ri-menu-fill"></i></span>
      </div>
      {showLoginForm && (
        <div className="overlay">
          {/* <LoginForm onClose={toggleLoginForm} /> */}
          {/* <LoginForm></LoginForm> */}
        </div>
      )}

        </div>
    </div>
 </header>
  );
 
};

export default Header;