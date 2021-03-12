import React, { useState, useEffect } from "react";
import { recruitingService } from "@/_services";
import { Accordion, Card, Button } from "react-bootstrap";
import { Role } from "@/_helpers";
import { accountService } from "@/_services";

function index({ match }) {
  const user = accountService.userValue;
  const { path } = match;
  const [recruitings, setRecruitings] = useState(null);

  useEffect(() => {
    recruitingService.getAll().then((x) => setRecruitings(x));
  }, []);

  return (
    <div className="mt-5 mb-5 justify-content-center">
      {recruitings &&
        recruitings
          .sort((a, b) => b.id - a.id)
          .map((recruiting) => (
            <div key={recruiting.id} className="d-flex justify-content-center">
              <Accordion defaultActiveKey="0" className="mb-2">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Stellenausschreibung mit der ID: {recruiting.id}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      {user.role === Role.User && (
                        <div className="div">
                          <button className="btn mb-2">Bewerben</button>
                        </div>
                      )}
                      <div className="m-2"
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
  );
}

export default index;
