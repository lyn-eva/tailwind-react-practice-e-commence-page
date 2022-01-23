import { useState } from "react";
import { defaultImg, previewImg } from "./img-path";
import iconNext from "../../images/icon-next.svg";
import iconPrev from "../../images/icon-previous.svg";

function Gallery() {
  const [imgPos, setImgPos] = useState(0);
  const rightArrowHandler = () => {
    return setImgPos((prevState) => (imgPos === 3 ? 0 : ++prevState));
  };
  const leftArrowHandler = () => {
    return setImgPos((prevState) => (imgPos === 0 ? 3 : --prevState));
  };
  const previewClickHandler = (e) => {
    return setImgPos(e.target.id);
  };

  return (
    <div className="">
      <div className="relative">
        <span
          onClick={leftArrowHandler}
          className="absolute top-1/2 left-4 w-10 h-10 z-10 bg-white shadow-md rounded-full md:hidden"
        >
          <img className="mt-3.5 ml-3.5 w-[9px]" src={iconPrev} alt="prev" />
        </span>
        <img
          className="w-full md:rounded-xl"
          src={defaultImg[imgPos]}
          alt="imgB1"
        />
        <span
          onClick={rightArrowHandler}
          className="absolute top-1/2 right-4 w-10 h-10 z-10 bg-white shadow-md rounded-full md:hidden"
        >
          <img className="mt-3.5 ml-3.5 w-[9px]" src={iconNext} alt="next" />
        </span>
      </div>
      <div className="hidden md:flex md:gap-4 md:mt-5">
        {previewImg.map((url, i) => (
          <button
            key={url}
            onClick={previewClickHandler}
            id={i}
            className="rounded-md hover:cursor-pointer focus:opacity-60 focus:ring-[2px] focus:ring-orange"
          >
            <img
              className="rounded-md pointer-events-none"
              src={url}
              alt="preview"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
