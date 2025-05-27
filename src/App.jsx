import Achievements from "./components/Achievements";
import Scope from "./components/Scope";
import Footer from "./components/Footer";
import Hero from "./components/Home";
import Navbar from "./components/Navbar";
import Milestones from "./components/Milestones";
import ScrollTop from "./components/ScrollTop";
import Stats from "./components/Stats";
import Downloads from "./components/Downloads";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div className="bg-primary text-white w-full h-full">
      <Navbar />
      <ScrollTop />
      <div className="container px-5 md:px-10 mx-auto">
        <Hero />
        <div className="flex flex-col xs:flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20">
        <Stats number="95%" title="SIGN RECOGNITION" />
        <Stats number="98%" title="OBSTACLE AVOIDANCE" />
        <Stats number="120+" title="TESTING HOURS" />

        </div>
        <Scope />
        <Milestones />
        <Downloads />
        <AboutUs />
        <Achievements />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
