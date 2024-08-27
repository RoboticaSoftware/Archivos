import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";

import "./ListText.scss"

export  function ListText({dato}) {
  return (
    <>
        <div className='container_general'>
            <h2 className='title_general'>
                <strong>NUESTRA TECNOLOGÍA</strong>
            </h2>
            <div className="ui internally celled grid">
                {
                    dato.map((item, key) =>(
                        <div className="row" key={key}>
                            <div className=" two wide column">
                                <BsArrowRightCircle size={30} />
                            </div>
                            <div className="text_general thirteen wide column">
                                <p>{item.text}</p>
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
