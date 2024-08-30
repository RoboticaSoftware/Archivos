import React from 'react';
import Spline from '@splinetool/react-spline';
import "./ListText.scss";

export function ListText({ dato }) {
  return (
    <>
      <div className='container_general'>
        <h2 className='title_general'>
          <strong>NUESTRA TECNOLOGÍA</strong>
        </h2>
        <div className="ui internally celled grid">
          {dato.map((item, key) => (
            <div className="row" key={key}>
              <div className="two wide column spline-container">
                {/* Usando la URL específica para cada item */}
                <Spline scene={item.splineUrl} />
              </div>
              <div className="text_general">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
