import React, { useState } from "react";
import useInterval from "../hooks/useInterval";
import { getBarstatus } from "../api";

const class_closed = "label label-warning";
const class_open = "label label-success";

function BarStatus() {
  const [open, setOpen] = useState(false);

  useInterval(() => {
    getBarstatus().then(isOpen => setOpen(isOpen));
  }, 10000);

  const className = open ? class_open : class_closed;
  return (
    <div id="barstatus">
      <div className={className}>bar {open ? "open" : "closed"}</div>
    </div>
  );
}

export default BarStatus;
