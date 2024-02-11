import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import MainPage from "../components/LandingPage/MainPage";
import CarouselContainer from "../components/StartPointSelectionPage/CarouselContainer";
import EditingPage from "../components/ProcessingPage/EditingPage";

import { useYouTubeUrlStore } from "../store";
// TODO: 필요시 반드시 메인 영상 sub1영상은 입력해야합니다 라는 창을 나타내는 로직을 추가합니다.

function App() {
  const { youtubeUrls } = useYouTubeUrlStore();

  const hasYoutubeUrls =
    youtubeUrls.mainYoutubeUrl && youtubeUrls.subOneYoutubeUrl;

  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route
        path="/selection"
        element={
          hasYoutubeUrls ? <CarouselContainer /> : <Navigate to="/" replace />
        }
      ></Route>
      <Route path="/editing" element={<EditingPage />}></Route>
    </Routes>
  );
}

export default App;
