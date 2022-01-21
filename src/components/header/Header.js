import { useState } from "react";
import logo from "../../images/logo.svg";
import iconCart from "../../images/icon-cart.svg";
import imageAvatar from "../../images/image-avatar.png";
import iconClose from "../../images/icon-close.svg";
import iconMenu from "../../images/icon-menu.svg";

function Header() {
  const [navOn, setNavOn] = useState(false);

  const menuClickHandler = () => {
    setNavOn(prevState => !prevState);
  }

  return (
    <header className="relative bg-white">
      <div className="flex justify-between py-5 mx-auto w-11/12 max-w-7xl">
        <div className="flex items-center">
          <img className='mr-4 mobile:hidden' onClick={menuClickHandler} src={iconMenu} alt='menu'/>
          <div className="w-32">
            <img src={logo} alt="sneakers" />
          </div>
          <nav className="ml-8 ">
            <ul className={`absolute top-0 left-0 h-screen pl-8 pr-28 pt-20 bg-white shadow-md -translate-x-${navOn ? 0 : 60} duration-300 mobile:static mobile:flex gap-4 mobile:p-0 mobile:h-fit mobile:shadow-none mobile:translate-x-0`}>
              <img
                className="absolute top-8 mobile:hidden"
                onClick={menuClickHandler}
                src={iconClose}
                alt="close"
              />
              <li className="font-bold mobile:font-normal">
                <a href="">Collections</a>
              </li>
              <li className="font-bold mt-3 mobile:font-normal mobile:mt-0">
                <a href="">Men</a>
              </li>
              <li className="font-bold mt-3 mobile:font-normal mobile:mt-0">
                <a href="">Women</a>
              </li>
              <li className="font-bold mt-3 mobile:font-normal mobile:mt-0">
                <a href="">About</a>
              </li>
              <li className="font-bold mt-3 mobile:font-normal mobile:mt-0">
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <button className="mobile:w-7 mobile:h-7">
            <img className="h-full" src={iconCart} alt="cart" />
          </button>
          <div className="inline-block w-9 border-2 border-orange rounded-full mobile:w-12 mobile:border-[3px]">
            <img src={imageAvatar} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
