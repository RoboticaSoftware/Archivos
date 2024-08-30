import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css";
import "../../css/styles.scss";

export function Services() {
  const services = [
    {
      img: "./DB/Services/ARCHIVO.jpg",
      title: "Administración Integral de Archivos",
      content: "Texto prueba",
      id: 1,
    },
    {
      img: "./DB/Services/IMG_0943.JPG",
      title: "Digitalización",
      content: "Texto prueba",
      id: 2,
    },
    {
      img: "./DB/Services/custodía.png",
      title: "Custodia y Logística de Archivos",
      content: "Texto prueba",
      id: 3,
    },
    {
      img: "./DB/Services/instrumentos.png",
      title: "Elaboración de Instrumentos Archivisticos",
      content: "Texto prueba",
      id: 4,
    },
    {
      img: "./DB/Services/org_archivo.jpg",
      title: "Organización de Archivos",
      content: "Texto prueba",
      id: 5,
    },
    {
      img: "./DB/Services/digital.jpg",
      title: "Transformación Digital",
      content: "Texto prueba",
      id: 6,
    },
    {
      img: "./DB/Services/herramientas.jpg",
      title: "Herramientas de Software",
      content: "Texto prueba",
      id: 7,
    },
    {
      img: "./DB/Services/gobierno.jpg",
      title: "Gobierno de la Información",
      content: "Texto prueba",
      id: 8,
    },
    {
      img: "./DB/Services/IMG_0772.JPG",
      title: "Consultoria y Auditoria",
      content: "Texto prueba",
      id: 9,
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  /* Ojo Función para bloquear el scroll*/
  useEffect(() => {
    document.body.classList.toggle("no-scroll", !!selectedId);
  }, [selectedId]);

  return (
    <>
      <div className="container_general">
        <div className="title_general">
          <h1 className="title_general">SERVICIOS</h1>
        </div>
          <div className="subtitle_general--service">
            <h1>
              <strong>Soluciones en Tecnologías de la Información</strong>
            </h1>
          </div>
        <div className="Content_home_services">
          <p className="text_general--service">
          Con una trayectoria de éxito y una amplia experiencia, junto a un
          personal altamente especializado y una amplia disposición e
          infraestructura, garantizamos los mejores resultados que le
          permitirán ahorrar tiempo y dinero.
          </p>
      </div>
        <Grid className="Gallery_home_services">
          <Grid.Row columns={4} className="item_gallery_home_services">
            {services.map((item) => (
              <Grid.Column className="container_picture" key={item.id}>
                <div
                  className="background_picture_home_services"
                  onClick={() => setSelectedId(item.id)}
                >
                  <img
                    className="picture_home_services magic-hover"
                    src={item.img}
                    alt={item.title}
                  />
                  <figcaption className="overlay_title_services">
                    {item.title}
                  </figcaption>
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                className="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="modal enter-animation"
                layoutId={selectedId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {services
                  .filter((item) => item.id === selectedId)
                  .map((item) => (
                    <div key={item.id} className="modal-content">
                      <motion.h5 className="title_general--service">
                        {item.title}
                      </motion.h5>
                      <motion.img
                        src={item.img}
                        alt={item.title}
                        className="modal-image"
                      />
                      <motion.p className="text_general--service">
                        {item.content}
                      </motion.p>
                      <button
                        onClick={() => setSelectedId(null)}
                        className="modal-close"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
