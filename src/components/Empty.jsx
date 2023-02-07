import React from "react";
import { Link } from "react-router-dom";

function Empty() {
  return (
    <div className="empty">
      <h2>Your Cart is empty</h2>
      <Link to="/market">fill it</Link>
    </div>
  );
}

export default Empty;
