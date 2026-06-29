import React, { useEffect, useState } from "react";
import "../assets/styles/flipbook.css";

const FlipBook = ({ pages }) => {
  const [flippedPages, setFlippedPages] = useState([]);

   const pagePairs = [];

  for (let i = 0; i < pages.length - 1; i++) {
    pagePairs.push({
      front: pages[i],
      back: pages[i + 1],
    });
  }

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current++;

      if (current > pages.length) {
        setFlippedPages([]);
        current = 0;
      } else {
        setFlippedPages((prev) => [...prev, current]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [pages]);

  return (
    <div className="flipedbook-banner bg-[#dbeaf5] py-16 mt-10 flex justify-center">
      <div className="book">
  {pages.map((page, index) => (
    <div
      key={index}
      className={`page ${
        flippedPages.includes(index + 1) ? "flipped" : ""
      }`}
      style={{
        zIndex: flippedPages.includes(index + 1)
          ? index + 1
          : pages.length - index,
      }}
    >
      <div className="side-1 border border-[4px] border-[#ccc]">
        <img src={page} alt="" />
      </div>

      <div className="side-2 border border-[4px] border-[#ccc]">
        <img src={page} alt="" />
      </div>
    </div>
  ))}
</div>
      <div>
        <button className="mt-10 bg-black text-white font-bold text-xl px-6 py-2 rounded absolute bottom-6 right-10">
          EXPLORE
        </button>
      </div>
    </div>
  );
};
export default FlipBook;
