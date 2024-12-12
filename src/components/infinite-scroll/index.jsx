import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${10 * count}`
      );
      const data = await response.json();
      setProducts((prevData) => [...prevData, ...data.products]);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  console.log(products);
  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }

    fetchData();
    setCount(count + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count, loading]);

  //   if (loading) return <div>Loading</div>;

  return (
    <>
      <div className="load-more-container">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div className="product-item" key={product.id}>
              <div className="product-thumbnail">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-desc">{product.description}</div>
            </div>
          ))
        ) : (
          <div>No Products found</div>
        )}
      </div>
      {loading ? <p>Loading</p> : null}
    </>
  );
};

export default InfiniteScroll;
