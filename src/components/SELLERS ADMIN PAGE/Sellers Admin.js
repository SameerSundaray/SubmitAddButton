import { useState, useEffect } from "react";
import ProductForm from "../PRODUCT FORM/Product Form";
import ProductList from "../PRODUCT LIST/Product List";

const Sellers = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedProducts = Object.keys(localStorage)
      .filter((key) => key.startsWith("All-data"))
      .map((key) => JSON.parse(localStorage.getItem(key)));
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    const totalPrice = products.reduce(
      (total, product) => total + parseFloat(product.sellingPrice),
      0
    );
    setTotalPrice(totalPrice);
  }, [products]);

  const AddingProduct = (newProduct) => {
    const uniqueKey = `All-data ${newProduct.productId}   ${Date.now()}`;
    localStorage.setItem(uniqueKey, JSON.stringify(newProduct));
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteHandle = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.productId !== productId)
    );

    const productKeys = Object.keys(localStorage).filter((key) =>
      key.includes(`All-data ${productId}`)
    );
    if (productKeys.length > 0) {
      productKeys.forEach((key) => {
        localStorage.removeItem(key);
      });
    }
  };

  return (
    <div className="informatics">
    <div className="information">
      <ProductForm AddProduct={AddingProduct} />
      <ProductList products={products} Removing={deleteHandle} />
      <h3 className="Price-total">TOTAL AMOUNT :- ${totalPrice}</h3>
    </div>
    </div>
  );
};

export default Sellers;
