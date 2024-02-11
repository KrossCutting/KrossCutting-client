import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import WhiteLogo from "../../shared/WhiteLogo";
import Message from "../../Message";
import VideoBackground from "../../shared/VideoBackground";
import ProgressBox from "../ProgressBox";
import ProgressBar from "../ProgressBar";
import API from "../../../../config";

function useProgressStatus() {
  return useQuery({
    queryKey: "progressStatus",
    queryFn: () => axios.get(API.COMPILATIONS).then((res) => res.data),
    options: {
      refetchInterval: 5000,
    },
  });
}

function EditingPage() {
  const { data: progressData, isLoading, isError } = useProgressStatus();

  /*
    TODO. 필요시 적절한 에러처리를 구현합니다.
    if (isError) {
      return <Message />;
    }
  */

  return (
    <main className="box-border w-screen h-screen">
      <VideoBackground />
      <header className="fixed">
        <WhiteLogo />
      </header>
      <div className="flex flex-col justify-center w-full h-full space-y-50">
        <section className="flex items-center justify-center">
          <ProgressBox />
        </section>
        <section className="flex items-center justify-center">
          <ProgressBar />
        </section>
      </div>
    </main>
  );
}

export default EditingPage;
