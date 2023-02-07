import React, { useState, useEffect } from "react";
import { sign } from "../utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { auctionSlide } from "../utils/animations";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SigninSlider() {
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const change = setInterval(() => {
      setCurIndex(curIndex + 1);
      if (curIndex >= sign.length - 1) {
        setCurIndex(0);
      }
    }, 4000);

    return () => {
      clearInterval(change);
    };
  }, [curIndex]);

  function nextHandler() {
    setCurIndex(curIndex + 1);
    if (curIndex >= sign.length - 1) {
      setCurIndex(0);
    }
  }

  function prevHandler() {
    setCurIndex(curIndex - 1);
    if (curIndex < 1) {
      setCurIndex(sign.length - 1);
    }
  }

  const { img, quote, author } = sign[curIndex];
  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={author}
          variants={auctionSlide}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute top-0 left-0 w-full h-full"
        >
          <img src={img} alt="" />
          <article className="absolute top-0 left-0 text-[3rem] text-[#DEDEDE] flex flex-col gap-12 items-center justify-center font-CDisplay w-full h-full bg-[rgba(0,0,0,.5)]">
            <h4 className="w-[40rem]">" {quote} "</h4>
            <h4 className="w-[35rem] italic text-[2.5rem]">-{author}</h4>
          </article>
        </motion.div>
      </AnimatePresence>
      <div className="absolute text-white bottom-12 right-12">
        <button className=" border p-6 rounded-full" onClick={prevHandler}>
          <FaArrowLeft />
        </button>
        <button
          className=" border p-6 rounded-full ml-12"
          onClick={nextHandler}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default SigninSlider;
