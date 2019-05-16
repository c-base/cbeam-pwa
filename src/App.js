import React, { Component } from "react";
import { Router } from "@reach/router";
import { ConnectionProvider } from './components/Connection'

import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Users from "./pages/Users";
import BarAbrechnung from "./pages/BarAbrechnung";
import WorkInProgress from "./pages/WorkInProgress";

class App extends Component {
  render() {
    return (
      <ConnectionProvider>
        <div>
          <header>
            <Navigation />
          </header>
          <div className="container">
            <Router>
              <Home path="/" />
              <Users path="/available" />
              <BarAbrechnung path="/bar/abrechnung" />
              <WorkInProgress path="/wip" />
            </Router>
          </div>
        </div>
      </ConnectionProvider>
    );
  }
}

export default App;
