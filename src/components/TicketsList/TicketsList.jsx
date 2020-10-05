import React from 'react';
import { useSelector } from 'react-redux';
import Ticket from '../Ticket/Ticket';

const TicketsList = ({ sortType }) => {
  const tickets = useSelector((state) => state.tickets);
  const [sortedTickets, setSortedTickets] = React.useState([]);

  React.useEffect(() => {
    if (sortType === 'fastest') {
      setSortedTickets(
        tickets.sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration)
        )
      );
    } else {
      setSortedTickets(tickets.sort((a, b) => a.price - b.price));
    }
  }, [tickets, sortType]);

  return sortedTickets
    .slice(0, 5)
    .map((ticket) => (
      <Ticket key={ticket.carrier + ticket.price} ticket={ticket} />
    ));
};

export default TicketsList;
