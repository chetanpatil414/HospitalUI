import { render } from "@testing-library/react";
import React from "react";

state = {
  drDetail: [],
};

class BookAppointment extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8080/hospitalservices/api/fetchBySpeciality")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ drDetail: data });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }
  render() {
    return (
      <div>
        <h2>Doctor Name: </h2>
        <body>{this.state.drDetail}</body>
      </div>
    );
  }
}

export default BookAppointment;
