import React, { useState } from "react";
import { Input, TextArea } from "semantic-ui-react";
import "./Contact.css";

export function Contact() {
  const [message, setMessage] = useState({});

  const getMessage = (e, { name, value }) => {
    setMessage({ ...message, [name]: value });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <div className="container_contact--contact">
      <div className="main--contact">
        <div className="logo--contact">
          <h2></h2>
        </div>
        <div className="singIn--contact">
          <h1 className="title_contact">CONTÁCTENOS</h1>
          <p className="content_contact--contact">
            Cumpliendo con la normatividad vigente, contamos con una amplia
            variedad de servicios que le permitirán proteger su información,
            almacenarla de forma sencilla y acceder a ella en el momento
            requerido.
          </p>
          <form onSubmit={sendMessage}>
            <label htmlFor="name">NOMBRE</label>
            <div className="custom-input-container">
              <Input
                className="custom-input"
                icon="id card"
                iconPosition="left"
                placeholder="Ingrese su nombre"
                name="name"
                type="text"
                onChange={getMessage}
                required
              />
            </div>
            <label htmlFor="email">CORREO</label>
            <Input
              className="custom-input"
              icon="envelope"
              iconPosition="left"
              placeholder="Ingrese su email"
              name="email"
              type="email"
              onChange={getMessage}
              required
            />
            <label htmlFor="subject">ASUNTO</label>
            <Input
              className="custom-input"
              icon="tag"
              iconPosition="left"
              placeholder="Asunto"
              name="subject"
              type="text"
              onChange={getMessage}
              required
            />
            <label htmlFor="message">MENSAJE</label>
            <TextArea
              className="custom-input"
              icon="edit"
              iconPosition="left"
              placeholder="Ingrese su mensaje (máximo 255 caracteres)"
              name="message"
              type="text"
              maxLength={255}
              onChange={getMessage}
              required
            />
            <div className="button-container">
              <button className="button--contact" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
