import { Cover } from "../../../Components"
import { Grid } from 'semantic-ui-react'

import "./Servicios.scss"

export function Servicios() {
  const dato = [
    {
      img:"./DB/Services/services/img1.jpg",
      title:"Desarrollo de software",
      items: [
        "Análisis y diseño de sistemas de la información.",
        "Enterpricse content managment ECM",
        "Bussiness process managment BPM",
        "Enterprise resource managment ERM",
        "Ventanilla única de correspondencia"
      ]
    },
    {
      img:"./DB/Services/services/img2.JPG",
      title:"Educación y aprendizaje",
      items: [
        "Capacitaciones",
        "Estrategias digitales",
        "Gestión ambiental de la información",
        "Plataformas de aprendizajes virtual",
        "Educación no formal en procesamiento técnico",
        "Plataformas digitales de gestión de la información"
      ]
    },
    {
      img:"./DB/Services/services/img3.JPG",
      title:"Consultoría especializada",
      items: [
        "Estrategias digitales",
        "Análisis de información",
        "Arquitectura empresarial",
        "Uso de tecnologías de la información",
        "Interoperabilidad de herramientas tecnologicas",
        "Aplicación de la normatividad archivística vigente",
        "Parametrización de aspectos técnicos de archivos fisicos y digitales"
      ]
    },
    {
      img:"./DB/Services/services/img6.png",
      title:"Elaboración de instrumentos archivísticos",
      items: [
        "Estrategias digitales",
        "Análisis de información",
        "Arquitectura empresarial",
        "Uso de tecnologías de la información",
        "Interoperabilidad de herramientas tecnologicas",
        "Aplicación de la normatividad archivística vigente",
        "Parametrización de aspectos técnicos de archivos fisicos y digitales"
      ]
    },
    {
      img:"./DB/Services/services/img3.JPG",
      title:"Consultoría especializada",
      items: [
        "Estrategias digitales",
        "Análisis de información",
        "Arquitectura empresarial",
        "Uso de tecnologías de la información",
        "Interoperabilidad de herramientas tecnologicas",
        "Aplicación de la normatividad archivística vigente",
        "Parametrización de aspectos técnicos de archivos fisicos y digitales"
      ]
    },
    {
      img:"./DB/Services/services/img1.jpg",
      title:"Desarrollo de software",
      items: [
        "Análisis y diseño de sistemas de la información.",
        "Enterpricse content managment ECM",
        "Bussiness process managment BPM",
        "Enterprise resource managment ERM",
        "Ventanilla única de correspondencia"
      ]
    }
  ]

  return (
    <>
        <Cover  title="SERVICIOS"/>
        {/* Gallery */}
        <h1 className="title_services">GESTIÓN DE LA INFORMACIÓN</h1>
        <div className='container_services'>
          {/**Aca comienza la galería de las imagenes para mostrar los servicios */}
          <Grid className='grid_services'>
          <Grid.Row columns = {3} className='item_services'> 
          {
              dato.map((item,key)=>(
                  <Grid.Column   key={"C"+String(key)} >
                    <div className="ui link cards">
                      <div className="card">
                        <div className="image">
                          <img key={key} className='picture_services' src={item.img}  />
                        </div>
                        <div className="content">
                          <div className="header">{item.title}</div>
                          <div className="description">
                          <ul>
                            {
                              item.items.map((item_, k) =>(
                                <li className="items_services" key={k}>{item_}</li>
                              )
                            )}
                          </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid.Column>
              ))
          }
          </Grid.Row>
          </Grid>
        </div>
    </>
  )
}
