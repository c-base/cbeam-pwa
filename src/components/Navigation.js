import React from "react";
import { Link } from "@reach/router";

const Navigation = ({ onClose }) => (
  <nav onClick={onClose}>
    <ul class="nav navbar-nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/available">User Liste</Link>
      </li>
      <li>
        <Link to="/wip">Work In Progress</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
