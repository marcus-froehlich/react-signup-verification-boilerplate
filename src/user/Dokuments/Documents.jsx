import React from "react";
import { Link } from "react-router-dom";
import { FileUploadPage } from './FileUpload'
import { List } from './List'

function Document({ match }) {
  const { path } = match;

  return (
    <>
      <FileUploadPage></FileUploadPage>
      <List></List>
    </>
  );
}

export { Document };
