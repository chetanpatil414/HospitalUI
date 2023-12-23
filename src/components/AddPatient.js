import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import FormField from "./FormField";

function AddPatient(props) {
  const [diseaseList, setDisease] = useState([]);

  const [formData, setFormData] = useState({
    //these field typo's must be same through out the whole laylers "UI,Service,DB"
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    referral: "",
    disease: "",
    patientDescription: "",
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
        "http://localhost:8010/hospital/api/addPatient",
        formData
      );
      console.log(response.data);
      // Reset form fields after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        referral: "",
        disease: "",
        patientDescription: "",
        drAssigned: "",
      });
    } catch (error) {
      console.error("Error submitting the form: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        "http://localhost:8080/hospital/api/fetchAllDisease"
      );
      console.log(resp.data);
      // const diseaseList = resp.data.map((item) => item.disease);
      setDisease(resp.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Log the updated disease state whenever it changes
    console.log(
      "Updated disease state:",
      diseaseList.map((item) => item.disease)
    );
  }, [diseaseList]);

  return (
    <div>
      <div className="header">
        <h1 className="Add-patient-heading">Patient Form</h1>
      </div>
      <div className="form-input">
        <form onSubmit={handleSubmit}>
          <FormField
            label="First Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <FormField
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <FormField
            label="Email"
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <FormField
            label="Phone No"
            type="text"
            name="phoneNo"
            placeholder="Phone No"
            value={formData.phoneNo}
            onChange={handleInputChange}
          />
          <FormField
            label="Referral"
            type="text"
            name="referral"
            placeholder="Referral"
            value={formData.referral}
            onChange={handleInputChange}
          />

          <FormField
            label="Disease"
            type="select"
            name="disease"
            placeholder="Select Disease"
            value={formData.disease}
            data={diseaseList}
            onChange={handleInputChange}
          />

          <FormField
            label="Description"
            type="text"
            name="patientDescription"
            placeholder="description"
            value={formData.patientDescription}
            onChange={handleInputChange}
          />

          <FormField
            label="Dr Assigned"
            type="text"
            name="drAssigned"
            placeholder="drAssigned"
            value={formData.drAssigned}
            onChange={handleInputChange}
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPatient;
