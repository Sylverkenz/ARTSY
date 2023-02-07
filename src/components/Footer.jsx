import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Footer() {
  return (
    <footer>
      <div className="footer mb-[6rem]">
        <h1>artsy.</h1>
        <article>
          <Link to="/">home</Link>
          <Link to="/market">marketplace</Link>
          <Link to="/auction">auctions</Link>
          <Link to="/drops">drops</Link>
        </article>
        <article>
          <Link to="/">blog</Link>
          <Link to="/">wallets</Link>
          <Link to="/">rates</Link>
          <Link to="/">high bids</Link>
        </article>
        <article className="self-start">
          <p>
            <AiOutlineMail /> artsystudios@gmail.com
          </p>
          <p>
            <GoLocation />
            Lagos, Nigeria.
          </p>
        </article>
      </div>
      <p className="text-center text-[#333] text-[1.2rem] sm:text-[1.6rem] font-Poppins">
        Artsystudios &copy; 2022. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
