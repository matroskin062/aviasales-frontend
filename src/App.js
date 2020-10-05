import React from 'react';
import s from './App.module.css';
import axios from 'axios';
import { setTickets } from './store/actions/actions';
import { useDispatch } from 'react-redux';
import TicketsList from './components/TicketsList/TicketsList';
import Filter from './components/Filter/Filter';
import Tabs from './components/Tabs/Tabs';

function App() {
  const dispatch = useDispatch();
  const [sortType, setSortType] = React.useState('');

  const getId = async () => {
    const { data } = await axios.get(
      'https://front-test.beta.aviasales.ru/search'
    );
    return data.searchId;
  };

  const getData = async () => {
    const searchId = await getId();
    await getTickets(searchId);
  };

  const getTickets = async (id) => {
    try {
      const { data } = await axios.get(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
      );
      if (data.stop !== true) {
        console.log('if: ' + data.stop);
        await getTickets(id);
      } else {
        dispatch(setTickets(data.tickets));
      }
    } catch (error) {
      getTickets(id);
    }
  };

  React.useEffect(() => {
    getData();
  });

  return (
    <div className={s.Container}>
      <div>
        <Filter />
      </div>
      <div>
        <Tabs setSortType={setSortType} />

        <TicketsList sortType={sortType} />
      </div>
    </div>
  );
}

export default App;
