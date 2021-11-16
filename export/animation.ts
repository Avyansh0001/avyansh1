export const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
export const showMenu = {
  enter: {
    opacity: 1,
    y: 0,
    display: "flex",
    transition: {
      duration: 0.07,
    },
  },
  exit: {
    y: -5,
    opacity: 0,
    transition: {
      duration: 0.07,
    },
    transitionEnd: {
      display: "none",
    },
  },
};
