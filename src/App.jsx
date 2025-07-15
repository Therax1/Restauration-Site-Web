import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/600.css";
import './index.css'
import AllPlate from "./components/AllPlate";
import Hero from "./components/Hero";
import TheChef from "./components/TheChef";
function App() {

  return (
    <div className="font-inter font-normal ">
      <Hero />
      <AllPlate />
      <TheChef />
    </div>
  )
}

export default App
