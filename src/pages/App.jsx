import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import GymShowcase from "../components/GymShowcase";
import Footer from "../components/Footer";
import Login1 from "../components/Login1";

import Login2 from "../components/Login2";
import Login3 from "../components/Login3";
import Login4 from "../components/Login4";
import About from "../components/About";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee /> 
      <GymShowcase />
      
      <About />
       <Marquee /> 
      <Footer />
      {/* <Login1 /> 
      <Login2 />
      <Login3 />
      <Login4 />  */}
    </>
  );
}

export default Home;
