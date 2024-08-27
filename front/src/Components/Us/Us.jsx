import React from 'react'
import "./Us.scss"

export function Us({dato}) {

  return (
    <div className='container_general container container_home'>
        <div className='container_picture_home_us'>
          <img className='picture_home_us' src="./DB/nosotros.JPG" alt="" />
        </div>
        <div className='text_home_us'>
          <h2 className='title_general left'>
            NOSOTROS
          </h2>
          <h2 className='subtitle_general left'>
              <strong>{dato.title}</strong>
          </h2>
          <p className='text_general'>
          {dato.message}
          </p>
        </div>
    </div>
  )
}
