import React from 'react';
import {
  formatInterval,
  formatPrice,
  formatDuration,
  formatStops,
} from '../utils/formatters';
import s from './Ticket.module.css';

const Ticket = ({ ticket }) => {
  const { segments } = ticket;

  return (
    <div className={s.Ticket}>
      <div className={s.Header}>
        <p className={s.Price}>{formatPrice(ticket.price)}</p>
        <div className={s.CarrierImg}>
          <img
            alt={ticket.carrier}
            src={`//pics.avs.io/99/36/${ticket.carrier}.png`}
          />
        </div>
      </div>
      {segments.map((seg) => (
        <div
          className={s.Segment}
          key={seg.duration + seg.date + seg.stops.length}
        >
          <div>
            <p className={s.SegmentTitle}>
              {seg.origin} - {seg.destination}
            </p>
            <p className={s.SegmentInfo}>
              {formatInterval(seg.date, seg.duration)}
            </p>
          </div>
          <div>
            <p className={s.SegmentTitle}>В пути</p>
            <p className={s.SegmentInfo}>{formatDuration(seg.duration)}</p>
          </div>
          <div>
            <p className={s.SegmentTitle}>{formatStops(seg.stops.length)}</p>
            <p className={s.SegmentInfo}>{seg.stops.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
