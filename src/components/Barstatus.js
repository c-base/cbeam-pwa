// Based on https://github.com/c-base/c-beam/blob/master/c-beamd/cbeamd/assets/js/barstatus.jsx

import React from "react";
import { getBarstatus } from "../api";

const class_closed = "btn btn-block btn-danger";
const class_open = "btn btn-block btn-success";

class BarStatus extends React.Component {
  state = { isOpen: false };

  update() {
    getBarstatus().then(isOpen => this.setState({ isOpen }));
  }

  startUpdating() {
    this.update(); // do it once and then start it up ...
    this._timer = setInterval(() => this.update(), 10000); //this.props.pollInterval);
  }

  componentDidMount() {
    this.startUpdating();
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  render() {
    const className = this.state.isOpen ? class_open : class_closed;
    return (
      <div className="row">
        <div className="col-md-12">
          <div id="barstatus">
            <div className={className}>
              bar {this.state.isOpen ? "open" : "closed"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BarStatus;
