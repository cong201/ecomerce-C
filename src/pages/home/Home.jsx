import TrendingProduct from "../shop/TrendingProduct";
import Banner from "./Banner";
import Categories from "./Categories";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <HeroSection />
      <TrendingProduct />
    </>
  );
};

export default Home;
