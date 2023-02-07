export const pageAnim = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 0.25, ease: "easeOut" } },
};

export const auctionSlide = {
  hidden: { opacity: 0.5 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  // exit: { opacity: 0, transition: { duration: 0.75, ease: "easeOut" } },
};
export const imgconSlide = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 3, ease: "easeOut" },
  },
  exit: { opacity: 0, transition: { duration: 2, ease: "easeOut" } },
};

export const cartSlide = {
  hidden: { x: "100%" },
  show: {
    x: "0%",
    transition: { duration: 0.75, ease: "easeOut" },
  },
  exit: { x: "-150%", transition: { duration: 0.25, ease: "easeOut" } },
};

export const cartItemr = {
  hidden: { x: "-100%" },
  show: { x: "0%", transition: { duration: 0.75, ease: "easeOut" } },
  exit: { x: "-100%", transition: { duration: 0.25, ease: "easeOut" } },
};

export const productList = {
  hidden: { y: 400, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
};

export const images = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const parent = {
  hidden: { opacity: 1 },
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
