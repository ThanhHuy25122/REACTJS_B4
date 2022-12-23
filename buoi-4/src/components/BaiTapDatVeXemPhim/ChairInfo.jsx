import React, { Component } from "react";
import BookingChairTable from "./BookingChairTable";

export default class ChairInfo extends Component {
  render() {
    return (
      <div className="mt-5">
        <div>
          <div className="text-left">
            <button disabled={true} className="gheDuocChon"></button>
            <span
              className="text-light"
              style={{
                margin: "0 15px",
                fontSize: "30px",
              }}
            >
              Ghế đã đặt
            </span>
          </div>
          <div className="text-left">
            <button disabled={true} className="gheDangChon"></button>
            <span
              className="text-light"
              style={{
                margin: "0 15px",
                fontSize: "30px",
              }}
            >
              Ghế đang chọn
            </span>
          </div>
          <div className="text-left">
            <button
              className="ghe"
              style={{
                margin: 0,
              }}
            ></button>
            <span
              className="text-light"
              style={{
                margin: "0 15px",
                fontSize: "30px",
              }}
            >
              Ghế chưa đặt
            </span>
          </div>
        </div>
        <div className="mt-5">
          <table className="table" border={2}>
            <thead>
              <tr className="text-light">
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              <BookingChairTable />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
