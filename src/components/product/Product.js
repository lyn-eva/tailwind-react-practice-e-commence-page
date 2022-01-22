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
    <div key={product.name}>
      <Gallery />
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
