import { useEffect, useState } from "react";
import productsData from "../../data/products.json";
import ProductCard from "./ProductCard";
import ShopFiltering from "./ShopFiltering";
const filters = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
  priceRanges: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - 100$", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 and above", min: 200, max: Infinity },
  ],
};
const ShopPage = () => {
  const [products, setProducts] = useState(productsData);
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRanges: "",
  });
  //filtering funtion
  const applyFilters = () => {
    let filteredProducts = productsData;
    //filter by category
    if (filtersState.category && filtersState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filtersState.category
      );
    }
    //filter by color
    if (filtersState.color && filtersState.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filtersState
      );
    }
    //filter by price range
    if (filtersState.priceRanges) {
      const [minPrice, maxPrice] = filtersState.priceRanges
        .split("-")
        .map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    setProducts(filteredProducts);
  };
  useEffect(() => {
    applyFilters();
  }, [filtersState]);
  const clearFilters = () => {
    setFiltersState({
      category: "all",
      color: "all",
      priceRanges: "",
    });
  };
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          Browser a diverse range of categories , from chic-dresses to versatibe
          accessiories . Elevate your style today!
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          <ShopFiltering
            filters={filters}
            filtersState={filtersState}
            setFiltersState={setFiltersState}
            clearFilters={clearFilters}
          />
          <div>
            <h3 className="text-xl font-medium mb-4">
              Products Available : {products.length}
            </h3>
            <ProductCard products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;