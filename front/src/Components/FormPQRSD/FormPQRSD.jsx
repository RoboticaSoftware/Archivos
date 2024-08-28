import React, {  useState, useEffect} from 'react'
import { Button, Form, TextArea, Message, Input  } from 'semantic-ui-react'
import {SearchPublicUser} from '../SearchPublicUser'
import {FormPublicUsers} from '../FormPublicUsers'
import {Direction} from "../Direction"
import {PP} from "../PP";
import {getRecordsTypeApi, createRecordsApi } from '../../api/apiRecords'
import {updatePublicUser} from "../../api/apiPublicUsers"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "./FormPQRSD.scss"

export function FormPQRSD() {
    
    /**Estados */

    const [visible, setVisible] = useState(false);
    const [sendAddress, setSendAddress] = useState(false);
    const [sendUser, setSendUser] = useState(false);
    const [direction, setDirection] = useState({});
    const [documentTypes, setDocumentTypes] = useState([]);
    const [recordsTypes, setRecordsTypes] = useState([]);
    const [showMessage, setShowMessage ] = useState(false);
    const [showPQRSD, setShowPQRSD ] = useState(false);

    const [PQRSD, setPQRSD] = useState({
        'id' : null,
        'r_receive_at_home': false
    });

    const [publicUser, setPublicUser] = useState(
        {
            'id':null,
            'pu_td' : "",
            'pu_numberTd' : "",
            'pu_name' : "",
            'pu_email' : "",
            'pu_phone' : null ,
            'enable' : false
        }
    );

    useEffect(() => {
        const fetchData = async () => {
              const data = await getRecordsTypeApi();
              setRecordsTypes(data);
        };
        fetchData();
    }, [])

    useEffect(() => {
        setPQRSD({
            'id' : null,
            'r_receive_at_home': false,
            'r_user':publicUser.id
        });
        setDirection({})
        setVisible(false)
        setSendUser(false)
        setSendAddress(false)

    }, [showPQRSD])


    useEffect(() => {
        if(visible){
            if(sendAddress){
                const Full_adress = `${direction.country},${direction.city}: Barrio:${direction.neighborhood}  Cra: ${direction.race} Calle: ${direction.street} # ${direction.meanNumberStreet}-${direction.secondNumberStreet}  ${direction.Complement?direction.Complement:''}`;
                const user = {...publicUser, 'pu_address': Full_adress}
                updatePublicUser(user, setShowMessage,setPublicUser)
            }
            
        }
        
    }, [visible])
    /**----------------------------------------- */
    const notify = () => toast.success("Success Notification!");

    const getPQRSD = (e) => {
        const { name, value } = e.target
        setPQRSD({...PQRSD,[e.target.name]:e.target.value})
    }

    const sendRecord = () => {
        const fn = async() =>{
            const result = await createRecordsApi(PQRSD, setPQRSD);
            if (result){
                setVisible(true);
            }else {
                setVisible(false);
            }

            if (PQRSD.r_receive_at_home){
                setSendAddress(true);
            }else{
                setSendAddress(false);
            }

        };
        fn();
        
        
    }

    const hiddenAlert = (e) => {
        setShowPQRSD(false);
        setVisible(false);
    }

    

    return (
        <>
            <h2 className='title_general'>Formulario de PQRSD</h2>
            <p className='title_general'>
                (Peticiones, Quejas, Reclamos, Sugerencias, Solicitud de información pública y Denuncias)
            </p>
            <br />
            {/** Formulario inicial */}
            <SearchPublicUser setShowPQRSD = {setShowPQRSD} setPublicUser = {setPublicUser} documentTypes = {documentTypes} setDocumentTypes = {setDocumentTypes} />
            {/**............................................................................................. */}

            {/** Formulario del usuario */}
            {publicUser.enable 
            ?
            <FormPublicUsers publicUser = {publicUser} setPublicUser = {setPublicUser} 
            setShowMessage = {setShowMessage} showMessage = {showMessage}
            setShowPQRSD = {setShowPQRSD} documentTypes = {documentTypes}
            />
            : null
            }

            {/** Formulario de la PQRS */}
            { showPQRSD
            ? 
            <>
            <Form className='form_border' onSubmit={sendRecord}>
                <Form.Field >   
                    <h3 className='subtitle_general left'>Tipo de petición</h3>
                    <select className="text_label ui fluid dropdown"
                    required
                    name='r_rt'
                    onChange={getPQRSD}
                    >
                        <option value=""></option>
                        {recordsTypes.map((item) => (
                            <option key={`rt_${item.id}`} value={item.id}>
                                {item.rt_description}
                            </option>
                        ))}
                    </select>
                </Form.Field>
                <Form.Field >
                    <h3 className='subtitle_general left'>Descripción de la Solicitud</h3>
                    <TextArea 
                    className='text_label'
                    placeholder='Ingrese el detalle de su solicitud (máximo 255 caracteres)' 
                    name='r_description'
                    type='text'
                    maxLength={255}
                    onChange={getPQRSD}
                    required  
                  />
                </Form.Field>
                <Form.Field className='ui checkbox'>
                    <br />
                    <input type='checkbox' id='informacionResidencia' name='r_receive_at_home' onChange={getPQRSD} />
                    <label htmlFor='informacionResidencia' className='text_label'>Recibir información en el lugar de residencia</label>
                    <p className='content_text_anonymous'>
                        Al seleccionar esta opción usted acepta que la información solicitada sea enviada a su lugar de residencia, 
                        esto puede generar costos adicionales de logistica y transporte.

                    </p>
                    <br />
                </Form.Field>
                {
                    PQRSD.r_receive_at_home
                    ? <>
                    <Direction direction = {direction} setDirection = {setDirection} />
                    <br />
                    </>
                    : null
                }
                {/** 
                <Form.Field>
                    <Input 
                        className='input_login'
                        icon='id card' 
                        iconPosition='left' 
                        placeholder='Agregar archvios' 
                        name='Filings_attached_file'
                        type='file'
                        onChange={getPQRSDFile} 
                    />
                </Form.Field>
                */}

                <Form.Field className='ui checkbox'>
                    <input type='checkbox' required id='aceptarTerminos'/>
                    <label htmlFor="aceptarTerminos" className='text_label'>Aceptar terminos y condiciones</label>
                    <br />
                    <p className='content_text_anonymous'>
                        Al hacer clic el botón enviar, usted acepta la remisión de la PQRSD a 
                        la entidad Archivos del estado.
                         Sus datos serán recolectados y tratados conforme con la Política de Tratamiento de Datos. 
                         En la opción consulta de PQRSD podrá verificar el estado de la respuesta.
                         <br />
                         En caso que la solicitud de información sea de naturaleza de identidad reservada, 
                         deberá efectuar el respectivo trámite ante la Procuraduría General de la Nación, haciendo clic en el siguiente link: &nbsp;
                        <a href='https://www.procuraduria.gov.co/PQRSDF/Pages/solicitud_informacion_identificacion_reservada.aspx'>
                            Click aqui</a>
                    </p>
                </Form.Field>
                {visible
                ? <Message
                    positive  // Puedes usar "info", "warning", o "negative" según el tipo de alerta
                    hidden={!visible}
                    onDismiss={hiddenAlert}
                    className='message_general'>
                    <Message.Header className='text_label'>Se ha generado el radicado número:  {PQRSD.r_number}</Message.Header>
                    <p className='content_text_anonymous'>
                    Si su solicitud se encuentra bajo carácter <strong>anónimo</strong>, utilice este número para verificar 
                    el estado de su solicitud a través del siguiente enlace <a href="">clic aquí.</a> En caso contrario, 
                    la información detallada sobre su solicitud será enviada al correo electrónico registrado en la plataforma.
                    </p>
                    {/* Botón de "Aceptar" */}
                    <Button positive onClick={hiddenAlert} className = 'botton_general' type='button'>Aceptar</Button>
                </Message>
                : <Form.Field>
                    <br />
                    <Button type = 'submit' className = 'botton_general' >Enviar</Button>
                </Form.Field>
                }
                
            </Form>
            
            </>
            : null

            }
            <ToastContainer />
            {/** 
            <PP />
            <Direction />
            */}
            
            

        </>
    )
}
