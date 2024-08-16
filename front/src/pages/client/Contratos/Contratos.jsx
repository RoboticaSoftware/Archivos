import { useState } from "react";
import {Cover} from "../../../Components"
import { ImFilePdf } from "react-icons/im";
import "./Contratos.scss";

export function Contratos() {
  const [detail, setDetail] = useState('')

  const  changeState = (key) => {
    setDetail(key)
  }

  const  resetState = () => {
    setDetail('')
  }

  const downloadPDF = () => {
    alert('descargar')
  }


  const items = [
    {
      title:'SPO-003 18/10/2019',
      pagesNumber: 5,
      viewsNumber: 6,
      details: 'Solicitud Pública de Ofertas del 18 de Octubre de 2019'
    },
    {
      title:'SPO-003 18/10/2019',
      pagesNumber: 5,
      viewsNumber: 6,
      details: 'Solicitud Pública de Ofertas del 18 de Octubre de 2019'
    },
    {
      title:'SPO-003 18/10/2019',
      pagesNumber: 5,
      viewsNumber: 6,
      details: 'Solicitud Pública de Ofertas del 18 de Octubre de 2019'
    }
  ]

  const details = [
    {
      name: 'SPO-001-2019',
      description: 'Solicitud Pública de Ofertas del 16 de Mayo de 2019',
      pdf: 'si'
    },
    {
      name: 'Aclaraciones',
      description: 'No se hicieron aclaraciones a la solicitud pública No. 001 de 2019',
      pdf: ''
    },
    {
      name: 'Acta de cierre y apertura de ofertas',
      description: 'Acta de cierre y apertura de ofertas, proceso solicitud pública No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Presentación de las ofertas',
      description: 'Propuesta Big Data',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    },
    {
      name: 'Evaluación de ofertas',
      description: 'Evaluación de ofertas No.001 de 2019',
      pdf: 'si'
    }

  ]
  return (
    <>
         <Cover  title="CONTRATACIÓN"/>
         <div className='container_general'>
            {/* Buscador */}
            <div className="container_seacher_transparency ui search">
              <div className="seacher_transparency ui icon input">
                <input className="prompt" type="text" placeholder="Buscar" />
                <i className="search icon"></i>
              </div>
            </div>
            {/*contenido */}
            <div className="content_contracts">
              <div className="container_lateral_menu_bar">

              </div>
              <div className="container_content_contracts">
                  {items.map((item, key) => (
                    <div className="container_item_contracts" key={key}>
                      <div className="container_title_contracts">
                        <div className="container_title_icon_contracts">
                          <i className="co flag" ></i>
                        </div>
                        <div className="container_title_name_contracts">
                          <p><strong>{item.title}</strong></p>
                        </div>
                        <div className="container_title_pages_contracts">
                          <p><strong>Número de páginas</strong></p>
                          <p>{item.pagesNumber}</p>
                        </div>
                        <div className="container_title_views_contracts">
                          <p><strong>Número de visitas</strong></p>
                          <p>{item.viewsNumber}</p>
                        </div>
                      </div>
                      <div className="container_details_contracts">
                        <div className="container_details_summary_contracts">
                          <p><i>detalle niveles</i></p>
                          <p>{item.details}</p>
                        </div>
                        <div className="container_details_icon_contracts">
                          {detail === 'b'+String(key)
                          ? <button key={'b'+String(key)} onClick={resetState} className=" botton_general ui primary basic button"> Ocultar</button>
                          : <button key={'b'+String(key)} onClick={() => changeState('b'+String(key))} className="botton_general ui primary basic button"> Ver Detalle</button>
                          }
                        </div>
                      </div>
                      {detail === 'b'+String(key)
                      ?
                      <div className="container_details_contracts_items ui grid">
                        {/*Cabecera */}
                          <div className="row_header_contracts_items row" key={'cabecera'}>
                            <div className="four wide column">
                              <p><strong>Nombre</strong></p>
                            </div>
                            <div className="ten wide column">
                              <p><strong>Descripción</strong></p>
                            </div>
                            <div className="two wide column">
                              <p><strong>Ver Detalle</strong></p>
                            </div>
                          </div>
                        {details.map((itemdetails, keydetail) => (
                          <div className="row_contracts_items row" key={keydetail}>
                            <div className="icon_item four wide column">
                              <p>{itemdetails.name}</p>
                            </div>
                            <div className="text_column ten wide column">
                              <p>{itemdetails.description}</p>
                            </div>
                            <div className="button_column two wide column">
                            {itemdetails.pdf
                            ? <ImFilePdf size={30} onClick={downloadPDF}/>
                            : null
                            }
                                
                            </div>
                          </div>
                        )
                        )
                        }
                      </div>
                      : null
                      } 
                    </div>
                  )
                  )
                  }
              </div>
            </div>
         </div>
    </>
  )
}
