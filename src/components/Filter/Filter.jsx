import React from 'react';

import s from './Filter.module.css';
const Filter = () => {
  const chekboxes = [
    { text: 'Все' },
    { text: 'Без пересадок' },
    { text: '1 пересадка' },
    { text: '2 пересадки' },
    { text: '3 пересадки' },
  ];

  return (
    <div className={s.Filter}>
      <div className={s.Title}>
        <p>Количество пересадок</p>
      </div>
      {chekboxes.map((cb) => (
        <label key={cb.text}>
          <div className={s.Checkbox}>
            <input type='checkbox' />
            <span></span>
            {cb.text}
          </div>
        </label>
      ))}
    </div>
  );
};

export default Filter;
