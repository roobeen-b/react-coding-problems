import React, { useEffect, useState } from "react";
import "./styles.css";

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${20 * count}&skip=0`
        );
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchData();
  }, [count]);

  const handleLoadMore = () => {
    setCount(count + 1);
  };

  if (loading) return <div>"Loading"</div>;

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

      <div className="load-more-button" onClick={handleLoadMore}>
        <button disabled={products && products.length === 100 ? true : false}>
          Load More Products
        </button>
        {products && products.length === 100 && (
          <p>You have reached the end.</p>
        )}
      </div>
    </>
  );
};

export default LoadMore;
