import React, { Component } from "react";
import { connect } from "react-redux";
import { bookTicketAction } from "../../store/actions/bookingTicketActions";

class Chair extends Component {
  renderChair = () => {
    return this.props.chairs.map((element, idx) => {
      //Trạng thái ghế
      let disabled;
      let classDisabled;
      if (element.daDat) {
        disabled = true;
        classDisabled = "gheDuocChon";
      } else {
        classDisabled = "";
      }

      //Xét trạng thái đã đặt

      let indexBookedTicket = this.props.bookedList.findIndex(
        (chairNumber) => chairNumber.soGhe === element.soGhe
      );
      let cssBookedChair = "";

      if (indexBookedTicket !== -1) {
        disabled = true;
        cssBookedChair = "gheDuocChon";
      }

      // Xét trạng thái đang dặt đặt
      let indexBookingTicket = this.props.bookingTicketList.findIndex(
        (chairNumber) => chairNumber.soGhe === element.soGhe
      );
      let cssBookingChair = "";

      if (indexBookingTicket !== -1) {
        cssBookingChair = "gheDangChon";
      }

      return (
        <button
          onClick={() => this.props.dispatch(bookTicketAction(element))}
          className={`${this.props.chairCss} ${classDisabled} ${cssBookingChair} ${cssBookedChair}`}
          key={element.soGhe}
          disabled={this.props.disabled || disabled}
        >
          {idx + 1}
        </button>
      );
    });
  };
  render() {
    return <>{this.renderChair()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    bookingTicketList: state.bookingMovieTicketReducer.bookingTicketList,
    bookedList: state.bookingMovieTicketReducer.bookedList,
  };
};

export default connect(mapStateToProps)(Chair);
