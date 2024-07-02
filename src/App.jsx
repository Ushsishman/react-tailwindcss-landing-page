import Header from "./layouts/Header";
import Banner from "./components/Banner/Banner";
import imgPattern from "./assets/bg-tablet-pattern.svg";
import Question from "./components/Question/Question";
import Slider from "./components/Slider/Slider";
import Commercial from "./components/Commercial/Commercial";
import Footer from "./layouts/Footer";
import { useState } from "react";
import MenuModal from "./components/MenuModal/MenuModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className={`font-custom min-h-screen w-full bg-neutral-very_light_gray z-20 relative overflow-hidden`}>
      <img
        className={`absolute -z-10 right-0 top-0 transform translate-x-1/4 -translate-y-1/4`}
        src={imgPattern}
      />
      {modalOpen == true && <MenuModal setModalOpen={setModalOpen} />}
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <Banner />
      <Question />
      <br />
      <br />
      <br />
      <br />
      <img
        className={`absolute -z-10 transform -translate-x-3/4 -translate-y-72`}
        src={imgPattern}
      />
      <Slider />
      <br />
      <br />
      <br />
      <br />
      <Commercial />
      <Footer />
    </div>
  );
}

export default App;
