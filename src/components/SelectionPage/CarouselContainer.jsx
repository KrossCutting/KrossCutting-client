import { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import useUrlStore from "../../store/store";

function CarouselContainer() {
  const { videoUrls } = useUrlStore();
  const urlVideoList = Object.values(videoUrls);

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleLeftClick() {
    setCurrentIndex((prev) => prev - 1);
  }

  function handleRightClick() {
    setCurrentIndex((prev) => prev + 1);
  }

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <section className="flex items-center space-x-30">
        <FaCircleChevronLeft
          size={40}
          className={`fill-white ${currentIndex === 0 ? "invisible" : null} cursor-pointer`}
          onClick={handleLeftClick}
        />
        <div className="w-720 h-405 space-y-30">
          {/* TODO_비디오 플레이어 컴포넌트로 변경 필요 */}
          <video
            key={urlVideoList[currentIndex]}
            className="rounded-md"
            autoPlay
            muted
            loop
          >
            <source src={urlVideoList[currentIndex]} type="video/mp4" />
          </video>
          {/* TODO_오디오 플레이어 컴포넌트 포함 필요 */}
        </div>
        <FaCircleChevronRight
          size={40}
          className={`fill-white ${currentIndex === 2 ? "invisible" : null} cursor-pointer`}
          onClick={handleRightClick}
        />
      </section>
    </main>
  );
}

export default CarouselContainer;
