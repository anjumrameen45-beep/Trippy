import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service(){
return(
<>
<Navbar/>
<Hero
cName="hero-mid"
heroImg=
"https://plus.unsplash.com/premium_photo-1762646046081-93a7df463d54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
title="Service"



btnClass="hide"
 />
 <Trip/>
  <Footer/>
</>
)
}
export default Service;