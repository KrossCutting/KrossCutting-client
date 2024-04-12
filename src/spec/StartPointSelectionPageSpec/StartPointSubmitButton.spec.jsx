import { describe, it, beforeEach, afterEach, vi } from "vitest";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import StartPointSubmitButton from "../../components/StartPointSelectionPage/StartPointSubmitButton";

import API from "../../../config";
import {
  useStartPointStore,
  useFinalVideoUrlStore,
  useAwsVideoStore,
} from "../../store";

vi.mock("axios", () => ({
  default: {
    post: vi.fn((url) => {
      if (url === `${API.VALIDATIONS}/audios`) {
        return Promise.resolve({
          data: {
            result: "success",
            message: "mock-message",
            labelInfo: "mock-labelInfo",
          },
        });
      } else if (url === API.COMPILATIONS) {
        return Promise.resolve({
          data: {
            lastResult: "success",
            s3ClientFinalVideoUrl: "mock-s3ClientFinalVideoUrl",
          },
        });
      } else {
        return new Error("axios error");
      }
    }),
  },
}));

describe("[StartPointSelectionPage] StartPointSubmitButton TEST", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    const initialStartPointState = useStartPointStore.getState();
    const initialFinalVideoState = useFinalVideoUrlStore.getState();
    const initialAwsVideoUrlsState = useAwsVideoStore.getState();

    const { clearStartPointStore } = initialStartPointState;
    const { clearFinalVideoUrl } = initialFinalVideoState;
    const { clearVideoUrls } = initialAwsVideoUrlsState;

    clearStartPointStore();
    clearFinalVideoUrl();
    clearVideoUrls();

    useStartPointStore.setState({
      ...initialStartPointState,
      startPoints: {
        mainStartPoint: 3,
        subOneStartPoint: 2,
        subTwoStartPoint: 1,
      },
    });

    useFinalVideoUrlStore.setState({
      ...initialFinalVideoState,
      finalVideoUrl: "finalVideo.mp4",
    });

    useAwsVideoStore.setState({
      ...initialAwsVideoUrlsState,
      videoUrls: {
        mainVideoUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/main-contents/videos/main-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=660df6176839ff701435c6ca043f27278ec79b04bf28025edb84c9f1621ec8ef&X-Amz-SignedHeaders=host&x-id=GetObject",
        subOneVideoUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/sub-one-contents/videos/sub-one-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=384f6192dcd07ab3b9fe1a5ebc4cf4a2273a9d0819de280d5baade64ca0b1e18&X-Amz-SignedHeaders=host&x-id=GetObject",
        subTwoVideoUrl:
          "https://krosscutting.s3.ap-northeast-2.amazonaws.com/sub-two-contents/videos/sub-two-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZQ3DQ7T4MBWCKQRP%2F20240408%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T083259Z&X-Amz-Expires=60000&X-Amz-Signature=867cb6dc12bda6e18e46944b689f4c8239f5e26ceff3af5b6497c2fca57b7e34&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    });

    afterEach(() => {
      cleanup();
    });

    render(
      <MemoryRouter>
        <StartPointSubmitButton />
      </MemoryRouter>,
    );
  });

  it("1. next step을 누르면 안내 메시지가 등장합니다.", async () => {
    const nextButton = screen.queryByRole("button", { name: "next step" });

    fireEvent.click(nextButton);

    await waitFor(() => {
      const message = screen.queryByTestId("Message");

      expect(message).toBeInTheDocument();
    });
  });

  it("2. 메시지에서 Yes, proceed 버튼 클릭 시 로딩 컴포넌트가 렌더링 됩니다. ", async () => {
    const nextButton = screen.queryByRole("button", { name: "next step" });

    fireEvent.click(nextButton);

    await waitFor(async () => {
      const message = screen.queryByTestId("Message");

      expect(message).toBeInTheDocument();
    });

    const submissionButton = screen.queryByRole("button", {
      name: "Yes, proceed",
    });

    fireEvent.click(submissionButton);

    await waitFor(() => {
      const loadingComponent = screen.queryByRole("img");

      expect(loadingComponent).toBeInTheDocument();
    });
  });

  it("3. 메시지에서 Go to Selection 버튼 클릭 시 다시 버튼이 렌더링 되어 초기상태로 되돌아옵니다.", async () => {
    const nextButton = screen.queryByRole("button", { name: "next step" });

    fireEvent.click(nextButton);

    await waitFor(async () => {
      const message = screen.queryByTestId("Message");

      expect(message).toBeInTheDocument();
    });

    const selectionButton = screen.queryByRole("button", {
      name: "Go to Selection",
    });

    fireEvent.click(selectionButton);

    await waitFor(() => {
      const loadingComponent = screen.queryByRole("img");
      const message = screen.queryByTestId("Message");
      const submissionButton = screen.queryByRole("button", {
        name: "next step",
      });

      expect(loadingComponent).toBeNull();
      expect(message).toBeNull();
      expect(submissionButton).toBeInTheDocument();
    });
  });
});
