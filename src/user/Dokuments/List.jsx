import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Moment from "moment";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { accountService, uploadService, alertService, documentService } from "@/_services";

function List() {
  const user = accountService.userValue;
  const [files, setFiles] = useState(null);

  useEffect(() => {
    uploadService.getById(user.id).then((x) => setFiles(x));
  }, []);

  function handleDownload(id, event) {

    const link = document.createElement('a');

    var res = uploadService.download(id).then(function (response) {
      response.blob().then(function (resBlob) {
        var objectURL = URL.createObjectURL(resBlob);
        link.href = objectURL;
        link.click();
      });
    });
    event.preventDefault();
  }

  const [isDeleting, setIsDeleting] = useState(false);
  function handleDelete(id, event) {
    if (confirm('Sind Sie sicher?')) {
      setIsDeleting(true);
      documentService.delete(id)
        .then(() => alertService.success('Dokumenten löschung erfolgreich'))
        .then(() => location.reload());
    }
  }

  return (
    <>
      <div className="container mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Dokumenten Name</th>
              <th>Upload Datum</th>
              <th>#</th>
            </tr>
          </thead>
          {files &&
            files.map((file) => (
              <tbody key={file.id}>
                <tr>
                  <td>{file.id}</td>
                  <td><a onClick={() => handleDownload(file.id)}>{file.name}</a></td>
                  <td>{Moment(file.uploadDate).format("DD.MM.YYYY")}</td>
                  <td><a onClick={() => handleDelete(file.id)}><FontAwesomeIcon icon={faTrash} /></a></td>
                </tr>
              </tbody>
            ))}
          {!files && (
            <tbody>
              <tr>
                <td colSpan="4" className="text-center">
                  <span className="spinner-border spinner-border-lg align-center"></span>
                </td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
    </>
  );
}

export { List };
