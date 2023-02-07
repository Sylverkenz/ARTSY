import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Carousel({ title, data }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        open ? `h-[24rem] mdl:h-[22rem]  carousel` : `h-[11rem] carousel`
      }
    >
      <article
        className="flex justify-between items-center px-6 py-2 h-[11rem]"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span>{open ? <FaChevronUp /> : <FaChevronDown />}</span>
      </article>
      <article className="text-[2rem] text-[#616161] px-6">{data}</article>
    </div>
  );
}

export default Carousel;
