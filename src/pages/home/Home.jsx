import Blogs from "../blogs/Blogs";
import TrendingProduct from "../shop/TrendingProduct";
import Banner from "./Banner";
import Categories from "./Categories";
import DetailSection from "./DetailSection";
import HeroSection from "./HeroSection";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <HeroSection />
      <TrendingProduct />
      <DetailSection />
      <PromoBanner />
      <Blogs />
    </>
  );
};

export default Home;
