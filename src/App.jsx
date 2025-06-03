import Banner from "./components/Banner/Banner";
import Clients from "./components/Clients/Clients";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Trial from "./components/Trial/Trial";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Clients />
      <Services/>
      <Testimonial/>
      <Pricing/>
      <FAQ/>
      <Trial/>
      <Footer/>
    </>
  );
}
