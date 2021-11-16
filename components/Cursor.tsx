import AnimatedCursor from "react-animated-cursor";
const Cursor = ({ color }) => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color={color}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
};
export default Cursor;
