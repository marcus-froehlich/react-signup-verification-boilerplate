import React, { useState } from "react";
import { accountService, uploadService, alertService } from "@/_services";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [upload, setUpload] = useState(false);

  const user = accountService.userValue;

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const mimetype = [
    "application/doc",
    "application/ms-doc",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
  ];

  const handleSubmission = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", selectedFile);


    const formatCheck = mimetype.some((item) => {
      return item === selectedFile.type;
    });

    // ca. 4 MB
    function sizeCheck(e) {
      return e.size < 4200000;
    }

    if (formatCheck && sizeCheck(selectedFile)) {
      setUpload(true);
      uploadService.upload(data, user.id).then((response) => {setUpload(false)});
    } else {
      console.log("falsches Format oder falsche Größe");
    }
  };

  return (
    <div className="container-xs">
      <input        
        type="file"
        name="file"
        id="file-upload" 
        onChange={changeHandler}
      />
      <div>
        <button type="button" className="btn-e" onClick={handleSubmission}>Hochladen</button>
        {upload ? <span className="spinner-border spinner-border-lg align-center"></span> : null}
      </div>
    </div>
  );
}

export { FileUploadPage };
