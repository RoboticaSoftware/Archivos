import React, {useState} from 'react';
import { MdLightMode,MdNightlightRound,MdOutlineWhatsapp } from "react-icons/md";
import { GoZoomIn,GoZoomOut } from "react-icons/go"; 

import "./LateralBar.scss";

export function LateralBar() {
    const [theme, setTheme] = useState(false);

    const chageTheme = (e) =>{
        e.preventDefault()
        setTheme(!theme)
    }
    return (
        <>
            <div className='container_lateral_bar'>
                <a className='icon_lateral_bar' href="">
                    {theme 
                    ? <MdLightMode  className='icon' onClick={chageTheme}/> 
                    : <MdNightlightRound  className='icon' onClick={chageTheme}/>}
                </a>
                <a className='icon_lateral_bar' href="">
                <GoZoomIn  className='icon'/>
                </a>
                <a className='icon_lateral_bar' href="">
                <GoZoomOut  className='icon'/>
                </a>
                <a className='icon_lateral_bar' href="">
                <MdOutlineWhatsapp  className='icon'/>
                </a>
            </div>
        </>
    )
}
