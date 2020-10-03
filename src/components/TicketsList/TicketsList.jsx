import React from 'react';
import { useSelector } from 'react-redux';
import Ticket from '../Ticket/Ticket';

const TicketsList = () => {
  const tickets = useSelector((state) => state.tickets);
  React.useEffect(() => {
    console.log(tickets);
  }, [tickets]);
  return tickets
    .slice(0, 5)
    .map((ticket) => (
      <Ticket key={ticket.carrier + ticket.price} ticket={ticket} />
    ));
};

export default TicketsList;
