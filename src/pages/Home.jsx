import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import BestSellerBanner from "../components/BestSellerBanner.jsx";
import FooterSection from "../components/FooterSection";
import FeatureBar from "../components/FeatureBar.jsx";

export default function Home() {
  return (
    <div>
    // <div className="bg-gray-50">
      <Hero />
      <Categories />
      <FeatureBar />
      <NewArrivals />
      <BestSellerBanner />
      <FooterSection />
    </div>
  );
}