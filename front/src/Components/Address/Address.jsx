import {useState, useEffect} from 'react'
import { Input, Dropdown } from 'semantic-ui-react'
import cities from 'cities.json';

import "../FormPQRSD/FormPQRSD.css"
import "./Address.css"
import data from "./data.json"

export function Address({address, setAddress}) {
    const [country, setCountry] = useState('CO');
    const [cities_, setCities] = useState(cities.filter(objeto => objeto.country === country));
    const {countries} = data

    const getAddress = (e) =>{
        setAddress({...address,[e.target.name]:e.target.value})
    }

    const getCountry = (e, {name,value}) =>{
        setCountry(value)
    }


    useEffect(() => {
        setCities(
            cities.filter(objeto => objeto.country === country)
        );
        setAddress({...address,['country']:countries[country]})
    }, [country])

    return (
        <>
            <div className='grid-address'>
                <div className='grid-address__item'>
                    <h3>Pais</h3>
                    <Dropdown
                        className="grid-address__input ui fluid dropdown"
                        required
                        name="country"
                        defaultValue='CO'
                        onChange={getCountry}
                        options={
                            Object.keys(countries).map((item) => ({
                                key: item,
                                value: item,
                                text: (
                                <span>
                                    <i className={`${item.toLowerCase()} flag`}></i>
                                    {countries[item]}
                                </span>
                                ),
                            }))
                        }
                        selection
                    />
                </div>
                <div className='grid-address__item'>  
                        <h3>Ciudad / Municipio</h3>
                        <select className="grid-address__input ui fluid dropdown"
                        required
                        name='city'
                        onChange={getAddress}
                        >
                            <option value=""></option>
                            {cities_.map((item, key) => (
                                <option key={key} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                </div>
                <div className='grid-address__item'>
                    <h3>Barrio</h3>
                    <Input 
                    className='grid-address__input'
                    icon='home' 
                    iconPosition='left' 
                    placeholder='Barrio' 
                    name='neighborhood'
                    type='text'
                    required
                    onChange={getAddress} 
                    //defaultValue={publicUser.public_user_numberTd}
                    />
                </div>
                <div className='grid-address__item'>
                    <h3>Carrera</h3>
                    <Input 
                    className='grid-address__input'
                    icon='street view' 
                    iconPosition='left' 
                    placeholder='Carrera' 
                    name='race'
                    type='text'
                    required
                    onChange={getAddress} 
                    //defaultValue={publicUser.public_user_numberTd}
                    />
                </div>
                <div className='grid-address__item'>
                    <h3>Calle</h3>
                    <Input 
                    className='grid-address__input'
                    icon='street view' 
                    iconPosition='left' 
                    placeholder='Calle' 
                    name='street'
                    type='text'
                    required
                    onChange={getAddress} 
                    //defaultValue={publicUser.public_user_numberTd}
                    />
                </div>
                <div className='grid-address__item'>
                    <h3 className='text_address_small'>Número</h3>
                    <div >
                        <Input 
                        className='grid-address__input-small'
                        icon='street view' 
                        iconPosition='left' 
                        placeholder='#' 
                        name='meanNumberStreet'
                        type='text'
                        required
                        onChange={getAddress} 
                        //defaultValue={publicUser.public_user_numberTd}
                        />
                        {" - "}
                        <Input 
                        className='grid-address__input-small'
                        icon='street view' 
                        iconPosition='left' 
                        placeholder='#' 
                        name='secondNumberStreet'
                        type='text'
                        required
                        onChange={getAddress} 
                        //defaultValue={publicUser.public_user_numberTd}
                        />
                    </div>
                </div>
                <div className='grid-address__item'>
                    <h3>Complemento</h3>
                    <Input 
                    className='grid-address__input'
                    icon='street view' 
                    iconPosition='left' 
                    placeholder='Ej. Apto 301 To A' 
                    name='Complement'
                    type='text'
                    onChange={getAddress} 
                    //defaultValue={publicUser.public_user_numberTd}
                    />
                </div>                
            </div>
            
        </>
    )
}
