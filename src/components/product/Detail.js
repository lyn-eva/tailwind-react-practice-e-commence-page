import { useState, useContext } from "react";
import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";
import cartIcon from "../../images/icon-cart.svg";
import Context from "../store/Context";
import Button from "../button/Button";

function Detail(props) {
  const [amount, setAmount] = useState(0);
  const ctx = useContext(Context);

  const amountAddHandler = () => {
    setAmount(prevState => ++prevState)
  }
  const amountReduceHandler = () => {
    setAmount(prevState => prevState === 0 ? 0 : --prevState)
  }
  const addToCartHandler = () => {
    setAmount(0);
    ctx.addCartItem(props.name, props.price, amount);
  }

  return (
    <div className="bg-white p-[0.05px]">
      <div className="w-11/12 mx-auto mt-5">
        <h2 className="text-xs font-bold tracking-wider text-orange">
          SNEAKER COMPANY
        </h2>
        <h1 className="text-3xl font-bold mt-2 text-v-d-blue">
          {props.name}
        </h1>
        <p className="text-[15px] text-d-g-blue mt-3">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="w-11/12 mx-auto mt-4 mb-20">
        <div className="flex justify-between items-center">
          <p className="flex place-items-center text-[1.6rem] font-bold text-v-d-blue">
            ${props.price}
            <span className="inline-block font-bold text-[15px] text-orange bg-pale-orange py-[2px] px-[4px] ml-3 rounded">
              50%
            </span>
          </p>
          <span className='font-bold text-g-blue relative after:absolute after:top-3 after:left-0 after:contents-[""] after:w-full after:h-[1px] after:bg-g-blue'>
            ${props.price}
          </span>
        </div>
        <div className="flex justify-between items-center px-6 py-3.5 mt-5 rounded-md bg-l-g-blue">
          <span onClick={amountReduceHandler} className="w-4">
            <img className="w-full" src={minusIcon} alt="minus" />
          </span>
          <span className="font-bold text-2xl">{amount}</span>
          <span onClick={amountAddHandler} className="w-4">
            <img className="w-full" src={plusIcon} alt="minus" />
          </span>
        </div>
        <Button
          onClick={addToCartHandler}
        >
          <img
            className="inline brightness-0 invert w-5 mr-4 -mt-1"
            src={cartIcon}
            alt="cart"
          />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default Detail;
