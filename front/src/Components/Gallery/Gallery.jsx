import React from 'react'
import "./Gallery.scss"

export function Gallery() {
    
    const images = [
        {img:"./DB/img3.JPG"} 
    ]

    return (
        <>
        {images.map((img, item) => (
            <div className='container_img_home' key={item}>
                <img className='img_home_client' src={img.img} alt="" />
                <div className="overlay-icons">
                    <i className="control_picture_home massive angle left icon"></i>
                    <i className="control_picture_home massive angle right icon"></i>
                </div>
            </div>
        ))}
        </>

    )
}
