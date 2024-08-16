import {useState} from 'react'
import {Cover, TablePQRSD} from "../../../Components"
import "./Contacto.scss"
import { FormPQRSD } from '../../../Components'

export function Contacto() {
  const [subAtention, setSubAtention] = useState(1)

  const changeStateAtention = (e) => {
    setSubAtention(e)
  }

  return (
    <>
        <Cover  title="ATENCIÓN Y SERVICIOS A LA CIUDADANÍA"/>
        <div className="container_atention_services">
          <div className=" ui secondary pointing menu">
            <a className= { subAtention===1?"item active":"item"} onClick={() => changeStateAtention(1)} >
              Trámites, otros procesos administrativos y consulta de acceso a la información pública 
            </a>
            <a className={ subAtention===2?"item active":"item"}  onClick={() => changeStateAtention(2)}>
              Canales de atención y pida una cita 
            </a>
            <a className={ subAtention===3?"item active":"item"}  onClick={() => changeStateAtention(3)}>
              PQRSD
            </a>
          </div>
          <div className="ui segment">
            {
              subAtention===1
              ? <TablePQRSD />
              :subAtention===2
                ? null
                : <FormPQRSD />
            }
          </div>
        </div>
        
    </>
  )
}
