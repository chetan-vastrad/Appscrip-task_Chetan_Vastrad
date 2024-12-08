import React, { useState, useEffect } from "react";
import styles from "./ProductList.module.css";

const ProductList = (props) => {
  console.log(props);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleFilter, setVisibleFilter] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) {
    return <div className={styles.loadingData}>Loading...</div>;
  }

  const toggleFilterVisibility = (index) => {
    setVisibleFilter(visibleFilter === index ? null : index);
  };

  const filters = [
    { title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
    { title: "OCCASION", options: ["Casual", "Formal", "Sportswear"] },
    { title: "WORK", options: ["Cotton", "Polyester", "Wool"] },
    { title: "FABRIC", options: ["Cotton", "Polyester", "Wool"] },
    { title: "SEGMENT", options: ["Cotton", "Polyester", "Wool"] },
    { title: "SUITABLE FOR", options: ["Cotton", "Polyester", "Wool"] },
    { title: "RAW MATERIAL", options: ["Cotton", "Polyester", "Wool"] },
    { title: "PATTERN", options: ["Cotton", "Polyester", "Wool"] }
  ];

  return (
    <div className={styles.allData}>
      {props.filterShow &&
        (
          <div className={styles.customFilterSection}>
            <div className={styles.customFilter}>
              <div className={styles.selectOuterFilter}>
                <input type="checkbox" name="Select Custom" />
                <h5> CUSTOMIZABLE</h5>
              </div>
              {filters.map((filter, index) => (
                <div key={index} className={styles.selectFilter}>
                  <div
                    className={styles.selectInnerFilter}
                    onClick={() => toggleFilterVisibility(index)}
                  >
                    <h5>{filter.title}</h5>
                    <i
                      className={`fa-solid ${visibleFilter === index ? "fa-angle-up" : "fa-angle-down"
                        }`}
                    ></i>
                  </div>
                  {visibleFilter === index && (
                    <div className={styles.filterList}>
                      <ul>
                        <li><strong><a>All</a></strong></li>
                        <li><a>Unselectall</a></li>
                        {filter.options.map((option, idx) => (
                          <li key={idx}>
                            <input type="checkbox" /> {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      }

      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <p>${product.price}</p>
            <h4>{product.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
