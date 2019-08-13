import React from "react";
import Connection from '../components/Connection'
import BarStatus from "../components/Barstatus";
import UserAmount from "../components/UserAmount";

const Home = () => (
  <div className="row">
    <div className="col-md-12">
      <h1>c-beam web interface</h1>
      <Connection>{isConnected => 
        <p>You {isConnected ? 'are docked at c-base' : 'lost connection to c-base'}</p>
      }</Connection>
    </div>
    <div className="row">
      <div className="col-md-3">
        <UserAmount/>
      </div>
      <div className="col-md-3">
        <BarStatus/>
      </div>
    </div>
  </div>
);

export default Home;