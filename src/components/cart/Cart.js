import { useContext, useState, useEffect } from "react";
import iconCart from "../../images/icon-cart.svg";
import iconDelete from '../../images/icon-delete.svg';
import { previewImg } from "../product/img-path";
import Button from "../button/Button";
import Context from "../store/Context";

const generateItems = (context, forceRender) => {
  return Object.keys(context.items).map((ItemName) => {
    const item = context.items[ItemName];

    const deleteHandler = () => {
      context.removeCartItem(ItemName);
      forceRender(prevState => !prevState); // last resolve
    }

    return (
      <li key={item.price} className='flex relative text-left'>
        <img className='w-12 rounded-md' src={previewImg[0]} alt={ItemName} />
        <div className='ml-4'>
          <p className='text-d-g-blue'>{ItemName}</p>
          <p>
            <span className='text-d-g-blue'>${item.price} x </span>
            <span className='text-d-g-blue'>{item.amount}</span>
            <span className='text-v-d-blue font-bold ml-3'>${item.total}.00</span>
          </p>
        </div>
        <img onClick={deleteHandler} className='absolute right-2 top-4' src={iconDelete} alt='delete'/>
      </li>
    );
  });
}

function Cart() {
  const [showCart, setShowCart] = useState(false);
  const [render, setRender] = useState(true);
  const ctx = useContext(Context);
  const cartItems = generateItems(ctx, setRender);

  const cartClickHandler = () => {
    setShowCart(prevState => !prevState);
  }

  return (
    <div className="z-10 mobile:w-7 mobile:h-7">
      <img onClick={cartClickHandler} className="h-full" src={iconCart} alt="cart" />
      <div className={`${showCart ? '' : 'hidden'} absolute top-20 left-1/2 -translate-x-1/2 w-[95%] p-6 bg-white rounded-lg shadow-md`}>
        <h3 className="text-1xl font-bold mb-4">Cart</h3>
        <hr />
        <ul className='mt-5 text-center'>{cartItems.length ? cartItems : 'no item'}</ul>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;
