import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import "./Services.scss"


export function Services() {
    const services = [
        {
            img:"./DB/Services/ARCHIVO.jpg",
            title:"Administración Integral de Archivos",
            content: "Texto prueba"
        },
        {
            img:"./DB/Services/IMG_0943.JPG",
            title:"Digitalización",
            content: "Texto prueba"
        },
        {
            img:"./DB/Services/custodía.png",
            title:"Custodia y Logística de Archivos",
            content: "Texto prueba"
        },
        {
            img:"./DB/Services/instrumentos.png",
            title:"Elaboración de Instrumentos Archivisticos",
            content: "Texto prueba"
        },
        {
            img:"./DB/Services/org_archivo.jpg",
            title:"Organización de Archivos",
            content: "Texto prueba"
        },
        {
            img:"./DB/Services/digital.jpg",
            title:"Transformación Digital",
            content: "Texto prueba"
        },
        {
            img:"./DB/Services/herramientas.jpg",
            title:"Herramientas de Software",
            content: "Texto prueba"
        },
        {
            img:"./DB/Services/gobierno.jpg",
            title:"Gobierno de la Información",
            content: "Texto prueba"
        },
        {
            img:"./DB/Services/IMG_0772.JPG",
            title:"Consultoria y Auditoria",
            content: "Texto prueba"
        },
    ];

    return (
        <>
            <div className='container_general'>
                <div className='title_general'>
                    <h1 className='title_general'>SERVICIOS</h1>
                </div>
                <div className='subtitle_general'>
                    <h1><strong>Soluciones en Tecnologías de la Información</strong></h1>
                </div>
                <div className='Content_home_services'>
                    <p className='text_general'>
                    Con una trayectoria de éxito y una amplia experiencia, junto a un personal altamente especializado y
                    una amplia disposición e infraestructura, garantizamos los mejores resultados que le permitirán ahorrar tiempo y dinero.
                    </p>
                </div>
                {/**Aca comienza la galería de las imagenes para mostrar los servicios */}
                <Grid className='Gallery_home_services'>
                <Grid.Row columns = {4} className='item_gallery_home_services'> 
                {
                    services.map((item,key)=>(
                        
                            <Grid.Column className='container_picture' key={"C"+String(key)} >
                                <div className='background_picture_home_services'>
                                    <img key={key} className='picture_home_services' src={item.img}/>
                                    <figcaption className='overlay_title_services'>{item.title}</figcaption>
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
