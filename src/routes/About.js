import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";


function About(){
return(
<>
<Navbar/>
<Hero
cName="hero-mid"
heroImg=
"https://plus.unsplash.com/premium_photo-1661884752233-eac0b5efe655?q=80&w=908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
title="About"



btnClass="hide"
 />
 <AboutUs/>
  <Footer/>
</>
)
}
export default About;