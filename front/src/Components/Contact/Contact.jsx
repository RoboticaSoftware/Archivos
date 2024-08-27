import React, {useState} from 'react'
import "./Contact.scss"
import { Button, Input, TextArea } from 'semantic-ui-react'

export function Contact() {
  
  const [message, setMessage] = useState();
  /* Actualiza el valor del mensaje */
  const getMessage = (e,{ name, value }) => {
      setMessage({...message,[name]:value})
  };

  /* Enviara el formulario cuando se tenga el api del backend */
  const sendMessage = (e) => {
    e.preventDefault()
    console.log(message)

  }

  return (
      <>
        <div className='container_contact'>
          <div className='container_text_contact'> 
            <h1 className='title_contact'>CONTÁCTENOS</h1>
            <p className='content_contact'>
              Cumpliendo con la normatividad vigente, contamos con una amplia variedad de
              servicios que le permitirán proteger su información, almacenarla de forma sencilla
              y acceder a ella en el momento requerido
            </p>
          </div>
          <div className='container_form_contact'>
            <div className='subcontainer_form_contact'>
              <form className='form_contact' onSubmit={sendMessage}>
                <div className='field_form_contact'>
                  <h3 htmlFor="">NOMBRE</h3>
                  <Input 
                    className='input_contact'
                    icon='users' 
                    iconPosition='left' 
                    placeholder='Ingrese su nombre' 
                    name='name'
                    type='text'
                    onChange={getMessage}
                    required  
                  />
                </div>
                <div className='field_form_contact'>
                  <h3 htmlFor="">CORREO</h3>
                  <Input 
                    className='input_contact'
                    icon='envelope outline' 
                    iconPosition='left' 
                    placeholder='Ingrese su email' 
                    name='email'
                    type='email'
                    onChange={getMessage}
                    required  
                  />
                </div>
                <div className='field_form_contact'>
                  <h3 htmlFor="">ASUNTO</h3>
                  <Input 
                    className='input_contact'
                    icon='tag' 
                    iconPosition='left' 
                    placeholder='Asunto' 
                    name='subject'
                    type='text'
                    onChange={getMessage}
                    required  
                  />
                </div>
                <div className='field_form_contact'>
                  <h3 htmlFor="">MENSAJE</h3>
                  <TextArea 
                    className='input_contact'
                    placeholder='Ingrese su mensaje (máximo 255 caracteres)' 
                    name='message'
                    type='text'
                    maxLength={255}
                    onChange={getMessage}
                    required  
                  />
                </div>
                <div className='button_form_contact'>
                  <Button  className = 'button_form_contact' >Enviar</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
}
