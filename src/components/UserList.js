import React from "react";
import { getUsers } from "../api";

class UserList extends React.Component {
  state = {
    users: []
  };

  update() {
    getUsers().then(users => this.setState({ users }));
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

  // eslint-disable no-distracting-elements
  render() {
    return (
      <div className="row">
        <div
          className="col-md-12 terminal transparent mechterminal"
          id="terminal"
        >
          <div>user@c-beam&gt; #who</div>
          <div id="userlist">{this.state.users.join(", ")}</div>
          <div id="userlist-total">total: {this.state.users.length}</div>
          <div>
            user@c-beam&gt;&nbsp;<blink>_</blink>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
