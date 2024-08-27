import { Cover, Us,Map, RightPost, LeftPost, GallerySmall, Contact, GalleryPhotos, CarrosselLetters } from "../../../Components"
import "./Nosotros.scss"

export function Nosotros() {
const dato = {
  title: "¿Quienes somos?",
  message: 
  "Archivos del Estado & Tecnologías de la Información S.A.S, es una empresa de naturaleza mixta de nacionalidad colombiana con domicilio en la ciudad de Bogotá, cuyo objeto social se sustenta en la gestión de información a través de la administración de archivos, la gestión de documentos y la estructuración de soluciones en tecnologías de la información."
}

const mision = {
  title: "MISIÓN",
  message: 
  "Somos una empresa que se encarga de brindar la propuesta de valor más innovadora en soluciones integrales de Gestión Archivística y Documental, TI y en el uso de las Tecnologías de la Información y las Comunicaciones (TIC), especializadas en las necesidades de sus clientes y articuladas entre sí, obteniendo el mayor retorno a sus distintos grupos de interés bajo un compromiso con el medio ambiente.",
  img: "./DB/Nosotros/mision.JPG"
}

const vision = {
  title: "VISIÓN",
  message: 
  "Ser en el año 2022 el proveedor líder de servicios de Gestión Archivística y Documental, TI y en el uso de las Tecnologías de la Información y las Comunicaciones (TIC) en el sector público y privado, brindando servicios de alta calidad que estén a la vanguardia del mercado.",
  img: "./DB/Nosotros/vision.JPG"
}

const objetivo = {
  title: "NUESTRO OBJETIVO",
  message: 
  "Aumentar la participación en el sector público, con soluciones estratégicas en Gestión Documental, Administración de archivos y Gobierno de la información con el uso masivo de las TI, trazando políticas en ventas y operación que aseguren la sostenibilidad en el tiempo.",
  img: "./DB/Nosotros/objetivo.jpg"
}

const galeria = [
  {
  title: "Nuestros Aliados",
  message: 
  "Aumentar la participación en el sector público, con soluciones estratégicas en Gestión Documental, Administración de archivos y Gobierno de la información con el uso masivo de las TI, trazando políticas en ventas y operación que aseguren la sostenibilidad en el tiempo.",
  img: "./DB/Nosotros/aliados.jpg"
  },
  {
    title: "Nuestros Aliados",
    message: 
    "Aumentar la participación en el sector público, con soluciones estratégicas en Gestión Documental, Administración de archivos y Gobierno de la información con el uso masivo de las TI, trazando políticas en ventas y operación que aseguren la sostenibilidad en el tiempo.",
    img: "./DB/Nosotros/a2.png"
  },
  {
    title: "Nuestros Aliados",
    message: 
    "Aumentar la participación en el sector público, con soluciones estratégicas en Gestión Documental, Administración de archivos y Gobierno de la información con el uso masivo de las TI, trazando políticas en ventas y operación que aseguren la sostenibilidad en el tiempo.",
    img: "./DB/Nosotros/mc.jpg"
  }
]

const experience = {
  title: "Experiencia",
  images: [
    {
        img:"./DB/Experiencia/Screenshot_1.png",
        title:"Administración Integral de Archivos",
        link: "https://www.gov.co/"
    },
    {
        img:"./DB/Experiencia/Screenshot_2.png",
        title:"Digitalización",
        link: "https://www.gov.co/"
    },
    {
        img:"./DB/Experiencia/Screenshot_3.png",
        title:"Custodia y Logística de Archivos",
        link: "https://www.gov.co/"
    },
    {
        img:"./DB/Experiencia/Screenshot_4.png",
        title:"Elaboración de Instrumentos Archivisticos",
        link: "https://www.gov.co/"
    },
    {
        img:"./DB/Experiencia/Screenshot_5.png",
        title:"Organización de Archivos",
        link: "https://www.gov.co/"
    },
    {
        img:"./DB/Experiencia/Screenshot_6.png",
        title:"Transformación Digital",
        link: "https://www.gov.co/"
    },
    {
        img:"./DB/Experiencia/Screenshot_7.png",
        title:"Herramientas de Software",
        link: "https://www.gov.co/"
    },
    {
        img:"./DB/Experiencia/Screenshot_8.png",
        title:"Gobierno de la Información",
        link: "https://www.gov.co/"
    },
    {
        img:"./DB/Experiencia/Screenshot_9.png",
        title:"Consultoria y Auditoria",
        link: "https://www.gov.co/"
    },
    {
      img:"./DB/Experiencia/Screenshot_10.png",
      title:"Administración Integral de Archivos",
      link: "https://www.gov.co/"
  },
  {
      img:"./DB/Experiencia/Screenshot_11.png",
      title:"Digitalización",
      link: "https://www.gov.co/"
  },
  {
      img:"./DB/Experiencia/Screenshot_12.png",
      title:"Custodia y Logística de Archivos",
      link: "https://www.gov.co/"
  },
  {
      img:"./DB/Experiencia/Screenshot_13.png",
      title:"Elaboración de Instrumentos Archivisticos",
      link: "https://www.gov.co/"
  },
  {
      img:"./DB/Experiencia/Screenshot_14.png",
      title:"Organización de Archivos",
      link: "https://www.gov.co/"
  },
  {
      img:"./DB/Experiencia/Screenshot_15.png",
      title:"Transformación Digital",
      link: "https://www.gov.co/"
  },
  {
      img:"./DB/Experiencia/Screenshot_16.png",
      title:"Herramientas de Software",
      link: "https://www.gov.co/"
  },
  {
      img:"./DB/Experiencia/Screenshot_17.png",
      title:"Gobierno de la Información",
      link: "https://www.gov.co/"
  },
  {
      img:"./DB/Experiencia/Screenshot_18.png",
      title:"Consultoria y Auditoria",
      link: "https://www.gov.co/"
  },
  {
    img:"./DB/Experiencia/Screenshot_19.png",
    title:"Gobierno de la Información",
    link: "https://www.gov.co/"
  },
  {
      img:"./DB/Experiencia/Screenshot_20.png",
      title:"Consultoria y Auditoria",
      link: "https://www.gov.co/"
  }
]
}

  return (
    <>
        <Cover  title="NOSOTROS"/>
        <Us dato={dato}/>
        <Map />
        <RightPost dato={mision} />
        <LeftPost dato={vision} />
        <RightPost dato={objetivo} />
        <CarrosselLetters dato={galeria} />
        <Contact />
        <GalleryPhotos dato={experience} />
    </>
  )
}
