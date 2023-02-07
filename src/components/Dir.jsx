import React from "react";
import { Link } from "react-router-dom";

function Dir({ name, category }) {
  return (
    <div className="baseBtext text-[#BCB7B7] capitalize">
      <Link>home</Link> /<Link>marketplace</Link> /
      <p className="inline-block">{category}</p> /
      <p className="inline-block text-black uppercase">{name}</p>
    </div>
  );
}

export default Dir;
