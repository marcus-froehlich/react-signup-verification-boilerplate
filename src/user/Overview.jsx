import React, { useState, useEffect } from "react";
import { Accordion, Card, Button, Modal, Table } from "react-bootstrap";
import { Role } from "@/_helpers";
import { accountService, uploadService, recruitingService } from "@/_services";

function Overview({ match }) {
  const user = accountService.userValue;
  const { path } = match;

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  const [recruitings, setRecruitings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [files, setFiles] = useState([]);
  const [documentList, setDocumentList] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);

  useEffect(() => {
    recruitingService.getAll()
      .then((x) => setRecruitings(x))
      .then(() => setIsLoading(false)
      );
  }, []);

  useEffect(() => {
    uploadService.getById(user.id).then((x) => setFiles(x));
  }, []);

  const handleSubmission = (event) => {
    event.preventDefault();
    const checkboxes = document.querySelectorAll('input[name="document-input"]:checked');  
    const docs = [];
    checkboxes.forEach((checkbox) => {
      docs.push(checkbox.value);
    });

    recruitingService.userApplying(modalInfo.id, user.id, docs);

  }

  const changeHandler = (e) => {
     setDocumentList(e.target.value);
    console.log(documentList);
  };

  const closeModalHandler = () => setShow(false);
  const openModalHandler = () => setShow(true);

  function infoEvents(recruiting) {
    setModalInfo(recruiting);
    toggleOpenClose();
  }

  const toggleOpenClose = () => {
    setShowModal(openModalHandler);
  }

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Wenn Sie sich für diese Stelle bewerben möchten, welche Dateien möchten Sie bereitstellen?</p>
          <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Dokumenten Name</th>
              <th>#</th>
              </tr>
          </thead>
          {files &&
            files.map((file) => (
              <tbody key={file.id}>
                <tr>
                  <td><label htmlFor={file.name}>{file.name}</label></td>
                  <td>
              <div className="custom-control custom-checkbox">
                  <input type="checkbox"                  
                  className="custom-control-input"
                  id={file.id}
                  name="document-input"                  
                  value={file.id}
                  />
                  <label className="custom-control-label" htmlFor={file.id}></label>
              </div>
            </td>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmission}>
            Bewerbung abschicken
            </Button>
          <Button variant="secondary" onClick={closeModalHandler}>
            Abbrechen
            </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <>
      <div className="mt-5 mb-5 justify-content-center">
        {show ? <ModalContent /> : null}
        {recruitings &&
          recruitings.recruitment
            .map((recruiting, index) => (
              <div key={index} className="d-flex justify-content-center">
                <Accordion defaultActiveKey="0" className="mb-2">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Stellenausschreibung mit dem Titel: {recruiting.title}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <button
                          onClick={() => infoEvents(recruiting)}
                          // onClick={() => applyingUser(recruiting.id, user.id)}
                          className="btn ml-2"
                        >
                          Auf diese Stelle Bewerben
                          </button>
                        <div
                          className="m-2"
                          dangerouslySetInnerHTML={{
                            __html: recruiting.recruitingText,
                          }}
                        />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            ))}
      </div>
    </>
  );
}

export { Overview };
