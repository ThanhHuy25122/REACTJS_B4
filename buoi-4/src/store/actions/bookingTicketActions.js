import {
  BOOKED_TICKETS,
  BOOK_TICKET,
  REMOVE_ALL_TICKETS,
  REMOVE_TICKET,
} from "../types/bookingTicketypes";

export const bookTicketAction = (payload) => {
  return {
    type: BOOK_TICKET,
    payload,
  };
};

export const removeTicketAction = (payload) => {
  return {
    type: REMOVE_TICKET,
    payload,
  };
};

export const removeAllTicketsAction = () => {
  return {
    type: REMOVE_ALL_TICKETS,
  };
};

export const bookedTicketsAction = (payload) => {
  return {
    type: BOOKED_TICKETS,
    payload,
  };
};
