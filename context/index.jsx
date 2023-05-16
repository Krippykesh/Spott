import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, SetProduct] = useState([]);
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    async function getProductFromApi() {
      const Rep = await fetch("https://dummyjson.com/products");
      const Final = await Rep.json();
      if (Final) {
        SetLoading(false);
        SetProduct(Final.products);
      }
    }
    getProductFromApi();
  }, []);
  console.log(products);
  return (
    <Context.Provider value={(products, Loading)}>{children}</Context.Provider>
  );
};
export default ProductContext;
