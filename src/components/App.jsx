import React from "react";

import VideoBackground from "./shared/VideoBackground";
import MainPage from "./LandingPage/MainPage";

function App() {
  return (
    <main className="box-border flex flex-col w-screen h-screen">
      <VideoBackground />
      <div className="flex items-center justify-center w-full h-full">
        <MainPage />
      </div>
    </main>
  );
}

export default App;
