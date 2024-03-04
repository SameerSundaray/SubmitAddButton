import React from "react";
//import "./Product List.css";
//import logo from "../PRODUCT LIST/Delete.png";
const ProductList = ({ products, Removing }) => {
  
  return (
    <div className="table-data">
      <table className="Table-All-Data">
        <thead>
          <tr className="table-heading">
            <th className="table-Id">PRODUCT ID</th>
            <th className="">SELLING PRICE</th>
            <th className="">PRODUCT NAME</th>
            <th className="">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index} className="All-items-data">
              <td>{item.productId}</td>
              <td>{item.sellingPrice}</td>
              <td>{item.productName}</td>
              <td>
                <button onClick={() => Removing(item.productId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
