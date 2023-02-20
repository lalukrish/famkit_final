import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import Signup from "./components/SignupIn/Signup";
import "./App.css";
import CombineAll from "./components/CombineAll";
// const Routing = () => {
//   return <Route path="/signup" element={<Signup />}></Route>;
// };

const App = () => {
  return (
    <div className="main">
      {/* <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CombineAll />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
