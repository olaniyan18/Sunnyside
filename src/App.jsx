/** @format */

import FirstSection from "./components/First/FirstSection";
import Footer from "./components/Footer/Footer";
import FourthSection from "./components/Fourth/FourthSection";
import SecondSection from "./components/Second/SecondSection";
import ThirdSection from "./components/Third/ThirdSection";
import "./style.css";
export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}
