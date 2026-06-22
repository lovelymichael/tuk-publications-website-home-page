import React, { useEffect, useState } from "react";
import "../assets/styles/flipbook.css";
import page1 from "../assets/images/kindergartner/play-learn-series/nursery/1.png";
import page2 from "../assets/images/kindergartner/play-learn-series/nursery/2.png";
import page3 from "../assets/images/kindergartner/play-learn-series/nursery/3.png";
import page4 from "../assets/images/kindergartner/play-learn-series/nursery/4.png";
import page5 from "../assets/images/kindergartner/play-learn-series/nursery/5.png";
import page6 from "../assets/images/kindergartner/play-learn-series/nursery/6.png";


const pages = [page1, page2, page3, page4, page5, page6];

const FlipBook = () =>{
const [flippedPages, setFlippedPages] = useState([]);

useEffect(()=>{
    let current=0;

    const interval =setInterval(()=>{
        current++;

        if(current>pages.length){
            setFlippedPages([]);
            current=0;
        }else{
            setFlippedPages((prev)=>[...prev, current]);
        }
    }, 3000);
    return () => clearInterval(interval);
}, []);

    return(

        <div className="flipedbook-banner bg-[#dbeaf5] py-16 mt-10 flex justify-center">
            <div className="book">
                {pages.map((page, index)=>(
                    <div key={index}
                    className={`pages ${
                        flippedPages.includes(index+1) ? "flipped" : ""
                    }`}
                    style={{zIndex:pages.length - index}}>
                    <div className="side front border border-[4px] border-[#ccc]">
                        <img src={page} alt=""/>
                    </div>

                    <div className="side back border border-[4px] border-[#ccc]">
                        <img src={page} alt=""/>
                    </div>
                    </div>
                ))}
            </div>
              <div>
             <button className="mt-10 bg-black text-white px-6 py-2 rounded absolute bottom-6 right-10">
          EXPLORE
        </button>    
            </div>          
        </div>
        
    )
}
export default FlipBook;