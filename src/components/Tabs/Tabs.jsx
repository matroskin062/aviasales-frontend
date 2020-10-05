import React from 'react';
import s from './Tabs.module.css';

const Tabs = ({ setSortType }) => {
  const [isActive, setActive] = React.useState();
  const btns = [
    { text: 'САМЫЙ БЫСТРЫЙ', className: s.Left, type: 'fastest' },
    { text: 'САМЫЙ ДЕШЕВЫЙ', className: s.Right, type: 'cheapest' },
  ];

  const click = (type, index) => {
    setSortType(type);
    setActive(index);
  };
  return (
    <div className={s.Tabs}>
      {/* <button className={`${s.Left}`} onClick={() => setSortType('fast')}>
        Fast
      </button>
      <button className={s.Right} onClick={() => setSortType('cheap')}>
        Cheap
      </button> */}
      {btns.map((b, index) => (
        <button
          className={(isActive === index ? s.Active : null) + ' ' + b.className}
          onClick={() => {
            click(b.type, index);
          }}
        >
          {b.text}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
