import Footer from "./commonpages/Footer";
import Navigation from "./commonpages/Navigation";
import About from "./landingpage/About";
import Clients from "./landingpage/Clients";
import Contact from "./landingpage/Contact";
import Landingpage from "./landingpage/Landingpage";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
  <Router>
   
    <Navigation/>
    <Routes>
      <Route path="/" element ={<Landingpage/>}/>
      <Route path="about" element ={<About/>}/>
      <Route path="clients" element ={ <Clients/>}/>
      <Route path="contact" element ={<Contact/>}/>

    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
