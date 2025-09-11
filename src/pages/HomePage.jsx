import FyloIntro from "../components/FyloIntro";
import FyloService from "../components/FyloService";
import FyloWorks from "../components/FyloWorks";
import TestimonialCards from "../components/TestimonialCard";
import SubcribeSection from "../components/SubcribeSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const submitEmail = (newEmail) => {
    console.log(newEmail);
  }

  return (
    <>
    <FyloIntro />
    <FyloService />
    <FyloWorks />
    <TestimonialCards />
    <SubcribeSection addEmail={submitEmail} />
    <Footer />
    </>
  )
}

export default HomePage;