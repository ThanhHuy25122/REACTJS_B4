import React, { Component } from "react";
import { connect } from "react-redux";
import { bookedTicketsAction } from "../../store/actions/bookingTicketActions";

class BookedBtn extends Component {
  render() {
    return (
      <>
        <button
          className="btn btn-success mt-3 mr-5"
          onClick={() =>
            this.props.dispatch(
              bookedTicketsAction(this.props.bookingTicketList)
            )
          }
        >
          Đặt vé
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingTicketList: state.bookingMovieTicketReducer.bookingTicketList,
  };
};

export default connect(mapStateToProps)(BookedBtn);
