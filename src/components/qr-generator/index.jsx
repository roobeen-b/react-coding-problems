import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter a text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generate QR
        </button>
      </div>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrCode}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default QrGenerator;
