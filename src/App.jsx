import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";
import './index.css'
import AllPlate from "./components/AllPlate";
import Hero from "./components/Hero";
import TheChef from "./components/TheChef";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
function App() {

  return (
    <div className="font-inter font-normal ">
      <Hero />
      <AllPlate />
      <TheChef />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
