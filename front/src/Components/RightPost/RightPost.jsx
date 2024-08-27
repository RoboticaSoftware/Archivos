import React from 'react'
import "./RightPost.scss";

export function RightPost({dato}) {

  return (
    <div className='container_general right_post'>
        <div className='text_right_post'>
          <h2 className='title_general left'>
              <strong>{dato.title}</strong>
          </h2>
          <p className='text_general'>
            {dato.message}
          </p>

        </div>
        <div className='container_picture_right_post'>
          <img className='picture_right_post' src={dato.img} alt="" />
        </div>

    </div>
  )
}
