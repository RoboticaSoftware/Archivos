import {BASE_API} from "../Utils/Constants";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (status) =>{
    if (status ===200){
        toast.success("¡Usuario Encontrado!");
    }else {
        toast.info("Usuario no registrado, por favor ingrese sus datos")
    }
};


export async function getPuplicUsersApi (formData) {
    /**
     * Esta función hace la petición fetch y devuelve la información del usuario 
     * si no encuentra el usuario devolverá un error 404 
     */
    const url = `${BASE_API}/api/publicusers/(${formData.document_type},${formData.document})/`
    const params = {
        method: "GET"
    };
    const response = await fetch(url,params);
    if (response.status ===200) {
        const result = await response.json();
        notify(response.status);
        return {...result, 'enable' : true}
    }else{
        const result = await response.json();
        notify(response.status);
        return {
            'id' : null,
            'public_user_td' : formData.document_type,
            'public_user_numberTd' : formData.document,
            'public_user_name' : "",
            'public_user_email' : "",
            'public_user_phone' : null,
            'enable' : true 
        }
    }
}


export async function createPublicUser (formData, setShowMessage,setPublicUser){
    /**
     * Esta función me permite enviar una solicitud http para creaer un usuario público 
     */
    const url = `${BASE_API}/api/publicusers/`
    console.log(url)
    const params = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
    };

    const response = await fetch(url,params);
    if (response.status ===200) {
        setShowMessage(true);
        const result = await response.json();
        setPublicUser((prev) => ({...prev, ...result}))
        toast.success("¡Usuario registrado con exito!", {
            icon: '👏',
          });
        return {
            color :"green",
            title: 'Exitoso',
            content : 'Registro creado con exito'
        }
    }else if (response.status ===400){
        setShowMessage(true);
        let alertConfig = {};
        const result = await response.json();
        if (result.public_user_email) {
            alertConfig = {
                color: "red",  // Color verde para indicar éxito
                title: 'Error',
                content: 'Ya existe una cuenta con este correo electrónico, por favor verifique sus datos'
            };
        } else {
            alertConfig = {
                color: "red",
                title: 'Error',
                content: 'Ya existe un usuario con este tipo y número de documento de identificación, por favor verifique sus datos'
            };
        }
        
        return alertConfig;
        
        
    }

}

export async function updatePublicUser (formData, setShowMessage,setPublicUser){
    /**
     * Esta función me permite enviar una solicitud http para actualizar un usuario público con su id
     */
    const url = `${BASE_API}/api/publicusers/${formData.id}/`
    const params = {
        method: "PATCH",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
    };

    const response = await fetch(url,params);
    if (response.status ===200) {
        setShowMessage(true);
        const result = await response.json();
        setPublicUser((prev) => ({...prev, ...result}))
        toast.success("¡Usuario actualizado con exito!", {
            icon: '👏',
          });
        return {
            color : "green",
            title: 'Exitoso',
            content : 'Registro actualizado con exito'
        }      
    }

}



export async function getDocumentTypeApi () {
    /**
     * Esta función hace la petición fetch a mi backend /api/publicusers/ y devuelve la información del usuario 
     * si no encuentra el usuario devolverá un error 404 
     */
    const url = `${BASE_API}/api/documenttype/`
    const params = {
        method: "GET"
    };
    const response = await fetch(url,params);
    if (response.status ===200) {
        const result = await response.json();
        console.log(result)
        return result
    }

}
