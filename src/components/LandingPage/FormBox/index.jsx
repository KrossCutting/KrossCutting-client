import { useState } from "react";

import { TfiExchangeVertical } from "react-icons/tfi";

import Loading from "../../shared/Loading";
import UploadUrlForm from "../UploadUrlForm";
import UploadVideoForm from "../UploadVideoForm";

function FormBox() {
  const [isUploadUrl, setIsUploadUrl] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function handleUplaodTypeButtonClick() {
    setIsUploadUrl((prevType) => !prevType);
  }

  return (
    <main className="box-border">
      <div className="w-400 h-auto bg-[rgba(255,255,255,0.1)] rounded-lg flex flex-col justify-center p-20">
        <nav className="flex items-center justify-end h-auto w-ful">
          <button
            type="button"
            className="flex items-center justify-center w-auto px-10 font-bold rounded h-25 active:bg-mint bg-purple text-15 button-animation active:scale-90"
            onClick={handleUplaodTypeButtonClick}
          >
            <TfiExchangeVertical className="mr-5" size={15} />
            {isUploadUrl === true ? "Uplaod File" : "Upload Url"}
          </button>
        </nav>
        {isUploadUrl === true ? (
          <UploadUrlForm handleIsLoading={setIsLoading} />
        ) : (
          <UploadVideoForm handleIsLoading={setIsLoading} />
        )}
      </div>
      {isLoading && <Loading />}
    </main>
  );
}

export default FormBox;
