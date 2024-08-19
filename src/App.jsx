import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Mainpara from "./components/Mainpara/Mainpara";
import Projects from "./components/Projects/Projects";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" bg-black text-white overflow-x-hidden">
      <Navbar/>
      <Mainpara/>
      <Projects/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App