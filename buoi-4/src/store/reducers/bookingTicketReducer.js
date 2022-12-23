import {
  BOOKED_TICKETS,
  BOOK_TICKET,
  REMOVE_ALL_TICKETS,
  REMOVE_TICKET,
} from "../types/bookingTicketypes";

const DEFAULT_STATE = {
  bookedList: [
    { soGhe: "D12", gia: 0, daDat: true, dangChon: false },
    { soGhe: "B12", gia: 0, daDat: true, dangChon: false },
  ],
  bookingTicketList: [],
};

export const bookingMovieTicketReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOK_TICKET: {
      const data = [...state.bookingTicketList];
      const idx = data.findIndex((element) => element.soGhe === payload.soGhe);
      if (data.length >= 5) {
        alert(`Không thể đặt quá ${data.length} vé`);
        return;
      }
      if (idx === -1) {
        data.push(payload);
      } else {
        data.splice(idx, 1);
      }

      state.bookingTicketList = data;

      break;
    }
    case REMOVE_TICKET: {
      const data = [...state.bookingTicketList];
      const idx = data.findIndex((element) => element.soGhe === payload);
      if (window.confirm(`Bạn có muốn xóa số ghế này ${payload}`)) {
        data.splice(idx, 1);
      }

      state.bookingTicketList = data;

      break;
    }

    case REMOVE_ALL_TICKETS: {
      let data = [...state.bookingTicketList];
      if (data.length === 0) {
        return alert("đã hết vé");
      }
      if (window.confirm(`Bạn có muốn xóa tất cả vé đang chọn`)) {
        data = [];
      }

      state.bookingTicketList = data;

      break;
    }

    case BOOKED_TICKETS: {
      let dataBookingList = [...state.bookingTicketList];
      let dataBookedList = [...state.bookedList];
      if (payload.length <= 0) {
        return alert("Bạn chưa chọn vé nào cả");
      }

      if (window.confirm(`Bạn có muốn đặt các vé đã chọn`)) {
        dataBookedList = [...dataBookedList, ...payload];
        dataBookingList = [];

        state.bookedList = dataBookedList;
        state.bookingTicketList = dataBookingList;
      }

      break;
    }

    default:
      break;
  }
  return { ...state };
};
