import {useState, useEffect, useRef} from 'react'
import {getPuplicUsersApi, getDocumentTypeApi} from "../../api/apiPublicUsers"

import "../FormPQRSD/FormPQRSD.css"

import { Input,Button, Form } from 'semantic-ui-react'

export function SearchPublicUser({setShowPQRSD, setPublicUser,documentTypes, setDocumentTypes}) {
    /**Referencias */
    const inputRef = useRef(null);
    /**Estados */
    const [identification, setIdentification] = useState(
        {
            'anonymous' : '0'
        }
    );

    /**Estados iniciales */
    
    useEffect(() => {
        const fetchData = async () => {
              const data = await getDocumentTypeApi();
              setDocumentTypes(data);
        };
        fetchData();
    }, [])

       /**Funciones */
    const showPQRSD = (e) => {
        setShowPQRSD(true)
    }
    
    

    const getIdentification = (e) => {
        setIdentification({...identification,[e.target.name]:e.target.value})
        // Esto oculta el formulario de usuarios al cambiar alguna opción
        setPublicUser((prev) => (
            {
                'id':null,
                'pu_dt' : "",
                'pu_number' : "",
                'pu_name' : "",
                'pu_email' : "",
                'pu_phone' : null ,
                'enable' : false
            }
        ));
        setShowPQRSD(false);

    };

    const sendPublicUser = async(e) => {
        e.preventDefault()

        // Esto me permite siempre que se de clic en buscar redibujar el formulario de usuario
        setPublicUser((prev) => ({
            ...prev, enable : false
        }));

        if (identification.anonymous === '1') {
            const result = await getPuplicUsersApi(identification);
            setPublicUser(result);
        }else {
            setPublicUser({
                'pu_dt' : null,
                'pu_number' : "NA",
                'pu_name' : "",
                'pu_email' : "",
                'pu_phone' : null,
                'enable' : false,
                'id' : null 
            });
        }
    }
    
    return (
        <>
        <Form className='form-pqrsd' onSubmit={sendPublicUser} action="#">
            <Form.Field >   
                <h3 className='form-pqrsd__subtitle left'>Tipo de solicitud</h3>
                <select className="form-pqrsd__input ui fluid dropdown"
                required
                name='anonymous'
                onChange={getIdentification}
                >
                    <option value="0">Anonima</option>
                    <option value="1">En nombre propio</option>
                </select>
                <p className='form-pqrsd__text'>
                    Seleccione <strong>Anonima</strong> solo si no desea registrar su información personal de contacto. Recuerde que, al seleccionar esta opción,
                     usted acepta las condiciones conforme a lo establecido en el artículo 38 de la Ley 190 de 1995; artículo 69; de la 
                     Ley 734 de 2002 y artículo 81 de la Ley 962 de 2005.</p>
            </Form.Field>
            {identification.anonymous === '1'
            ?
            <>
                <Form.Field>
                    <h3 className='form-pqrsd__subtitle left'>Tipo de documento de identidad</h3>
                    <select
                        className="form-pqrsd__input ui fluid dropdown"
                        required={identification.anonymous === '1' ? true : false}
                        name='document_type'
                        onChange={getIdentification}
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
                    name='document'
                    type='text'
                    required = {identification.anonymous === '1' ? true : false }
                    onChange={getIdentification} 
                    ref={inputRef}
                    />
                </Form.Field>
            </>
            : null}
            <Form.Field className='form-pqrsd__button-container'>
                {identification.anonymous === '1'
                ? <Button className='button' type='submit' >
                    Buscar
                </Button>
                : <Button className='button' type='button' onClick={showPQRSD} >Siguiente</Button>}
            </Form.Field>
        </Form>
        </>
    )
}
