import { lightFormat, addMinutes } from 'date-fns';
export const formatDuration = (duration) =>
  `${Math.floor(duration / 60)}ч ${Math.floor(duration % 60)}м`;

export const formatInterval = (dateString, duration) =>
  `${lightFormat(new Date(dateString), 'HH:mm')} - ${lightFormat(
    addMinutes(new Date(dateString), duration),
    'HH:mm'
  )}`;

export const formatPrice = (price) =>
  `${price.toLocaleString('ru-RU', {
    style: 'decimal',
    currency: 'RUB',
  })} P`;

export const formatStops = (stops) => {
  if (stops === 2 || stops === 3) {
    return `${stops} пересадки`;
  } else if (stops === 1) {
    return `1 пересадка`;
  } else {
    return 'Без пересадок';
  }
};
