import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Steps from "../../components/Steps/Steps";
import Download from "../../components/Download/Download";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import Create from "../../assets/create.png";
import Explore from "../../assets/explore.png";
import Checkout from "../../assets/checkout.png";

const Home = () => {
  return (
    <div className="HomeWrapper">
      <Header />
      <Hero />
      <HowItWorks />
      <Steps
        image={Create}
        heading="Create/login to an existing
account to get started"
        subheading="Create an account"
        description="An account is created with your email and a desired password."
      />
      <Steps
        image={Explore}
        heading="Shop for your favorites meal as e dey hot."
        subheading="Explore while shopping"
        description="Shop for your favorite meals or drinks and enjoy while doing it."
        imageIsRight
      />
      <Steps
        image={Checkout}
        heading="When you done check out and get it delivered."
        subheading="Checkout"
        description="When you done check out and get it 
          delivered with ease."
      />
      <Download />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
