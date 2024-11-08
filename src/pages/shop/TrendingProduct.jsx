import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../../data/products.json";

const TrendingProduct = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };
  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Product</h2>
      <p className="section__subheader mb-12">
        Create an Admin Dashboard: Build a fully functional admin panel to
        manage inventory, products, orders, and users, including the ability to
        upload images etc.
      </p>
      <div className="mt-12">
        <ProductCard products={products.slice(0, visibleProducts)} />
      </div>
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button className="btn" onClick={loadMoreProducts}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProduct;
