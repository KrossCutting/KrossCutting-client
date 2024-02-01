import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./LandingPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
