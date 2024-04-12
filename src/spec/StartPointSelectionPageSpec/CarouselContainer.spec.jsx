import { describe, it, beforeEach, afterEach, vi } from "vitest";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CarouselContainer from "../../components/StartPointSelectionPage/CarouselContainer";

import { useAwsAudioStore } from "../../store";
import { useAwsVideoStore } from "../../store";

vi.mock("wavesurfer.js", () => ({
  __esModule: true,
  default: {
    create: vi.fn().mockReturnValue({
      play: vi.fn(),
      pause: vi.fn(),
      seekTo: vi.fn(),
      destroy: vi.fn(),
    }),
  },
}));

describe("[StartPointSelectionPage] CarouselContainer TEST", () => {
  beforeEach(() => {
    const { clearAudioUrls } = useAwsAudioStore.getState();
    const { clearVideoUrls } = useAwsVideoStore.getState();

    clearAudioUrls();
    clearVideoUrls();
    vi.clearAllMocks();

    const initialAudioState = useAwsAudioStore.getState();
    const initialVideoState = useAwsVideoStore.getState();

    useAwsAudioStore.setState({
      ...initialAudioState,
      audioUrls: {
        mainAudioUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/main-contents/audios/main-audio.wav?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=a890474225d08fd6d36a0af7a146ac5c73dadff76d0a88e366b1bc1597c0c435&X-Amz-SignedHeaders=host&x-id=GetObject",
        subOneAudioUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/sub-one-contents/audios/sub-one-audio.wav?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=8fa0c29063d8c35f200d2352e7b0dcde5151b8bc17a03f4ff6c8ed1a727c2955&X-Amz-SignedHeaders=host&x-id=GetObject",
        subTwoAudioUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/sub-two-contents/audios/sub-two-audio.wav?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=dbb8623b429374dd991b9085e588081f947b2de2a3066a4e05b7e4129f2bc535&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    });

    useAwsVideoStore.setState({
      ...initialVideoState,
      videoUrls: {
        mainVideoUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/main-contents/videos/main-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=660df6176839ff701435c6ca043f27278ec79b04bf28025edb84c9f1621ec8ef&X-Amz-SignedHeaders=host&x-id=GetObject",
        subOneVideoUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/sub-one-contents/videos/sub-one-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=384f6192dcd07ab3b9fe1a5ebc4cf4a2273a9d0819de280d5baade64ca0b1e18&X-Amz-SignedHeaders=host&x-id=GetObject",
        subTwoVideoUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/sub-two-contents/videos/sub-two-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=867cb6dc12bda6e18e46944b689f4c8239f5e26ceff3af5b6497c2fca57b7e34&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    });

    render(
      <MemoryRouter>
        <CarouselContainer></CarouselContainer>
      </MemoryRouter>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("1. 첫 렌더링 시 메인 비디오가 렌더링 되어야 합니다.", async () => {
    const mainVideo = screen.getByText("main video");

    expect(mainVideo).toBeInTheDocument();
  });

  it("2. 오른쪽 버튼을 누르면 캐로우셀이 이동하여 서브 비디오를 렌더링 합니다.", () => {
    const rightButton = screen.queryByTestId("right");

    fireEvent.click(rightButton);

    const subVideo = screen.getByText("sub video");

    expect(subVideo).toBeInTheDocument();
  });

  it("3. 오른쪽 버튼을 눌렀다가, 왼쪽 버튼을 누르면 다시 메인 비디오를 렌더링 합니다.", () => {
    const rightButton = screen.queryByTestId("right");
    const leftButton = screen.queryByTestId("left");
    const mainVideo = screen.getByText("main video");

    fireEvent.click(rightButton);

    const subVideo = screen.getByText("sub video");

    expect(subVideo).toBeInTheDocument();

    fireEvent.click(leftButton);

    expect(mainVideo).toBeInTheDocument();
  });
});
