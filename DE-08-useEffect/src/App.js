import React from "react";
import People from "./component/People";
import PeopleAxios from "./component/PeopleAxios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      App
      {/* <People /> */}
      <PeopleAxios />
    </div>
  );
};

export default App;
