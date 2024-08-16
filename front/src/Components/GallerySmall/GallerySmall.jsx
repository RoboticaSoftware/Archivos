import React from 'react'

import "./GallerySmall.scss"

export function GallerySmall({dato}) {
  return (
    <>
        <div className='container_gallery_small'>
            <h1 className='title_gallery_small'>{dato.title} </h1>
            <div className='subcontainer_gallery_small'>
                <div className='container_picture_gallery_small'>
                    <img className='picture_gallery_small' src={dato.img} />
                </div>
                <div className='container_text_gallery_small'>
                    <p className='text_gallery_small'>{dato.message}</p>
                </div>
                <div className="overlay-icons">
                        <i className="control_picture_gallery_small big angle left icon"></i>
                        <i className="control_picture_gallery_small big angle right icon"></i>
                </div>
            </div>
        </div>
    </>
  )
}
