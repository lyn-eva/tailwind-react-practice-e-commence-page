import React from "react";
import logo from "../../images/logo.svg";
import iconCart from "../../images/icon-cart.svg";
import imageAvatar from "../../images/image-avatar.png";
import iconClose from "../../images/icon-close.svg";

function Header() {
  return (
    <header className='bg-white'>
      <div className="flex justify-between py-5 mx-auto w-11/12 max-w-7xl">
        <div className="flex items-center">
          <div className='w-32'>
            <img src={logo} alt="sneakers" />
          </div>
          <nav className="ml-8">
            <img className="hidden" src={iconClose} alt="close" />
            <ul className="flex gap-4">
              <li>
                <a href="">Collections</a>
              </li>
              <li>
                <a href="">Men</a>
              </li>
              <li>
                <a href="">Women</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <button className="w-7 h-7">
            <img className="h-full" src={iconCart} alt="cart" />
          </button>
          <div className="inline-block w-12 border-[3px] border-orange rounded-full">
            <img src={imageAvatar} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
