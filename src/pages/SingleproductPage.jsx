import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCartContext } from "../contexts/Cartcontext";
import { useProductContext } from "../contexts/Productcontext";
import { Dir, Carousel, AmountButtons } from "../components";
import { FaEthereum } from "react-icons/fa";
import { motion } from "framer-motion";
import { pageAnim } from "../utils/animations";
import { formatPrice } from "../utils/helpers";

function SingleproductPage() {
  const { id } = useParams();
  const { products } = useProductContext();
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);
  const product = products.find((p) => p.id === id);

  const {
    id: sku,
    name,
    category,
    description,
    url,
    price,
    creator,
    origin,
    views,
    stock,
    year,
  } = product;

  function increase() {
    const newAmount = amount < stock ? amount + 1 : stock;
    console.log(newAmount);
    setAmount(newAmount);
  }

  function decrease() {
    const newAmount = amount <= 1 ? 1 : amount - 1;
    setAmount(newAmount);
  }

  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className="px-4 md:px-[10rem]"
    >
      <Dir name={name} category={category} />
      <article className="flex flex-col mdl:flex-row mdl:border border-t border-[#333] my-16 mdl:my-24 duration-500">
        <div className="imgbox">
          <img src={url} alt={name} className="max-h-[70rem]" />
        </div>
        <div className="descBox mdl:w-[50%]">
          <article className="title">
            <h5 className="nametext">{name}</h5>
            <h6 className="ethtext">
              <span>
                <FaEthereum />
              </span>
              {price.eth}
            </h6>
            <h6 className="usdtext mdl:hidden">{formatPrice(price.usd)}</h6>
          </article>
          <article className="maindesc">
            <h5>
              Creator: <span className="text-[#4693ed]">{creator}</span>
            </h5>
            <h5>{origin}</h5>
            <h5>
              total views: <span>{views}</span>
            </h5>
            {stock > 0 ? (
              <article>
                <AmountButtons
                  increase={increase}
                  decrease={decrease}
                  amount={amount}
                />

                <Link
                  to="/cart"
                  className="addtocart"
                  onClick={() => addToCart(id, amount, product)}
                >
                  add to cart
                </Link>
              </article>
            ) : null}
          </article>
          <article className="mt-[5rem] mdl:mt-0">
            <Carousel title="description" data={description} />
            <Carousel
              title="status"
              data={stock ? "available" : "unavailable"}
            />
          </article>
        </div>
      </article>
    </motion.div>
  );
}

export default SingleproductPage;
