import React, { useEffect, useState } from "react";
import "./styles.css";

const ProgressScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const responseData = await response.json();

        if (responseData.products && responseData.products.length > 0)
          setData(responseData.products);
      } catch (e) {
        console.log(e);
        setErrorMsg(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    let totalScrolledheight =
      document.body.scrollTop || document.documentElement.scrollTop;
    let totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((totalScrolledheight / totalHeight) * 100);
  }

  //   console.log(
  //     document.body.scrollTop,
  //     document.documentElement.scrollTop,
  //     document.documentElement.scrollHeight,
  //     document.documentElement.clientHeight
  //   );

  console.log(scrollPercentage);

  if (errorMsg) return <div>Error occured! {errorMsg}</div>;

  if (loading) return <div>Fetching data...</div>;

  return (
    <div className="main-container">
      <div className="progress-scroll-header">
        <h1>Progress Scroll Indicator</h1>
        <div className="progress-scroll-indicator-container">
          <div
            className="progress-scroll-indicator"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="progress-scroll-body">
        {data && data.length > 0
          ? data.map((item) => (
              <div key={item.id} className="">
                {item.title}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProgressScrollIndicator;
