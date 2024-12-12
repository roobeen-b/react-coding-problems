import React, { useRef } from "react";
import useFetch from "../useFetch/useFetch";

const ScrollToTopBottom = () => {
  const bottomRef = useRef(null);

  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (error) return <div>Error while fetching! {error}</div>;

  if (loading) return <div>Loading! Please wait ...</div>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Scroll to Top or Bottom</h2>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul>
        {data && data.products && data.products.length > 0 ? (
          data.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <div>No records found!</div>
        )}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef} />
    </div>
  );
};

export default ScrollToTopBottom;
