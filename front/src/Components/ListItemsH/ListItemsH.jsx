import React, { useEffect } from 'react';
import "./ListItemsH.scss";

export function ListItemsH({ dato }) {
  useEffect(() => {
    const cards = document.querySelectorAll('.item-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            entry.target.dataset.key % 2 === 0
              ? 'appear-from-right'
              : 'appear-from-left'
          );
          observer.unobserve(entry.target);
        }
      });
    });

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <div className="list-items-container">
      {dato.map((item, key) => (
        <div key={key} data-key={key} className="item-card">
          <div className="item-image">
            <img src={item.img} alt="card-image" className="image-content" />
          </div>
          <div className="item-content">
            <h4 className="item-title">{item.title}</h4>
            <p className="item-text">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
