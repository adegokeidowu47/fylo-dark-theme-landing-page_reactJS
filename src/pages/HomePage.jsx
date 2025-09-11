import FyloIntro from "../components/FyloIntro";
import FyloService from "../components/FyloService";
import FyloWorks from "../components/FyloWorks";
import TestimonialCards from "../components/TestimonialCard";
import SubcribeSection from "../components/SubcribeSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
    <FyloIntro />
    <FyloService />
    <FyloWorks />
    <TestimonialCards />
    <SubcribeSection />
    <Footer />
    </>
  )
}

export default HomePage;