import React from "react";
import useWindowResize from ".";

const WindowResizeTest = () => {
  const { width, height } = useWindowResize();
  return (
    <>
      <div>Width: {width}</div>
      <div>Height: {height}</div>
    </>
  );
};

export default WindowResizeTest;
