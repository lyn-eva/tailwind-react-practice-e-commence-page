import { useState } from "react";
import logo from "../../images/logo.svg";
import imageAvatar from "../../images/image-avatar.png";
import iconClose from "../../images/icon-close.svg";
import iconMenu from "../../images/icon-menu.svg";
import Cart from "../cart/Cart";

function Header() {
  const [navOn, setNavOn] = useState(false);

  const menuClickHandler = () => {
    setNavOn((prevState) => !prevState);
  };

  return (
    <header className="z-20 fixed top-0 left-0 w-screen bg-white shadow-sm">
      <div className="relative">
        <div className="flex justify-between py-4 mx-auto w-11/12 max-w-7xl mobile:py-5">
          <div className="flex items-center">
            <img
              className="mr-4 mobile:hidden hover:cursor-pointer"
              onClick={menuClickHandler}
              src={iconMenu}
              alt="menu"
            />
            <div className="w-32">
              <img src={logo} alt="sneakers" />
            </div>
            <nav className="ml-8 ">
              <ul
                className={`absolute z-20 top-0 left-0 h-screen pl-8 pr-28 pt-20 bg-white shadow-md -translate-x-60 ${navOn ? 'translate-x-0' : ''} transform duration-300 mobile:static mobile:flex gap-4 mobile:p-0 mobile:h-fit mobile:shadow-none mobile:translate-x-0`}
              >
                <img
                  className="absolute top-8 mobile:hidden"
                  onClick={menuClickHandler}
                  src={iconClose}
                  alt="close"
                />
                <li className='hdr-menu-item'>
                  <a href="">Collections</a>
                </li>
                <li className="hdr-menu-item">
                  <a href="">Men</a>
                </li>
                <li className="hdr-menu-item">
                  <a href="">Women</a>
                </li>
                <li className="hdr-menu-item">
                  <a href="">About</a>
                </li>
                <li className="hdr-menu-item">
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <Cart />
            <div className="inline-block w-9 border-2 border-orange rounded-full mobile:w-12 mobile:border-[3px]">
              <img src={imageAvatar} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
