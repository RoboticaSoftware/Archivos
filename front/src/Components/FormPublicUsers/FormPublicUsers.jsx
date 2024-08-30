import React, { useState } from 'react'
import { Input,Button, Form } from 'semantic-ui-react'
import {createPublicUser, updatePublicUser} from "../../api/apiPublicUsers"



import "../FormPQRSD/FormPQRSD.css"

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

     /* Enviara el formulario al backend */
     const sendPublicUser = async(e) => {
        e.preventDefault()
        if (publicUser.id=== null) {
            setMessage( await createPublicUser(publicUser, setShowMessage,setPublicUser))
        } else {
            setMessage( await updatePublicUser(publicUser, setShowMessage,setPublicUser))
        }
         
    }

     

    return (
    <Form key='F2' className='form-pqrsd' action="#" onSubmit={sendPublicUser} >
        <Form.Field className='form-pqrsd__input' >   
            <h3 className='form-pqrsd__subtitle left'>Tipo de documento de identidad</h3>
            {/**------------------------------------------------------------------------------- */}
            {/**----------------------------------------------------------------------------------- */}
            <select className="form-pqrsd__input ui fluid dropdown"
            required
            disabled
            name='pu_dt'
            onChange={getPublicUser}
            defaultValue={publicUser.pu_dt}
            >
                <option value=""></option>
                {documentTypes.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.dt_code} - {item.dt_description}
                    </option>
                ))}
            </select>
        </Form.Field>
        <Form.Field >
            <h3 className='form-pqrsd__subtitle left'>Número de identificación</h3>
            <Input 
            className='form-pqrsd__input'
            icon='id card' 
            iconPosition='left' 
            placeholder='Ingrese su número de identificación' 
            name='pu_number'
            type='text'
            required
            readOnly
            onChange={getPublicUser} 
            defaultValue={publicUser.pu_number}
            />
        </Form.Field>
        <Form.Field >
            <h3 className='form-pqrsd__subtitle left'>Nombre o Razón Social</h3>
            <Input 
            className='form-pqrsd__input'
            icon='user' 
            iconPosition='left' 
            placeholder='Ingrese su nombre o su razon social' 
            name='pu_name'
            type='text'
            required
            onChange={getPublicUser}
            defaultValue={publicUser.pu_name}
            />
        </Form.Field>
        
        <Form.Field >
            <h3 className='form-pqrsd__subtitle left'>Correo electrónico</h3>
            <Input 
            className='form-pqrsd__input'
            icon='envelope' 
            iconPosition='left' 
            placeholder='Ingrese su email' 
            name='pu_email'
            type='email'
            required
            onChange={getPublicUser}
            defaultValue={publicUser.pu_email}
            />
        </Form.Field>
        <Form.Field >
            <h3 className='form-pqrsd__subtitle left'>Número de contacto</h3>
            <Input 
            className='form-pqrsd__input'
            icon='phone volume' 
            iconPosition='left' 
            placeholder='Ingrese su número telefónico' 
            name='pu_phone'
            type='number'
            required
            onChange={getPublicUser} 
            defaultValue={publicUser.pu_phone}
            />
        </Form.Field>
        {publicUser.id
        ?
        <Form.Field className = 'form-pqrsd__button-container'>
            <Button type='submit' >Modificar</Button>
            <Button type='button' onClick={() => {setShowPQRSD (true)}}>Siguiente</Button>
        </Form.Field>
        :
        <Form.Field>
            {message.title === 'Exitoso' 
            ?<Button type='button' onClick={() => {setShowPQRSD (true)}}>Siguiente</Button>
            :<Button type='submit' >Guardar</Button>
            } 
            
        </Form.Field>
        }

                        
    </Form>
  )
}
