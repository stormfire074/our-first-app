import React from "react";
import ItemDescription from "./ItemDescription";
import styles from "./Product.module.css"
function Product(props) {
  const { name, description, price, currency } = props;

  return (
    <div className={styles.product}>
      <ItemDescription name={name} description={description} />
      <h2 className={styles.error}>An error occured</h2>
      <h3 className={styles.price}>{currency}{price}</h3>

      
    </div>
  );
}

export default Product;
