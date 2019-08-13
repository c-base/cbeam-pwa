import React, { useState } from "react";
import useInterval from "../hooks/useInterval";
import { getUsers } from "../api";

function UserAmount() {
  const [users, setUsers] = useState([]);

  useInterval(() => {
    getUsers().then(users => setUsers(users));
  }, 10000);

  return (
    <div className="label label-default">Users on board: {users.length}</div>
  );
}

export default UserAmount;
