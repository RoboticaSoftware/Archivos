import React from 'react'

import "./ListItemsH.scss"

export function ListItemsH({dato}) {
  return (
    <>
        <div className='container_general'>
            <div className="ui internally celled grid">
                {
                    dato.map((item,key) => (
                        <div className="row_item" key={key}>
                            <div className="container_title_item ">
                                <p className='title_item'>{item.title}</p>
                            </div>
                            <div className='container_content'>
                                <div className="container_img_column">
                                    <img className='img_column' src={item.img} alt="" />
                                </div>
                                <div className="text_general container_text_column">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    </>
  )
}
