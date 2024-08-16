import React from 'react'
import { Message  } from 'semantic-ui-react'

import "./AlertMessage.scss"

export function AlertMessage({color, title, content}) {
  return (
    <>
        <Message className='alert_message'
                color={color}  
                header={title}
                content={content}
        />
    </>
    
  )
}
