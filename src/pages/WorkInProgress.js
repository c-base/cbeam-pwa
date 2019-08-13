import React from "react";

import BarStatus from "../components/Barstatus";
import Matelight from "../components/Matelight";

const WorkInProgress = () => (
  <div className="row">
    <div className="col-md-12">
      <h1>Work In Progress</h1>
      <h2>Stuff that is not yet done</h2>
      <hr />
      <h3>Bar Status</h3>
      <BarStatus />
      <hr />
      <h3>Matelight</h3>
      <Matelight />
    </div>
  </div>
);

export default WorkInProgress;
