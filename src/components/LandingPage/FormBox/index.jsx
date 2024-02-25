import { useState } from "react";

import Loading from "../../shared/Loading";
import UploadFileForm from "../UploadFileForm";

function FormBox() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="box-border">
      <div className="min-w-400 max-w-400 w-[40vw] h-auto bg-[rgba(255,255,255,0.1)] rounded-lg flex flex-col justify-center p-20">
        <UploadFileForm handleIsLoading={setIsLoading} />
      </div>
      {isLoading && <Loading />}
    </main>
  );
}

export default FormBox;
