import { useState } from "react";
import { defaultImg, previewImg } from "./img-path";
import iconNext from "../../images/icon-next.svg";
import iconPrev from "../../images/icon-previous.svg";

function Gallery() {
  const [imgPos, setImgPos] = useState(0);
  const rightArrowHandler = () => {
    return setImgPos((prevState) => (imgPos === 3 ? 0 : prevState + 1));
  };
  const leftArrowHandler = () => {
    return setImgPos((prevState) => (imgPos === 0 ? 3 : prevState - 1));
  };

  return (
    <div className="">
      <div className="relative">
        <span
          onClick={leftArrowHandler}
          className="absolute top-1/2 left-4 w-10 h-10 z-10 bg-white shadow-md rounded-full"
        >
          <img className="mt-3.5 ml-3.5 w-[9px]" src={iconPrev} alt="prev" />
        </span>
        <img className="w-full" src={defaultImg[imgPos]} alt="imgB1" />
        <span
          onClick={rightArrowHandler}
          className="absolute top-1/2 right-4 w-10 h-10 z-10 bg-white shadow-md rounded-full"
        >
          <img className="mt-3.5 ml-3.5 w-[9px]" src={iconNext} alt="next" />
        </span>
      </div>
      <div></div>
    </div>
  );
}

export default Gallery;
