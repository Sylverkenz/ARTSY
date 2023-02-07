import React from "react";

function NewsLetter() {
  return (
    <section className="px-6 mdl:px-[10rem] text-center mt-[10rem] sm:mt-[20rem] mdl:mt-[14rem]">
      <article className="newsletter">
        <h5>newsletter</h5>
        <p>Subscribe to get daily updates on new drops & exciting deals</p>
        <h6>subscribe to our daily updates and newsletters</h6>
        <form className="form">
          <input type="email" placeholder="enter your email" required />
          <button type="submit">subscribe</button>
        </form>
      </article>
    </section>
  );
}

export default NewsLetter;
