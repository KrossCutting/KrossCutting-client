import { describe, it, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CarouselContainer from "../../src/components/StartPointSelectionPage/CarouselContainer";

import { useAwsAudioStore } from "../../src/store";
import { useAwsVideoStore } from "../../src/store";

describe("[StartPointSelectionPage] CarouselContainer TEST", () => {
  beforeEach(() => {
    const initalAudioState = useAwsAudioStore.getSate();
    const initalVideoState = useAwsVideoStore.getState();

    useAwsAudioStore.setState({
      ...initalAudioState,
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
      ...initalVideoState,
      videoUrls: {
        mainVideoUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/main-contents/videos/main-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=660df6176839ff701435c6ca043f27278ec79b04bf28025edb84c9f1621ec8ef&X-Amz-SignedHeaders=host&x-id=GetObject",
        subOneVideoUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/sub-one-contents/videos/sub-one-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=384f6192dcd07ab3b9fe1a5ebc4cf4a2273a9d0819de280d5baade64ca0b1e18&X-Amz-SignedHeaders=host&x-id=GetObject",
        subTwoVideoUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/sub-two-contents/videos/sub-two-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=867cb6dc12bda6e18e46944b689f4c8239f5e26ceff3af5b6497c2fca57b7e34&X-Amz-SignedHeaders=host&x-id=GetObject"
      },
    });

    render(
      <MemoryRouter>
        <CarouselContainer></CarouselContainer>
      </MemoryRouter>,
    );
  });

  afterEach(() => {
    const { clearAudioUrls } = useAwsAudioStore.getSate();
    const { clearVideoUrls } = useAwsVideoStore.getSate();

    clearAudioUrls();
    clearVideoUrls();

    cleanup();
  })

  it("1. ", () => { });
  it("2. ", () => { });
});
