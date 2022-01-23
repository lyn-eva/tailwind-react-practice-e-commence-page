import { useMemo } from "react";
import Gallery from "./Gallery";
import Detail from "./Detail";

const products = [
  {
    name: "Fall Limited Edition Sneakers",
    price: "125.00",
  },
];

function Product() {
  const items = products.map((product) => (
    <div key={product.name}  className='max-w-md mx-auto mt-20 md:flex md:max-w-[60rem] md:items-center md:gap-20 mobile:mt-36 mb-16 md:w-4/5 md:mx-auto'>
      {<Gallery />}
      <Detail name={product.name} price={product.price} />
    </div>
  ));

  return (
    <main>
      {items}
    </main>
  );
}

export default Product;
