import { useNavigate } from "react-router-dom";

function DownloadBox() {
  const navigate = useNavigate();

  function handleHomeButtonClick() {
    navigate("/");
  }

  // TODO. 서버의 진행상황이 끝나면 영상을 다운로드 받을 수 있도록 axios 요청을 보내야 합니다.
  // TODO. 서버 로직이 완료되면 연결 작업이 필요합니다.
  return (
    <section className="flex flex-col items-center justify-center h-auto space-y-30">
      <p className="flex items-center justify-center font-thin text-center text-30">
        Your Kross-cutting
        <br /> has been successfully completed!
      </p>
      <div className="flex flex-col items-center justify-center font-bold space-y-30 text-20">
        <button type="button" className="rounded bg-purple w-130 h-50">
          Download
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-20">
        <p className="font-thin">Try another Kross-cutting?</p>
        <button
          type="button"
          className="font-bold underline rounded-lg"
          onClick={handleHomeButtonClick}
        >
          Click here!
        </button>
      </div>
    </section>
  );
}

export default DownloadBox;
