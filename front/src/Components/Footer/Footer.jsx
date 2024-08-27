import React from 'react'
import { FaXTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaRegEnvelope,
    FaLocationDot,
    FaCalendarCheck} from "react-icons/fa6";
import { MdWifiCalling3,MdSupportAgent } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

import "./Footer.scss"

export function Footer() {
  return (
    <>
        <div className='container_footer'>
            <div className='container_logo_footer'>
                <img  className= 'picture_footer' src="./LOGOBLANCO.png" />
            </div>
            <div className='container_footer_contact'>
                <h3 className='title_footer'>CONTACTO</h3>
                <div className='contact_mail_footer'>
                    <a className="item_icon_footer">
                        <FaRegEnvelope size={20} />
                    </a>
                    <h4 className='item_text_footer'>notificaciones@archivosdelestado.com.co</h4>
                </div>
                <div className='contact_mail_footer'>
                    <a className="item_icon_footer">
                        <MdWifiCalling3 size={20}/>
                    </a>
                    <h4 className='item_text_footer'>(57 -1) 937 0002</h4>
                </div>
                <div className='container_social_footer'>
                    <a className="item_social">
                        <FaXTwitter size={15}/>
                    </a>
                    <a className="item_social">
                        <FaFacebookF size={15}/>
                    </a>
                    <a className="item_social">
                        <FaInstagram size={15}/>
                    </a>
                    <a className="item_social">
                        <FaLinkedinIn size={15}/>
                    </a>
                </div>
            </div>
            <div className='container_adress'>
                <div className='container_item_footer'>
                    <a className="item_icon_footer">
                        <FaLocationDot size={20}/>
                    </a>
                    <h4 className='item_text_footer'>AV. calle 26 # 69D-91 Oficina 304, Centro Empresarial Arrecife. Bogotá D.C.</h4>
                </div>
                <div className='container_item_footer'>
                    <a className="item_icon_footer">
                        <FaCalendarCheck size={20}/>
                    </a>
                    <h4 className='item_text_footer'>Lunes a viernes 8:00 am a 5:00 pm</h4>
                </div>
            </div>
            <div className='container_pqrsdf'>
                <div className='container_item_footer'>
                    <a className="item_icon_footer" href='/radicar'>
                        <MdSupportAgent size={20}/>
                    </a>
                    <h4 className='item_text_footer'>PQRSDF</h4>
                </div>
                <div className='container_item_footer'>
                    <a className="item_icon_footer">
                        <IoDocumentText size={20}/>
                    </a>
                    <h4 className='item_text_footer'>Politicas de Tratamiento de Datos</h4>
                </div>
            </div>
        </div>
    </>
  )


}
