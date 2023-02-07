import { useState, useEffect } from "react";
import { heroimgs } from "../utils/data";
import heroimg from "../assets/images/heroimg.png";
import { animate, AnimatePresence, motion } from "framer-motion";

function Hero() {
  const [index0, setIndex0] = useState(0);
  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(2);
  const [index3, setIndex3] = useState(3);

  useEffect(() => {
    const change = setInterval(() => {
      setIndex0(index0 + 1);
      if (index0 >= heroimgs.length - 1) {
        setIndex0(0);
      }

      setIndex1(index1 + 1);
      if (index1 >= heroimgs.length - 1) {
        setIndex1(0);
      }

      setIndex2(index2 + 1);
      if (index2 >= heroimgs.length - 1) {
        setIndex2(0);
      }

      setIndex3(index3 + 1);
      if (index3 >= heroimgs.length - 1) {
        setIndex3(0);
      }
    }, 3000);

    return () => {
      clearInterval(change);
    };
  }, [index0]);

  const image1 = {
    hidden: { x: "100%" },
    show: { x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const image2 = {
    hidden: { x: "-100%" },
    show: { x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const hero = {
    hidden: { y: "-100%" },
    show: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const hero1 = {
    hidden: { y: 100 },
    show: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const par = {
    hidden: { x: "100%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: .15,
        ease: "easeOut",
        staggerChildren: 0.35,
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.header
      variants={parent}
      initial="hidden"
      animate="show"
      className="header"
    >
      <div className="herotext max-w-[80rem] mx-auto text-center">
        <div className="overflow-hidden">
          <motion.h1 variants={hero}>Photography is poetry &</motion.h1>
        </div>
        <div className="overflow-hidden -mt-8">
          <motion.h1 variants={hero1}> beautiful untold stories</motion.h1>
        </div>
        <motion.p variants={par} className="baseBtext">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </motion.p>
      </div>
      <figure className="hidden heroimgs mdl:flex justify-between items-center">
        <article>
          <AnimatePresence>
            <motion.img
              key={index0}
              variants={image1}
              src={heroimgs[index0].image}
              alt=""
            />
          </AnimatePresence>
        </article>
        <article>
          <AnimatePresence>
            <motion.img
              key={index1}
              variants={image1}
              src={heroimgs[index1].image}
              alt=""
            />
          </AnimatePresence>
        </article>

        <article>
          <AnimatePresence>
            <motion.img
              key={index2}
              variants={image2}
              src={heroimgs[index2].image}
              alt=""
            />
          </AnimatePresence>
        </article>
        <article>
          <AnimatePresence>
            <motion.img
              key={index3}
              variants={image1}
              src={heroimgs[index3].image}
              alt=""
            />
          </AnimatePresence>
        </article>
      </figure>

      <figure className="mdl:hidden mt-[2rem] px-8">
        <img src={heroimg} alt={heroimg} />
      </figure>
    </motion.header>
  );
}

export default Hero;
