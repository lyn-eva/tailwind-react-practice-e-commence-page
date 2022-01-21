import { useState } from "react";
import { defaultImg, previewImg } from "./img-path";

function Gallery() {
  const [imgPos, setImgPos] = useState(0);
  const rightArrowHandler = () => {
    if (imgPos === 3) return;
    setImgPos((prevState) => (prevState + 1));
  };
  const leftArrowHandler = () => {
    if (imgPos === 0) return;
    setImgPos((prevState) => (prevState - 1));
  };

  return (
    <div className="">
      <div className="relative">
        <span onClick={leftArrowHandler} className="bg-left-arrow bg-no-repeat absolute top-1/2 left-4 -translate-y-1/2 bg-center w-10 h-10 z-10 bg-white shadow-md rounded-full bg-[length:9px_13px]"></span>
        <img className="w-full" src={defaultImg[imgPos]} alt="imgB1" />
        <span onClick={rightArrowHandler} className="bg-right-arrow bg-no-repeat absolute top-1/2 right-4 -translate-y-1/2 bg-center w-10 h-10 z-10 bg-white shadow-md rounded-full bg-[length:9px_13px]"></span>
      </div>
      <div></div>
    </div>
  );
}

export default Gallery;
