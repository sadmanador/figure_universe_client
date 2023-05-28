import { useTitle } from "../../../hooks/useTitle/useTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ImgGallery from "../ImgGallery/ImgGallery";
import Reviews from "../Reviews/Reviews";
import TabSection from "../TabSection/MainTab/TabSection";

const Home = () => {
  useTitle("Home")
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <TabSection></TabSection>
      <Reviews></Reviews>
      <ImgGallery></ImgGallery>
      <About></About>
    </div>
  );
};

export default Home;
