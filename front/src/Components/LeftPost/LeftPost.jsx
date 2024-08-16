import React from 'react'
import "./LeftPost.scss";

export function LeftPost({dato}) {

  return (
    <div className='container_general left_post'>
        <div className='container_picture_left_post'>
          <img className='picture_left_post' src={dato.img} alt="" />
        </div>
        <div className='text_left_post'>
          <h2 className='title_general left'>
              <strong>{dato.title}</strong>
          </h2>
          <p className='text_general'>
            {dato.message}
          </p>

        </div>

    </div>
  )
}
