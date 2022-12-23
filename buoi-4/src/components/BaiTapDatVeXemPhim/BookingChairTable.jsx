import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTicketAction } from "../../store/actions/bookingTicketActions";
import TotalPaymentTable from "./TotalPaymentTable";

class BookingChairTable extends Component {
  renderBookingList = () => {
    return this.props.bookingTicketList.map((bookingTicket) => {
      return (
        <tr
          className="text-light"
          style={{
            fontSize: "30px",
          }}
          key={bookingTicket.soGhe}
        >
          <td>{bookingTicket.soGhe}</td>
          <td> {bookingTicket.gia}$</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() =>
                this.props.dispatch(removeTicketAction(bookingTicket.soGhe))
              }
            >
              Hủy
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        {this.renderBookingList()}
        <TotalPaymentTable />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingTicketList: state.bookingMovieTicketReducer.bookingTicketList,
  };
};

export default connect(mapStateToProps)(BookingChairTable);
