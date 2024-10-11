import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CardAssurance from "@/components/CardAssurance";
import ProductSlider from "@/components/ProductSlider";
import ProductCategory from "@/components/ProductCategory";
import NewProduct from "@/components/NewProduct";
import CTAMino from "@/components/CTAMino";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Merk from "@/components/Merk";
import MinoFlashSale from "@/components/MinoFlashSale";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSlider />
    <CardAssurance />
    <ProductSlider />
    <ProductCategory />
    <NewProduct />
    <CTAMino />
    <Blog />
    <Testimonial />
    <Merk />
    <MinoFlashSale />
    <Footer />
    </>
  );
}
