import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

import ProgressBox from "../ProgressBox";
import ProgressBar from "../ProgressBar";
import WhiteLogo from "../../shared/WhiteLogo";
import VideoBackground from "../../shared/VideoBackground";

import API from "../../../../config";
import { useFinalVideoUrlStore } from "../../../store";

function useProgressStatus(videoStatus) {
  return useQuery({
    queryKey: ["progressStatus"],
    queryFn: async () => {
      const response = await axios.get(API.COMPILATIONS);

      return response.data;
    },
    // mockup시연의 경우 짧게 설정하고, 이후는 5-10초로 설정합니다.
    refetchInterval: 1000,
    enabled: videoStatus,
  });
}

function EditingPage() {
  const [isCuttingInProgress, setIsCuttingInProgress] = useState(true);
  const { finalVideoUrl } = useFinalVideoUrlStore();
  const { data } = useProgressStatus(isCuttingInProgress);

  useEffect(() => {
    if (finalVideoUrl !== "") {
      setIsCuttingInProgress(false);
    }
  }, [finalVideoUrl]);

  return (
    <main className="box-border w-screen h-screen">
      <VideoBackground />
      <header className="fixed">
        <WhiteLogo />
      </header>
      <div className="flex flex-col justify-center w-full h-full space-y-50">
        <section className="flex items-center justify-center">
          <ProgressBox progressStatus={data} />
        </section>
        <section className="flex items-center justify-center">
          <ProgressBar progressStatus={data} />
        </section>
      </div>
    </main>
  );
}

export default EditingPage;
