import { useContext } from 'react';
import iconCart from '../../images/icon-cart.svg';
import Button from '../button/Button';
import Context from '../store/Context';

function Cart() {
  const ctx = useContext(Context);

  return (
    <div className="z-10 mobile:w-7 mobile:h-7">
      <img className="h-full" src={iconCart} alt="cart" />
      <div className='absolute top-20 left-1/2 -translate-x-1/2 w-11/12 p-6 bg-white rounded-lg'>
        <h3 className='text-1xl font-bold mb-4'>Cart</h3>
        <hr/>
        <ul>

        </ul>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;
