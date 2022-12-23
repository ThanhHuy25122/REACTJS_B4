import React, { Component } from "react";
import chairList from "../../data/danhSachGhe.json";
import "./assets/css/BaiTapBookingTicket.css";
import Chair from "./Chair";
import ChairInfo from "./ChairInfo";
import { connect } from "react-redux";
import BookedBtn from "./BookedBtn";

class BookingTickets extends Component {
  renderSeat = () => {
    //  Disable button Hang
    return chairList.map((element) => {
      let disabled;
      if (element.hang === "") {
        disabled = true;
      }

      return (
        <div
          key={element.hang}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px 0",
          }}
        >
          <button className="rowNumber" disabled={true}>
            {element.hang === "" ? "--" : element.hang}
          </button>

          <Chair
            chairs={element.danhSachGhe}
            chairCss={element.hang === "" ? "rowNumber" : "ghe"}
            disabled={disabled}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./images/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-light display-4 text-warning">
                  ĐẶT VÉ XEM PHIM
                </div>
                <div
                  className="mt-3 text-light mr-5"
                  style={{ fontSize: "25px" }}
                >
                  màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  <div
                    style={{
                      display: "flex",
                      width: "80%",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    {this.renderSeat()}
                  </div>
                </div>
                <div>
                  <BookedBtn />
                </div>
              </div>
              <div className="col-4">
                <div
                  className="display-4 text-light"
                  style={{ fontSize: "35px" }}
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                  <ChairInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(BookingTickets);
