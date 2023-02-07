import React, { useState, useEffect } from "react";
import { creators } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { imgconSlide } from "../utils/animations";

function Creators() {
  const [creator, setCreator] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCreator(creator + 1);
      if (creator >= creators.length - 1) {
        setCreator(0);
      }
    }, 6000);
  }, [creator]);

  const { id, image } = creators[creator];
  return (
    <section className="px-2 mdl:px-[10rem] py-[1rem] sm:py-[6rem] bg-[#E2E2E2]">
      <div className="creators relative">
        <div className="texts font-CDisplay ">
          <h5>
            top creators of <br /> the week
          </h5>
          <p>
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there’s always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
          <h4>
            circa
            <span>1985</span>
          </h4>
        </div>
        <div className="imgcon">
          <AnimatePresence mode="wait">
            <motion.img
              variants={imgconSlide}
              initial="hidden"
              animate="show"
              exit="exit"
              key={id}
              src={image}
              alt={image}
              className="w-full"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Creators;
