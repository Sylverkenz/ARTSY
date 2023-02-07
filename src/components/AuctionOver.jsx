import React, { useState, useEffect } from "react";
import { auctions } from "../utils/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { auctionSlide } from "../utils/animations";

function AuctionOver() {
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const change = setInterval(() => {
      setCurIndex(curIndex + 1);
      if (curIndex >= auctions.length - 1) {
        setCurIndex(0);
      }
    }, 4000);

    return () => {
      clearInterval(change);
    };
  }, [curIndex]);

  function nextHandler() {
    setCurIndex(curIndex + 1);
    if (curIndex >= auctions.length - 1) {
      setCurIndex(0);
    }
  }

  function prevHandler() {
    setCurIndex(curIndex - 1);
    if (curIndex < 1) {
      setCurIndex(auctions.length - 1);
    }
  }

  const { id, image, name, time, description } = auctions[curIndex];

  return (
    <div className="auction-overview">
      <h5 className="auction-title">see upcoming auctions and exhibitions</h5>
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          variants={auctionSlide}
          initial="hidden"
          animate="show"
          exit="exit"
          className="slide relative w-full h-[50rem] my-[3rem]"
        >
          <img src={image} alt="nat-1" />

          <div className="texts basetext">
            <span>{`0${id}`}</span>
            <article className="w-full sm:w-[50%] mdl:w-[58%] mr-auto">
              <h5>{name}</h5>
              <h6>{time}</h6>
              <p className="text-[1.6rem]  font-medium  ">{description}</p>
            </article>
            <article className="flex items-center text-[1.6rem] mdl:text-[2rem]">
              <a href="#" className="underline capitalize">
                see more
              </a>
              <button className="ml-[3rem] capitalize border border-white rounded-[1rem] py-[0.8rem] px-[1.3rem]">
                set a reminder
              </button>
            </article>
          </div>
        </motion.div>
      </AnimatePresence>
      <article className="flex items-center justify-between">
        <div className="slide_buttons">
          {auctions.map((button) => {
            const { id } = button;
            return (
              <button
                key={id}
                style={
                  id === curIndex + 1
                    ? { backgroundColor: "white", left: `${curIndex * 25}%` }
                    : {
                        backgroundColor: "transparent",
                        left: `${curIndex * 25}%`,
                      }
                }
              ></button>
            );
          })}
        </div>
        <div className="dir_buttons">
          <button onClick={prevHandler}>
            <FaChevronLeft />
          </button>
          <button onClick={nextHandler}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </div>
  );
}

export default AuctionOver;
