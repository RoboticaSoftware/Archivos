import React from 'react';
import { FaXTwitter,
        FaFacebookF,
        FaLinkedinIn,
        FaInstagram,
        FaUser,
        FaRegEnvelope } from "react-icons/fa6";
import "./Header.scss";


export function Header() {
  return (
    <>
      <div className='top-bar'>
        <div className='logo_gov'>
          <a href="https://www.gov.co/">
            <img src="/logo_gov.co.png" className='logo_gov_img'/>
          </a>
          
        </div>
        <div className='bar-menu-social-media'>
          <div className="menu_social_link">
            <a className="item_social" href='https://outlook.office.com/mail/'>
              <FaRegEnvelope />
            </a>
            <a className="item_social">
              <FaXTwitter />
            </a>
            <a className="item_social">
              <FaFacebookF />
            </a>
            <a className="item_social">
              <FaInstagram />
            </a>
            <a className="item_social">
              <FaLinkedinIn />
            </a>
            <a className="item_user" href='/login'>
              <FaUser />
            </a>
          </div>
        </div>
      </div>
      {/**Barra principal */}
      <div className='menu-bar'>
        <div className='logo' >
          <img src="/logo_AE.png" className='logo_AE_img'/>
        </div>
        <div className="main_menu">
          <a className={window.location.pathname === "/home"?"item_menu_press":"item_menu"} href='/home'>
            Inicio
          </a>
          <a className={window.location.pathname === "/nosotros"?"item_menu_press":"item_menu"} href='/nosotros'>
            Nosotros
          </a>
          <a className={window.location.pathname === "/servicios"?"item_menu_press":"item_menu"} href='/servicios'>
            Servicios
          </a>
          <a className={window.location.pathname === "/innovacion"?"item_menu_press":"item_menu"} href='/innovacion'>
            Innovación
          </a>
          <a className={window.location.pathname === "/contratacion"?"item_menu_press":"item_menu"} href='/contratacion' >
            Contratación
          </a>
          <a className={window.location.pathname === "/transparencia"?"item_menu_press":"item_menu"} href='/transparencia'>
            Transparencia y acceso a la información pública
          </a>
          <a className={window.location.pathname === "/contacto"?"item_menu_press":"item_menu"} href='/contacto'>
            Atención y Servicios a la Ciudadanía
          </a>
          <a className={window.location.pathname === "/participa"?"item_menu_press":"item_menu"} href='/participa'>
            Participa
          </a>
          <a className={window.location.pathname === "/radicar"?"item_menu_press":"item_menu"} href='/radicar'>
            Radicar
          </a>

        </div>
      </div> 
      
    </>
  )
}

