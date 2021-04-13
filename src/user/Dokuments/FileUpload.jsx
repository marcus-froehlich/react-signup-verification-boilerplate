import React, { useState } from "react";
import { accountService, uploadService, alertService } from "@/_services";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();

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
      uploadService.upload(data, user.id)
    } else {
      console.log("falsches Format oder falsche Größe");
    }
  };

  return (
    <div>
      <label htmlFor="file-upload">
        <i className="fa fa-cloud-upload"></i> Datei Hochladen
      </label>
      <input
        type="file"
        name="file"
        id="file-upload" 
        onChange={changeHandler}
      />
      <div>
        <button type="button" className="btn-e" onClick={handleSubmission}>Hochladen</button>
      </div>
    </div>
  );
}

export { FileUploadPage };
