import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { bidders } from "../utils/data";
import { useProductContext } from "../contexts/Productcontext";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaHeart, FaEye } from "react-icons/fa";
import { SlClose } from "react-icons/sl";
import userImg from "../assets/images/user.jpg";
import { motion } from "framer-motion";
import { getTime } from "../utils/helpers";

function LiveBid() {
  const { id } = useParams();
  const { products, time, setTime } = useProductContext();
  const [users, setUsers] = useState(bidders);

  const [chat, setChat] = useState("");

  const scroller = useRef(null);

  useEffect(() => {
    const timeUpdate = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => {
      clearInterval(timeUpdate);
    };
  }, [time]);

  useEffect(() => {
    scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [users]);

  const curBid = products.find((product) => product.id === id);

  const { name, url, creator } = curBid;

  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const chats = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  function submitHandler(e) {
    e.preventDefault();
    if (chat) {
      setUsers([
        ...users,
        { name: "chika sylvester", image: userImg, comment: chat },
      ]);
      setChat("");
    }
  }

  return (
    <>
      <motion.section
        variants={parent}
        initial="hidden"
        animate="show"
        className=" px-8 mdl:px-[10rem]"
      >
        <div className="font-Satoshi text-[2.4rem] text-[#BCB7B7] capitalize pb-[3rem] ">
          <Link to="/">home</Link> /<Link to="/auction">auctions</Link> /{" "}
          <p className="inline-block text-[#000]">live bid</p>
        </div>
        <div className="hidden mdl:flex mb-36 border border-black">
          <figure className="w-[50%] h-[90vh] relative">
            <img src={url} alt="" className="absolute w-[95%]" />
            <article className="overlaytexts bg-[#00000060] ">
              <div>
                <Link
                  to="/auction"
                  className="block bg-[#B8B4B4] text-[4rem] rounded-full"
                >
                  <SlClose />
                </Link>

                <span className="live block px-12 py-2  uppercase text-[2rem] bg-[#4693ED] rounded-full">
                  live
                </span>
              </div>
              <div>
                <h5 className="curbid text-[4rem]">Time: {getTime(time)}</h5>
              </div>
              <div>
                <h5 className="text-[2.5rem] capitalize">Tag: {name}</h5>
              </div>
            </article>
          </figure>
          <div className="bidchats w-[50%] px-[4rem] pb-[2rem] flex flex-col justify-end">
            <motion.div
              variants={parent}
              initial="hidden"
              animate="show"
              id="scroller"
              ref={scroller}
              className="overflow-y-auto overflow-x-hidden max-h-[48rem] border-b"
            >
              {users.map((user) => {
                const { name, image, comment } = user;
                return (
                  <motion.article
                    key={name}
                    variants={chats}
                    className="flex items-center gap-8 mb-8"
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-[6rem] h-[6rem] rounded-full"
                    />
                    <div className="font-Satoshi text-[1.8rem] flex flex-col justify-between h-[6rem]">
                      <h5 className="capitalize text-[#333]">{name}</h5>
                      <p>{comment}</p>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
            <div>
              <p className="capitalize font-stix font-Bellefair text-[2.5rem] text-[#bab9b9] mb-8">
                creator: {creator}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <form className="liveform" onSubmit={submitHandler}>
                <input
                  type="text"
                  placeholder="Place a bid..."
                  value={chat}
                  onChange={(e) => setChat(e.target.value)}
                />
                <button
                  type="submit"
                  className="submit-btn text-[3rem] text-[#292929] absolute top-[1.2rem] right-[3.2rem]"
                >
                  <RiSendPlaneFill />
                </button>
              </form>
              <button className="like text-[3rem] text-[#E31616] border border-black p-4 rounded-full">
                <FaHeart />
              </button>
              <div className="floatlikes">
                <span>
                  <FaHeart />
                </span>
                <span>
                  <FaHeart />
                </span>
                <span>
                  <FaHeart />
                </span>
                <span>
                  <FaHeart />
                </span>
                <span>
                  <FaHeart />
                </span>
                <span>
                  <FaHeart />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mobileLive mdl:hidden fixed top-0 left-0 bg-black h-[100vh] w-[100%] text-[1.6rem] text-white font-Satoshi">
          <img
            src={url}
            alt={name}
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-[rgba(0,0,0,.4)] px-8 py-4 sm:py-8">
            <div className="flex items-center justify-between w-full">
              <h5 className=" capitalize sm:text-[2.5rem]">Tag: {name}</h5>
              <div className="flex items-center justify-between w-[45%]">
                <span className="live block px-4 py-2  uppercase text-[1.4rem] sm:text-[2rem] bg-[#4693ED] rounded-[5px]">
                  live
                </span>
                <span className="flex items-center gap-2 px-4 py-2  uppercase text-[1.4rem] sm:text-[2rem] bg-[rgba(255,255,255,0.4)] rounded-[5px]">
                  <FaEye />
                  <span>296</span>
                </span>
                <Link
                  to="/auction"
                  className="block text-[2.5rem] sm:text-[3rem]"
                >
                  <SlClose />
                </Link>
              </div>
            </div>
            <h5 className="curbid text-[2rem] sm:text-[3rem]">
              Time: {getTime(time)}
            </h5>
            <div className="bidchats flex flex-col justify-end">
              <motion.div
                variants={parent}
                initial="hidden"
                animate="show"
                id="scroller"
                ref={scroller}
                className="relative overflow-y-auto overflow-x-hidden max-h-[25rem]"
              >
                {users.map((user, index) => {
                  const { name, image, comment } = user;
                  return (
                    <motion.article
                      key={name}
                      // variants={chats}
                      className="flex items-center gap-8 mb-4 z-10"
                      style={{ opacity: index > 0 ? 1 : 0.7 }}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-[3.5rem] h-[3.5rem] rounded-full"
                      />
                      <div className="font-Satoshi text-[1.7rem] sm:text-[2rem] flex flex-col justify-between h-[5.5rem]">
                        <h5 className="capitalize">{name}</h5>
                        <p>{comment}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>

              <div className="flex items-center justify-between text-[1.5rem] sm:text-[2rem]">
                <form className=" w-full relative" onSubmit={submitHandler}>
                  <input
                    type="text"
                    placeholder="Join conversation..."
                    value={chat}
                    className="w-[95%] sm:w-[90%] h-[3.5rem] sm:h-[4.5rem] bg-transparent border border-white rounded-full px-8"
                    onChange={(e) => setChat(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="submit-btn text-[2rem] sm:text-[3rem] text-white absolute top-[.8rem] right-[3rem] sm:right-[9rem]"
                  >
                    <RiSendPlaneFill />
                  </button>
                </form>
                <button className="like text-[2rem] sm:text-[3rem] text-[#E31616]  p-2 sm:p-4 rounded-full bg-[#777]">
                  <FaHeart />
                </button>
                <div className="floatlikes">
                  <span>
                    <FaHeart />
                  </span>
                  <span>
                    <FaHeart />
                  </span>
                  <span>
                    <FaHeart />
                  </span>
                  <span>
                    <FaHeart />
                  </span>
                  <span>
                    <FaHeart />
                  </span>
                  <span>
                    <FaHeart />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default LiveBid;
