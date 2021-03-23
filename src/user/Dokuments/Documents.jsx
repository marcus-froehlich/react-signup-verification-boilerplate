import React from "react";
import { Link } from "react-router-dom";
import { FileUploadPage } from './FileUpload'

function Document({ match }) {
  const { path } = match;

  return (
    <>
      <FileUploadPage></FileUploadPage>
    </>
  );
}

export { Document };
