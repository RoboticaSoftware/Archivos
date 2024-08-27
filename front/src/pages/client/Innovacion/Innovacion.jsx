import {Cover, ListText, ListItemsH} from "../../../Components"

import "./Innovacion.scss"

export function Innovacion() {
  const items = [
    {
      'text':'Escaneamos libros de color en formato hasta A1 600dpi. Se adaptan a documentos grandes y engomados frágiles usando la cuna V para escaneo aún más delicado.'
    },
    {
      'text':'Escaneamos planos hasta de 1.270mm de ancho, largo casi ilimitado con una resolución de 1.200 dpi camara CCD escaneo a color, escala de gris, B&N Multipagina. PDF, TIF, JGEP, PNM, PNM, PNG, BMP'
    },
    {
      'text':'La infraestructura de hardware y software nos permite digitalizar rápidamente grandes cantidades de planos y libros de gran tamaño, encuadernados sin necesidad de desempaste.'
    }
  ]

  const dato = [
    {
      'title':'Transferencia de información desde medios magnéticos',
      'img':'./DB/tecnología/IMG1.JPG',
      'text':'Recuperación de datos desde cualquier medio magnético a formatos de última generación garantizando la seguridad e integración de la información '
    },
    {
      'title':'Digitalización desde medios análogicos',
      'img':'./DB/tecnología/IMG2.JPG',
      'text':'Recuperación de datos desde cualquier medio magnético a formatos de última generación garantizando la seguridad e integración de la información '
    },
    {
      'title':'Digitalización de planos y libros de gran formato',
      'img':'./DB/tecnología/IMG3.JPG',
      'text':'Recuperación de datos desde cualquier medio magnético a formatos de última generación garantizando la seguridad e integración de la información '
    },
    {
      'title':'Digitalización de planos y libros de gran formato',
      'img':'./DB/tecnología/IMG4.png',
      'text':'Recuperación de datos desde cualquier medio magnético a formatos de última generación garantizando la seguridad e integración de la información '
    }
  ]

  return (
    <>
        <Cover title="INNOVACIÓN" />
        <ListText dato={items}/>
        <ListItemsH dato={dato}/>
    </>
  )
}
