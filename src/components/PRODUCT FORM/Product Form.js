import { useState } from "react";

const ProductForm = ({ AddProduct }) => {
  const [product, setProduct] = useState({
    productId: "",
    sellingPrice: "",
    productName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;   
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    AddProduct(product);
    setProduct({
      productId: "",
      sellingPrice: "",
      productName: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="all-cases-seller">
          <h1 className="pROJECT-NAME">SELLERS ADMIN</h1>
          <label className="ID-set">PRODUCT ID  : - </label>
          <input
            className="Set-product-id"
            type="number"
            placeholder="ENTER PRODUCT ID"
            name="productId"
            value={product.productId}
            onChange={handleInputChange}
          />
          <br />
          <label>SELLING PRICE:- </label>
          <input
            type="number"
            className="Set-Selling-price"
            placeholder="ENTER SELLING PRICE"
            name="sellingPrice"
            value={product.sellingPrice}
            onChange={handleInputChange}
          />
          <br />
          <label>PRODUCTNAME:</label>
          <input
            type="text"
            placeholder="ENTER PRODUCT NAME"
            name="productName"
            className="set-Product-name"
            value={product.productName}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit" className="Set-button">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
