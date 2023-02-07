import React, { useRef, useState, useEffect } from "react";
import { useProductContext } from "../contexts/Productcontext";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getTime } from "../utils/helpers";

function AuctionSlider() {
  const image = useRef(null);
  const slider = useRef(null);
  const carousel = useRef(null);
  const { products, time, setTime } = useProductContext();
  const bids = products.slice(12, 16);
  const [curId, setCurId] = useState(13);

  useEffect(() => {
    const timeUpdate = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => {
      clearInterval(timeUpdate);
    };
  }, [time]);

  function nextPic() {
    let firstImg = slider.current.querySelectorAll("img")[0];
    let firstImgWidth = firstImg.clientWidth;
    carousel.current.scrollLeft += firstImgWidth;
    setCurId(curId >= 16 ? 16 : curId + 1);
  }

  function prevPic() {
    let firstImg = slider.current.querySelectorAll("img")[0];
    let firstImgWidth = firstImg.clientWidth;
    carousel.current.scrollLeft += -firstImgWidth;
    setCurId(curId <= 13 ? 13 : curId - 1);
  }

  // let isDragStart = false,
  //   prevPageX,
  //   prevScrollLeft;

  // function dragStart(e) {
  //   isDragStart = true;
  //   prevPageX = e.pageX;
  //   prevScrollLeft = e.currentTarget.scrollLeft;
  // }
  // function dragging(e) {
  //   if (!isDragStart) return;
  //   e.preventDefault();
  //   let scrollDiff = e.pageX - prevPageX;
  //   e.currentTarget.scrollLeft = prevScrollLeft - scrollDiff;
  // }

  // function dragStop(e) {
  //   isDragStart = false;
  // }

  return (
    <>
      <div
        className="overflow-hidden scroll-smooth text-[2rem] mdl:text-[2.5rem]"
        ref={carousel}
      >
        <span id="icon" className="left-4  sm:left-8" onClick={prevPic}>
          <FaChevronLeft />
        </span>
        <div
          className="slider flex px-4 mdl:px-[10rem] gap-8 sm:gap-16 cursor-pointer w-max "
          ref={slider}
        >
          {bids.map((bids) => {
            const { id, name, url, creator } = bids;
            return (
              <figure
                key={id}
                className="w-[24rem] sm:w-[42rem] mdl:w-[48rem]  h-[19rem] sm:h-[23rem] mdl:h-[30rem] relative rounded-[15px] overflow-hidden"
              >
                <img
                  src={url}
                  alt={name}
                  ref={image}
                  className="sliderimgs w-[100%] object-cover"
                />
                <div className="flex items-end justify-center py-[4rem] absolute top-0 left-0 w-[100%] h-[100%] font-STIX text-white text-[2.5rem] sm:text-[4rem]">
                  <span className="block bg-[rgba(245,244,244,0.24)] rounded-lg backdrop-blur-[1.5px] px-8">
                    {getTime(time)}
                  </span>
                </div>
                <Link
                  to={`/auction/${id}`}
                  className="block absolute top-0 left-0 w-[100%] h-[100%]"
                ></Link>
              </figure>
            );
          })}
        </div>
        <span id="icon" className="right-4 sm:right-8" onClick={nextPic}>
          <FaChevronRight />
        </span>
      </div>
      <div className="w-fit mx-auto mt-[2rem]">
        {bids.map((bids) => {
          const { id } = bids;
          return (
            <button
              key={id}
              className="w-4 h-4 mr-4 rounded-full"
              style={{ background: id === `p${curId}` ? "blue" : "#777" }}
            ></button>
          );
        })}
      </div>
    </>
  );
}

export default AuctionSlider;
