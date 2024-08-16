import React, { useEffect, useState } from 'react'

import "./ListItems.scss"

export function ListItems() {
  const [itemKey, setItemKey] = useState ('')

  const  changeState = (key) => {
    setItemKey(key)
  }

  const  resetState = (key) => {
    setItemKey('')
  }
  const dato = [
    {
      title:"Información de la entidad",
      items:[
        {
          title: "Misión, Visión",
          link:"/nosotros"
        },
        {
          title: "Funciones y deberes",
          link:"/nosotros"
        },
        {
          title: "Estructura orgánica - Organigrama",
          link:"/nosotros"
        },
        {
          title: "Ubicación y horario de atención",
          link:"/nosotros"
        },
        {
          title: "Directorio institucional",
          link:"/nosotros"
        },
        {
          title: "Directorio de servidores públicos",
          link:"/nosotros"
        },
        {
          title: "Directorio de entidades",
          link:"/nosotros"
        },
        {
          title: "Directorio de agremiaciones o asociaciones",
          link:"/nosotros"
        },
        {
          title: "Servicio al público, normas, formularios y protocolos de atención",
          link:"/nosotros"
        },
        {
          title: "Procedimientos para la toma de decisiones",
          link:"/nosotros"
        },
        {
          title: "Mecanismos de presentación directa de solicitueds, quejas y reclamos",
          link:"/nosotros"
        },
        {
          title: "Información sobre decisiones que puede afectar al público",
          link:"/nosotros"
        },
        {
          title: "Calendario de actividades y eventos",
          link:"/nosotros"
        },
        {
          title: "Entes y autoridades que lo vigilan",
          link:"/nosotros"
        },
        {
          title: "Publicación de hojas de vida",
          link:"/nosotros"
        }

      ]
    },
    {
      title:"Normativa",
      items:[
        {
          title: "Normativa de la entidad o autoridad",
          link:"/nosotros"
        },
        {
          title: "Búsqueda de normas",
          link:"/nosotros"
        },
        {
          title: "Proyectos de normas para comentarios",
          link:"/nosotros"
        }
      ]
    },
    {
      title:"Contratación",
      items:[
        {
          title: "Plan anual de adquisiciones",
          link:"/nosotros"
        },
        {
          title: "Publicación de la información contractual",
          link:"/nosotros"
        },
        {
          title: "Publicación de la ejecución de los contratos",
          link:"/nosotros"
        },
        {
          title: "Manual de contratación, adquisición y/o compras",
          link:"/nosotros"
        }
      ]
    },
    {
      title:"Planeación, Presupuesto e Informes",
      items:[
        {
          title: "Presupuesto general de ingresos, gastos e inversión",
          link:"/nosotros"
        },
        {
          title: "Ejecución presupuestal",
          link:"/nosotros"
        },
        {
          title: "Plan de Acción",
          link:"/nosotros"
        },
        {
          title: "Proyectos de Inversión",
          link:"/nosotros"
        },
        {
          title: "Informes de empalme",
          link:"/nosotros"
        },
        {
          title: "Información pública y/o relevante",
          link:"/nosotros"
        },
        {
          title: "Informes de gestión, evaluación y auditoría",
          link:"/nosotros"
        },
        {
          title: "Informes de la Oficina de Control Interno",
          link:"/nosotros"
        },
        {
          title: "Informe sobre Defensa Pública y Prevención del Daño Antijurídico",
          link:"/nosotros"
        },
        {
          title: "Informes trimestrales sobre acceso a información, quejas y reclamos",
          link:"/nosotros"
        }
      ]
    },
    {
      title:"Trámites",
      items:[
        {
          title: "Trámites (normativa, proceso, costos y formatos o formularios)",
          link:"/nosotros"
        },
        {
          title: "Trámites y servicios portal GOV.CO",
          link:"https://www.gov.co/ficha-tramites-y-servicios/"
        }
      ]
    },
    {
      title:"Participa",
      items:[
        {
          title: "No sé",
          link:"/nosotros"
        }
      ]
    },
    {
      title:"Datos abiertos",
      items:[
        {
          title: "Instrumentos de gestión de la información y gestión documental",
          link:"/nosotros"
        },
        {
          title: "Datos abiertos portal GOV.CO",
          link:"https://datos.gov.co/"
        }
      ]
    },
    {
      title:"Información específica para Grupos de Interés",
      items:[
        {
          title: "Información para niños, niñas y adolescentes",
          link:"/nosotros"
        },
        {
          title: "Información para Mujeres",
          link:"/nosotros"
        },
        {
          title: "Protocolo de género",
          link:"/nosotros"
        },
        {
          title: "Informe de los indicadores de grupos étnicos",
          link:"/nosotros"
        }
      ]
    },
    {
      title:"Obligación de reporte de información específica",
      items:[
        {
          title: "El sujeto obligado deberá publicar la información, documentos, reportes o datos a los que está obligado por normativa especial, diferente a la referida en otras secciones",
          link:"/nosotros"
        }
      ]
    }
  ]

  return (
    <>
        {/* Buscardo  */}
        <div className="container_seacher_transparency ui search">
          <div className="seacher_transparency ui icon input">
            <input className="prompt" type="text" placeholder="Buscar" />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
        {/*Lista de items  */}
        <div className='container_list_items_transparency'>
          {
            dato.map((item,key)=>(
              <div key={key}>
                <div className='list_items_transparency' key={'xt'+String(key)}>
                  <h3 className='text_general button_list_items_transparency' key={'title'+String(key)}>
                    {item.title}
                  </h3>
                  {itemKey ==='angle'+String(key)
                  ? <i className=" big angle up icon" key={'angle'+String(key)} onClick={resetState}></i>
                  : <i className=" big angle down icon" key={'angle'+String(key)} onClick={() => changeState('angle'+String(key))}></i>
                  }
                </div>
                {
                  itemKey ==='angle'+String(key)
                  ? <div className='container_sub_items' key={'subItem'+String(key)}>
                        {
                        item.items.map((subitem,subkey) => (
                          <a href={subitem.link} className='sub_items' key={subkey}>
                            <i className="eye icon"></i>
                            <p>{subitem.title}</p>  
                          </a>
                        ))
                        }
                    </div>
                  : null
                }
              </div>
            ))
          }
        </div>
    </>
  )
}
