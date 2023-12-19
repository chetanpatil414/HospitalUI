import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPatient(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    referral: "",
    decease: "",
    description: "",
    drAssigned: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/hospitalservices/api/addPatientDetail",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting the form: ", error);
    }
  };

  return (
    <div>
      <div className="header">
        <h1 className="Add-patient-heading">Patient Form</h1>
      </div>
      <div className="form-input">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>First Name</label>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <label>Last Name</label>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <label>Email</label>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <label>Phone No</label>
            <div>
              <input
                type="text"
                name="phoneNo"
                placeholder="Phone No"
                value={formData.phoneNo}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <label>Referral</label>
            <div>
              <input
                type="text"
                name="referral"
                placeholder="Referral"
                value={formData.referral}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <label>Decease</label>
            <div>
              <select>
                <option>Select</option>
              </select>
            </div>
          </fieldset>

          <fieldset>
            <label>Description</label>
            <div>
              <input
                type="text"
                name="description"
                placeholder="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <label>Dr Assigned</label>
            <div>
              <input
                type="text"
                name="drAssigned"
                placeholder="drAssigned"
                value={formData.drAssigned}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPatient;
