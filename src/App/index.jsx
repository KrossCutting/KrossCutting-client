import React from "react";
import { Route, Routes } from "react-router-dom";

import Message from "../components/Message";
import MainPage from "../components/LandingPage/MainPage";
import CarouselContainer from "../components/startPointSelectionPage/CarouselContainer";
import { VERIFICATION_MESSAGE } from "../constants/message";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/selection" element={<CarouselContainer />}>
        <Route
          path="/selection/verification"
          element={<Message messageType={VERIFICATION_MESSAGE} />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
