import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import MainPage from "../../components/LandingPage/MainPage";
import FormBox from "../../components/LandingPage/FormBox";
import UploadFileForm from "../../components/LandingPage/UploadFileForm";

vi.mock("axios", () => ({
  default: {
    post: vi.fn(() =>
      Promise.resolve({
        data: {
          result: "success",
          videoUrlList: ["video-url-main", "video-url-sub1", "video-url-sub2"],
          audioUrlList: ["audio-url-main", "audio-url-sub1", "audio-url-sub2"],
        },
      }),
    ),
  },
}));

describe.only("Landing Page", () => {
  it("1. 랜딩페이지 내 모든 컴포넌트가 렌더링 되어야 합니다.", () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Welcome to our platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Upload Main Video/i)).toBeInTheDocument();
    expect(screen.getByText(/Upload Sub 1 Video/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
    expect(screen.getByLabelText("sample video")).toBeInTheDocument();
  });

  it("2. 추가 버튼을 누르면 영상을 업로드할 수 있는 input창이 추가되어야 합니다.", async () => {
    render(
      <MemoryRouter>
        <UploadFileForm />
      </MemoryRouter>,
    );

    const addUploadInputButton = screen.getByLabelText("Add upload input");
    fireEvent.click(addUploadInputButton);

    expect(screen.getByLabelText("Upload Sub Two Video").toBeInTheDocument);

    const removeUploadInputButton = screen.getByLabelText(
      "Remove last upload input",
    );
    fireEvent.click(removeUploadInputButton);

    expect(screen.queryByLabelText("Upload Sub Two Video")).toBeNull();
  });

  it("3. 영상을 선택시 영상의 타이틀이 input창에 표시되어야 합니다.", async () => {
    render(
      <MemoryRouter>
        <FormBox />
      </MemoryRouter>,
    );

    const mainUploadInput = screen.getByLabelText("Upload Main Video");
    const subOneUploadInput = screen.getByLabelText("Upload Sub 1 Video");
    const mainVideo = new File(["mainVideo"], "mainVideo.mp4", {
      type: "video/mp4",
    });
    const subOneVideo = new File(["subOneVideo"], "subOneVideo.mp4", {
      type: "video/mp4",
    });

    fireEvent.change(mainUploadInput, { target: { files: [mainVideo] } });
    fireEvent.change(subOneUploadInput, { target: { files: [subOneVideo] } });

    expect(screen.getByText("mainVideo.mp4")).toBeInTheDocument();
    expect(screen.getByText("subOneVideo.mp4")).toBeInTheDocument();
  });

  it("4. 업로드 버튼 클릭시 로딩 스피너가 렌더링 되고 POST 요청 성공시 사라져야 합니다", async () => {
    render(
      <MemoryRouter>
        <FormBox />
      </MemoryRouter>,
    );

    const fileUploadInput = screen.getByLabelText("Upload Main Video");
    const videoFile = new File(["video"], "video.mp4", {
      type: "video/mp4",
    });
    fireEvent.change(fileUploadInput, { target: { files: [videoFile] } });

    const form = screen.getByTestId("uploadForm");
    fireEvent.submit(form);

    await waitFor(
      () => expect(screen.queryByAltText("Loading")).toBeInTheDocument(),
      { timeout: 5000 },
    );

    expect(axios.post).toHaveBeenCalled();

    await waitFor(
      () => {
        expect(screen.queryByAltText("Loading")).not.toBeInTheDocument();
      },
      { timeout: 5000 },
    );
  });
});
