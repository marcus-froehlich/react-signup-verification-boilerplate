import React, { useState } from "react";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const mimetype = [
    "application/doc",
    "application/ms-doc",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
  ];

  const handleSubmission = () => {
    const formData = new FormData();
    let reader = new FileReader();
    console.log(e.target.files);
    formData.append("File", selectedFile);

    const formatCheck = mimetype.some((item) => {
      return item === selectedFile.type;
    });

    // ca. 4 MB
    function sizeCheck(e) {
      return e.size < 4200000;
    }

    if (formatCheck && sizeCheck(selectedFile)) {     
    } else {
      console.log("falsches Format oder falsche Größe");
    }

    // fetch("http://localhost:8080/user/Dokuments/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log("Success:", result);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div>
      <label htmlFor="file-upload" className="custom-file-upload">
        <i className="fa fa-cloud-upload"></i> Custom Upload
      </label>
      <input
        type="file"
        name="file"
        id="file-upload"
        onChange={changeHandler}
      />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}

export { FileUploadPage };
