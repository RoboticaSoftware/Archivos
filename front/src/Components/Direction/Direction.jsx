import {useState, useEffect} from 'react'
import { Input, Dropdown } from 'semantic-ui-react'
import cities from 'cities.json';

import "./Direction.scss"
import data from "./data.json"

export function Direction({direction, setDirection}) {

    const [country, setCountry] = useState('CO');
    const [cities_, setCities] = useState(cities.filter(objeto => objeto.country === country));
    const {countries} = data

    const getDirection = (e) =>{
        setDirection({...direction,[e.target.name]:e.target.value})
    }

    const getCountry = (e, {name,value}) =>{
        setCountry(value)
    }


    useEffect(() => {
        setCities(
            cities.filter(objeto => objeto.country === country)
        );
        setDirection({...direction,['country']:countries[country]})
    }, [country])

    return (
        <>
            <div className='container_direction'>
                <div className='container_direction_inter'>
                    <div className='sub_item_direction'>
                        <h3 className='text_direction'>Pais</h3>
                        <Dropdown
                            className="input_text_direction ui fluid dropdown"
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
                    <div className='sub_item_direction'>  
                            <h3 className='text_direction'>Ciudad / Municipio</h3>
                            <select className="input_text_direction ui fluid dropdown"
                            required
                            name='city'
                            onChange={getDirection}
                            >
                                <option value=""></option>
                                {cities_.map((item, key) => (
                                    <option key={key} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                    </div>
                    <div className='sub_item_direction'>
                        <h3 className='text_direction'>Barrio</h3>
                        <Input 
                        className='input_text_direction'
                        icon='home' 
                        iconPosition='left' 
                        placeholder='Barrio' 
                        name='neighborhood'
                        type='text'
                        required
                        onChange={getDirection} 
                        //defaultValue={publicUser.public_user_numberTd}
                        />
                    </div>
                </div>
                <div className='container_direction_inter'>
                    <div className='sub_item_direction'>
                        <h3 className='text_direction'>Carrera</h3>
                        <Input 
                        className='input_text_direction'
                        icon='street view' 
                        iconPosition='left' 
                        placeholder='Carrera' 
                        name='race'
                        type='text'
                        required
                        onChange={getDirection} 
                        //defaultValue={publicUser.public_user_numberTd}
                        />
                    </div>
                    <div className='sub_item_direction'>
                        <h3 className='text_direction'>Calle</h3>
                        <Input 
                        className='input_text_direction'
                        icon='street view' 
                        iconPosition='left' 
                        placeholder='Calle' 
                        name='street'
                        type='text'
                        required
                        onChange={getDirection} 
                        //defaultValue={publicUser.public_user_numberTd}
                        />
                    </div>
                    <div className='sub_item_direction'>
                        <h3 className='text_direction_small'>Número</h3>
                        <div >
                            <Input 
                            className='input_text_direction_small'
                            icon='street view' 
                            iconPosition='left' 
                            placeholder='#' 
                            name='meanNumberStreet'
                            type='text'
                            required
                            onChange={getDirection} 
                            //defaultValue={publicUser.public_user_numberTd}
                            />
                            {" - "}
                            <Input 
                            className='input_text_direction_small'
                            icon='street view' 
                            iconPosition='left' 
                            placeholder='#' 
                            name='secondNumberStreet'
                            type='text'
                            required
                            onChange={getDirection} 
                            //defaultValue={publicUser.public_user_numberTd}
                            />
                        </div>
                    </div>
                    <div className='sub_item_direction'>
                        <h3 className='text_direction'>Complemento</h3>
                        <Input 
                        className='input_text_direction'
                        icon='street view' 
                        iconPosition='left' 
                        placeholder='Ej. Apto 301 To A' 
                        name='Complement'
                        type='text'
                        onChange={getDirection} 
                        //defaultValue={publicUser.public_user_numberTd}
                        />
                    </div>
                </div>                
            </div>
        </>
    )
}
