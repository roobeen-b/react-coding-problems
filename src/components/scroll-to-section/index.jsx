import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef(null);
  const section = 2;

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollToSection() {
    const position = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h2>Scroll to Scetion</h2>
      <button onClick={handleScrollToSection}>Scroll to section</button>
      {data.map((item, index) => (
        <div style={item.style} ref={index === section ? ref : null}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
