import React, {useState} from "react";
import useInterval from '../hooks/useInterval'
import { getUsers } from "../api";

function UserList() {
  const [users, setUsers] = useState([]);

  useInterval(() => {
    getUsers().then(users => setUsers(users));
  }, 10000);

  return (
    <div className="row">
      <div
        className="col-md-12 terminal transparent mechterminal"
        id="terminal"
      >
        <div>user@c-beam&gt; #who</div>
        <div id="userlist">{users.join(", ")}</div>
        <div id="userlist-total">total: {users.length}</div>
        <div>
          user@c-beam&gt;&nbsp;<blink>_</blink>
        </div>
      </div>
    </div>
  );
}

export default UserList;
