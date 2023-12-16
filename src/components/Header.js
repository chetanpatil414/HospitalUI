import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link to="/AddPatient" className="nav">
        Add Patient
      </Link>
    </div>
  );
}

export default Header;
