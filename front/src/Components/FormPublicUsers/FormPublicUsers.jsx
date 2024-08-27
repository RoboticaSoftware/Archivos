import React, { useState } from 'react'
import { Input,Button, Form } from 'semantic-ui-react'
import {createPublicUser, updatePublicUser} from "../../api/apiPublicUsers"
import { AlertMessage } from '../AlertMessage'

import "./FormPublicUsers.scss"

export function FormPublicUsers( {publicUser, setPublicUser,showMessage ,setShowMessage, setShowPQRSD, documentTypes}) {
    const [message, setMessage] = useState({
        color: '',
        title: '',
        content: ''
    })
    
    /* Actualiza el valor de la PublicUser */
    const getPublicUser = (e) => {
        setPublicUser({...publicUser,[e.target.name]:e.target.value})
        setShowMessage(false)
    };
    const getPublicUser2 = (e) => {
        setPublicUser({...publicUser,[e.target.name]:e.target.checked})
        setShowMessage(false)
    };

     /* Enviara el formulario cuando se tenga el api del backend */
     const sendPublicUser = async(e) => {
        e.preventDefault()
        if (publicUser.id=== null) {
            setMessage( await createPublicUser(publicUser, setShowMessage,setPublicUser))
        } else {
            setMessage( await updatePublicUser(publicUser, setShowMessage,setPublicUser))
        }
         
    }

     

    return (
    <Form key='F2' className='form_border form_login' action="#" onSubmit={sendPublicUser} >
        <Form.Field className='input_login' >   
            <h3 className='subtitle_general left'>Tipo de documento de identidad</h3>
            <select className="text_label ui fluid dropdown"
            required
            disabled
            name='public_user_td'
            onChange={getPublicUser}
            defaultValue={publicUser.public_user_td}
            >
                <option value=""></option>
                {documentTypes.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.DocumentType_code} - {item.DocumentType_description}
                    </option>
                ))}
            </select>
        </Form.Field>
        <Form.Field >
            <h3 className='subtitle_general left'>Número de identificación</h3>
            <Input 
            className='input_login'
            icon='id card' 
            iconPosition='left' 
            placeholder='Ingrese su número de identificación' 
            name='public_user_numberTd'
            type='text'
            required
            readOnly
            onChange={getPublicUser} 
            defaultValue={publicUser.public_user_numberTd}
            />
        </Form.Field>
        <Form.Field >
            <h3 className='subtitle_general left'>Nombre o Razón Social</h3>
            <Input 
            className='input_login'
            icon='user' 
            iconPosition='left' 
            placeholder='Ingrese su nombre o su razon social' 
            name='public_user_name'
            type='text'
            required
            onChange={getPublicUser}
            defaultValue={publicUser.public_user_name}
            />
        </Form.Field>
        
        <Form.Field >
            <h3 className='subtitle_general left'>Correo electrónico</h3>
            <Input 
            className='input_login'
            icon='envelope outline' 
            iconPosition='left' 
            placeholder='Ingrese su email' 
            name='public_user_email'
            type='email'
            required
            onChange={getPublicUser}
            defaultValue={publicUser.public_user_email}
            />
        </Form.Field>
        <Form.Field >
            <h3 className='subtitle_general left'>Número de contacto</h3>
            <Input 
            className='input_login'
            icon='phone volume' 
            iconPosition='left' 
            placeholder='Ingrese su número telefónico' 
            name='public_user_phone'
            type='number'
            required
            onChange={getPublicUser} 
            defaultValue={publicUser.public_user_phone}
            />
        </Form.Field>
        {publicUser.id
        ?
        <Form.Field>
            <Button type='submit' className = 'botton_general' >Modificar</Button>
            <Button type='button' className = 'botton_general' onClick={() => {setShowPQRSD (true)}}>Siguiente</Button>
        </Form.Field>
        :
        <Form.Field>
            {message.title === 'Exitoso' 
            ?<Button type='button' className = 'botton_general' onClick={() => {setShowPQRSD (true)}}>Siguiente</Button>
            :<Button type='submit' className = 'botton_general' >Guardar</Button>
            } 
            
        </Form.Field>
        }

                        
    </Form>
  )
}
