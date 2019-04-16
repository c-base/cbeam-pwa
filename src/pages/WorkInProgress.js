import React from "react";

import BarStatus from "../components/Barstatus";

const WorkInProgress = () => (
  <div className="row">
    <div className="col-md-12">
      <h1>Work In Progress</h1>
      <h2>Stuff that is not yet done</h2>
      <hr />
      <h3>Bar Status</h3>
      <BarStatus />
      <hr />
    </div>
  </div>
);

export default WorkInProgress;
