import axios from "axios"
import { describe, it, beforeEach } from "vitest";
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";

import API from "../../../config";
import EditingPage from "../../components/ProcessingPage/EditingPage";

const axiosMock = new MockAdapter(axios);
const queryClient = new QueryClient();

describe("EditPage", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <EditingPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("1. editPage 내 모든 컴포넌트가 렌더링 되어야 합니다.", () => {
    expect(screen.getByTestId('video-background')).toBeInTheDocument();
    expect(screen.getByTestId('white-logo')).toBeInTheDocument();
    expect(screen.getByTestId('progress-box')).toBeInTheDocument();
  });

  it("2. 서버 상태를 지속적으로 업데이트 해야합니다.", async () => {
    expect(screen.getByText("Starting Krosscutting")).toBeInTheDocument();
    axiosMock.onGet(API.COMPILATIONS).reply(200, "frames");

    await waitFor(() => {
      expect(screen.getByText("Exporting frames to analyze...")).toBeInTheDocument();
    }, { timeout: 1000 });

    axiosMock.onGet(API.COMPILATIONS).reply(200, "singleShot");

    await waitFor(() => {
      expect(screen.getByText("Motion detection in progress, please wait a moment...")).toBeInTheDocument();
    }, { timeout: 1000 });

    axiosMock.onGet(API.COMPILATIONS).reply(200, "editing");

    await waitFor(() => {
      expect(screen.getByText("Editing video, please wait...")).toBeInTheDocument();
    }, { timeout: 1000 });

    axiosMock.onGet(API.COMPILATIONS).reply(200, "exporting");

    await waitFor(() => {
      expect(screen.getByText("Exporting video, please wait...")).toBeInTheDocument();
    }, { timeout: 1000 });
  });
});
