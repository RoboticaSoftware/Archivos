import React, {useState} from 'react'
import { Input,Button, Form  } from 'semantic-ui-react'
import "./FormLogin.scss"

export function FormLogin() {

  /* Guarda el dato del usuario ingresado en el formulario */
  const [user, setUser] = useState();

  /*Actualiza el usuario cuando se modifica el formulario */
  const getUser = (e,{ name, value }) => {
      setUser({...user,[name]:value})
  };

  /* Enviara el formulario cuando se tenga el api del backend */
  const sendUser = (e) => {
    e.preventDefault()
    console.log(user)

  }


  return (
    <>
      <div className='image_form_login'>
        <i className="huge user icon"></i>
      </div>
      <div className='form_login'>
        <Form className='form_login' action="#" onSubmit={sendUser}>
          <Form.Field >
            <Input 
              className='input_login'
              icon='users' 
              iconPosition='left' 
              placeholder='Ingrese su email' 
              name='email'
              type='email'
              required  
              onChange={getUser}/>
          </Form.Field>
          <Form.Field>
            <Input 
              className='input_login'
              icon='key' 
              iconPosition='left' 
              placeholder='Ingrese su contraseña' 
              name='password'
              type='password'
              required 
              onChange={getUser} />
          </Form.Field>
          <div className='submit_login'>
            <Button className='button_submit_login'  type='submit'> Iniciar</Button>
          </div>
        </Form>
      </div>
      <br />
      <div>
        <Button className='button_submit_login' > Cambiar clave</Button>
      </div>
    </>
  )
}
