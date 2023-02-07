import React from "react";
import { pageAnim } from "../utils/animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import AuctionSlider from "../components/AuctionSlider";
import { useProductContext } from "../contexts/Productcontext";

function AuctionPage() {
  const { products } = useProductContext();
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show"
      className="font-Satoshi"
    >
      <div className="px-8 mdl:px-[10rem] baseBtext text-[#BCB7B7] capitalize mb-[4rem]">
        <Link to="/">home</Link>/{" "}
        <Link className="text-black" to="/auction">
          Auctions
        </Link>
        <h2 className="text-[1.8rem] mdl:text-[2.5rem] text-black mt-[3rem]">
          Here’s an overview of products actively on auction, explore!
        </h2>
      </div>

      <AuctionSlider />
      <div className="topBids text-[2rem] mdl:text-[2.5rem]  my-[10rem]">
        {products.slice(4, 6).map((product) => {
          const { id, url, name, creator, price } = product;
          return (
            <article key={id}>
              <div className="imgDesc flex flex-col h-[28rem] mdl:h-[48rem] border rounded-[15px] capitalize">
                <span className="p-4 border rounded-full self-end mx-4 mdl:mx-8 my-2 mdl:my-6 text-red-600">
                  <FaHeart />
                </span>
                <img
                  src={url}
                  alt=""
                  className="h-[65%] mdl:h-[65%] w-full mb-2 mdl:mb-8"
                />
                <h5 className="pl-4 mdl:pl-8">{name}</h5>
              </div>
              <div className="textDesc py-4 mdl:py-[3rem] capitalize">
                <h5>
                  Creator : <span>{creator}</span>
                </h5>
                <h5>
                  Date : <span>{`${day}/${month + 1}/${year}`}</span>
                </h5>
                <h5>
                  Price : <span>{price.eth} ETH</span>
                </h5>
              </div>
              <div className="flex items-center justify-between bg-[#f4f4f4] p-6 rounded-[10px] text-[1.8rem]">
                <div>
                  <h4 className="mb-4 text-[#616161]">Current bid</h4>
                  <h5>0.987 ETH</h5>
                </div>
                <button
                  className="bg-[#3341C1] py-2 mdl:py-6
                px-8 mdl:px-20 rounded-[3px] text-white
                text-[2rem] mdl:text-[2.2rem]"
                >
                  <Link to={`/auction/${id}`}>Place bid</Link>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </motion.div>
  );
}

export default AuctionPage;
