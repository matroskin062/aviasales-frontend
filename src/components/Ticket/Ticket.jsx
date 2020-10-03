import React from 'react';
import s from './Ticket.module.css';

const Ticket = ({ ticket }) => {
  const { segments } = ticket;

  return (
    <div className={s.Ticket}>
      <div className={s.Title}>
        <p className={s.Price}>{ticket.price} Р</p>
        <img
          alt={ticket.carrier}
          src={`//pics.avs.io/99/36/${ticket.carrier}.png`}
        />
      </div>
      <div className={s.Segment}>
        <div>
          {segments[0].origin} - {segments[0].destination}
        </div>
        <div></div>
        <div>
          <p>Пересадки {segments[0].stops.length}</p>
          <p>{segments[0].stops.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
