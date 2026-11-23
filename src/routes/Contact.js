import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
return(
<>
<Navbar/>
<Hero
cName="hero-mid"
heroImg=
"https://images.unsplash.com/photo-1673554539408-5e76e2663157?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
title="Contact"



btnClass="hide"
 />
 <ContactForm/>
  <Footer/>
</>
)
}
export default Contact;