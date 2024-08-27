import React, { useState } from 'react';
import { Button, Message } from 'semantic-ui-react';

export function PP() {
  const [visible, setVisible] = useState(false);

  const mostrarAlerta = () => {
    setVisible(true);
  };

  const cerrarAlerta = () => {
    setVisible(false);
  };

  const aceptarAlerta = () => {
    // Aquí puedes agregar lógica adicional al hacer clic en "Aceptar"
    console.log('Alerta aceptada');
    cerrarAlerta(); // Cierra la alerta después de aceptar
  };

  return (
    <div>
      <Button onClick={mostrarAlerta}>Mostrar Alerta</Button>

      <Message
        positive  // Puedes usar "info", "warning", o "negative" según el tipo de alerta
        hidden={!visible}
        onDismiss={cerrarAlerta}
      >
        <Message.Header>¡Alerta!</Message.Header>
        <p>Este es un mensaje de alerta utilizando Semantic UI React.</p>
        
        {/* Botón de "Aceptar" */}
        <Button positive onClick={aceptarAlerta}>
          Aceptar
        </Button>
      </Message>
    </div>
  );

}


