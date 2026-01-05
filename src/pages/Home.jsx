import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import useScrollFade from "../hooks/useScrollFade";
import WhyChooseUs from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";
import Testimonial from "../components/Testimonial";
import BrainDiseaseSection from "../components/BrainDiseaseSection";
const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <ServiceSection className="fade-left" />
      
      
      <WhyChooseUs className="fade-left" />
      
      <BrainDiseaseSection className="fade-right" />
      <BlogSection className="fade-up" />
      <Testimonial className="fade-left" />


    </>
  );
};

export default Home;
