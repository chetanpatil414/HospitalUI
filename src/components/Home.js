import React from "react";
import { Link, Route } from "react-router-dom";
import AddPatient from "./AddPatient";
import Header from "./Header";
import "/Users/chetanpatil/eclipse-workspace/ReactProject/hospitalUI/src/CSS/Home.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div className="container">
              <Header />
              {/* <Footer /> */}
            </div>
          )}
        />
        <Route path="/AddPatient" component={AddPatient} />
      </div>
    );
  }
}

export default Home;
