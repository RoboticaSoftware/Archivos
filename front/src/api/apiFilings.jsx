import {BASE_API} from "../Utils/Constants";


export async function getFilingTypeApi () {
    /**
     * Obtiene los tipos de solicitudes que se pueden hacer, en las PQRSD
     */
    const url = `${BASE_API}/api/filingstype/`
    const params = {
        method: "GET"
    };
    const response = await fetch(url,params);
    if (response.status ===200) {
        const result = await response.json();
        return result
    }

}



export async function createFilingApi (formData, setPQRSD){
    /**
     * Esta función me permite enviar una solicitud http para creaer un radicado 
     */
    if ('Filings_number' in formData) {
        delete formData['Filings_number'];
    }

    const url = `${BASE_API}/api/filings/`
    const params = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
    };

    const response = await fetch(url,params);
    if (response.status ===201) {
        const result = await response.json();
        setPQRSD((prev) => ({...prev, ...result}))
        return true
    }
    console.log(response)
    return false

}


export async function createFilingAddressApi (PQRSD, address){
    /**
     * Esta función me permite enviar una solicitud http para creaer la relación entre el radicafdo y la dirección
     */
    const {id} = PQRSD
    const data = {
        "FilingsAddress_filing":id,
        "FilingsAddress_address":address
    }
    const url = `${BASE_API}/api/filingsaddress/`
    const params = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    };

    const response = await fetch(url,params);
    if (response.status ===201) {
        /* nada */
    }

}

export async function createFilingUsersApi (PQRSD, PublicUser){
    /**
     * Esta función me permite enviar una solicitud http para creaer la relación entre el radicafdo y el usuario
     */
    const data = {
        "FilingsUsers_filing": PQRSD.id,
        "FilingsUsers_user":PublicUser.id
    }
    const url = `${BASE_API}/api/filingsusers/`
    const params = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    };

    const response = await fetch(url,params);
    if (response.status ===201) {
        /* nada */
    }

}

export async function getFilingsApi () {
    /**
     * Obtiene los PQRSD existentes
     */
    const url = `${BASE_API}/my-view/`
    const params = {
        method: "GET"
    };
    const response = await fetch(url,params);
    if (response.status ===200) {
        const result = await response.json();
        return result
    }

}