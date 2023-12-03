import React from "react";
import "/Users/chetanpatil/eclipse-workspace/ReactProject/hospital/src/CSS/Home.css";

class Home extends React.Component {
  state = {
    doctorData: [],
  };
  componentDidMount() {
    fetch("http://localhost:8080/hospitalservices/api/getAllDoctors")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ doctorData: data });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  render() {
    return (
      <div>
        <h2>Doctor's List:</h2>
        <table align="center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Employee Id</th>
              <th>Dr. Name</th>
              <th>Speciality</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctorData.map((dr) => (
              <RowCreator key={dr.id} item={dr} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class RowCreator extends React.Component {
  render() {
    var doctor = this.props.item;
    return (
      <tr key={doctor.id}>
        <td>doctor.id</td>
        <td>doctor.employeeId</td>
        <td>doctor.drName</td>
        <td>doctor.speciality</td>
      </tr>
    );
  }
}

export default Home;
