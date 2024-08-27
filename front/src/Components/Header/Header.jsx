import React, { useState } from 'react';
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaUser, FaRegEnvelope } from "react-icons/fa6";
import "./Header.scss";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='top-bar'>
                <div className='logo_gov'>
                    <a href="https://www.gov.co/">
                        <img src="/logo_gov.co.png" className='logo_gov_img' alt="Logo Gobierno" />
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
            
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="nav-container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-4 rtl:space-x-reverse">
                        <img src="/logo_AE.png" className="logo_AE_img" alt="Flowbite Logo" />
                    </a>
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Inicio</a>
                            </li>
                            <li>
                                <a href="/nosotros" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nosotros</a>
                            </li>
                            <li>
                                <a href="/servicios" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Servicios</a>
                            </li>
                            <li>
                                <a href="/innovacion" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Innovación</a>
                            </li>
                            <li>
                                <a href="/contratacion" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contratación</a>
                            </li>
                            <li>
                                <a href="/transparencia" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Transparencia y acceso a la información pública</a>
                            </li>
                            <li>
                                <a href="/contacto" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Atención y Servicios a la Ciudadanía</a>
                            </li>
                            <li>
                                <a href="/participa" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Participa</a>
                            </li>
                            <li>
                                <a href="/radicar" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Radicar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
