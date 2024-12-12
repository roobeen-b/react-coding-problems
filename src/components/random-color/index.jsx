import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [colorType, setColorType] = useState("hex");

  function genarateRandomHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexValue = "#";
    for (let i = 0; i < 6; i++) {
      hexValue += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexValue;
  }

  function generateRandomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
  }

  function handleRandomColor() {
    const randomColor =
      colorType === "hex" ? genarateRandomHex() : generateRandomRGB();

    // const randomColor =
    //   colorType === "hex"
    //     ? "#" + Math.floor(Math.random() * 16777215).toString(16)
    //     : `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    //         Math.random() * 255
    //       )}, ${Math.floor(Math.random() * 255)})`;

    setColor(randomColor);
  }

  function handleHexColor() {
    setColorType("hex");
    handleRandomColor();
  }

  function handleRGBColor() {
    setColorType("rgb");
    handleRandomColor();
  }
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={handleHexColor}>Generate Hex Color</button>
      <button onClick={handleRGBColor}>Generate RGB Color</button>
      <button onClick={handleRandomColor}>Generate Random Color</button>

      <h1
        style={{
          color: "white",
        }}
      >
        {colorType === "hex" ? "Hex" : "RGB"} Color
      </h1>

      <h1
        style={{
          color: "white",
        }}
      >
        Color: {color}
      </h1>
    </div>
  );
};

export default RandomColor;
