import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  Hero,
  FeatProducts,
  AuctionOver,
  Creators,
  NewsLetter,
} from "../components";
import { motion } from "framer-motion";
import { pageAnim } from "../utils/animations";
import { FaArrowRight } from "react-icons/fa";


function HomePage() {
 
  
  return (
    <motion.article
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className="overflow-hidden"
    >
      <Hero />
      <FeatProducts />
      <AuctionOver />
      <article className="home_links">
        <Link to="/market">
          explore marketplace
          <span>
            <FaArrowRight />
          </span>
        </Link>
        <Link to="/auction">
          see auctions
          <span>
            <FaArrowRight />
          </span>
        </Link>
      </article>
      <Creators />
      <NewsLetter />
      <Footer />
    </motion.article>
  );
}

export default HomePage;
