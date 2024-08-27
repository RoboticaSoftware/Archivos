import React from 'react'
import {Gallery, 
        Us,
        Services,
        Contact, 
        Carrossel} from "../../../Components"
import "./Home.scss"

export function Home() {
  const dato = {
    title: "Brindamos las soluciones adecuadas para su empresa",
    message: 
    "Somos una empresa de carácter mixta de nacionalidad colombiana con domicilio en la ciudad de Bogotá, cuyo objetivo social se sustenta en la gestión de la información a través de la administración de archivos, la gestión de documentos  y la estructuración de soluciones en tecnologías de la información."
  }

  const imgs = [
    {
      'img':"./DB/img1.png"
    },
    {
      'img':"./DB/img2.JPG"
    },
    {
      'img':"./DB/img3.JPG"
    },
    {
      'img':"./DB/Services/services/img1.jpg"
    },
    {
      'img':"./DB/Services/services/img7.jpg"
    },
    {
      'img':"./DB/Services/services/img3.JPG"
    },
    {
      'img':"./DB/Services/services/img4.JPG"
    },
    {
      'img':"./DB/Services/services/img8.JPG"
    }
  ]

  return (
    <>
        <Carrossel dato={imgs} />
        <Us dato={dato}/>
        <Services />
        <Contact />
        
    </>
  )
}
