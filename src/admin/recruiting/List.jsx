import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Moment from "moment";

import { recruitingService } from "@/_services";

function List({ match }) {
  const { path } = match;
  const [recruitings, setRecruitings] = useState(null);
  const [single, setSingle] = useState(null);

  useEffect(() => {
    recruitingService.getAll().then((x) => setRecruitings(x));
  }, []);

  function handleClick(id) {
    recruitingService.getById(id).then((data) => setSingle(data));
  }

  function deleteRecruitment(id) {
    recruitingService.delete(id).then(() =>
      recruitingService
        .getAll()
        .then((x) => setRecruitings(x))
        .then(() => location.reload())
    );
  }

  return (
    <div className="recruitingContainer">
      <div className="header_recruitment">
        <h1>Stellenübersicht</h1>
      </div>
      <div className="recruitingContent_small">
        <div>
          <label>
            <input type="text" className="input-search"></input>
          </label>
          <Link to={`${path}/add`} className="btn">
            Stellenanzeige anlegen
          </Link>
        </div>
        <br />
        <div className="recruitinContainer_small_scroll" id="style-1">
          {recruitings &&
            recruitings
              .sort((a, b) => b.id - a.id)
              .map((recruiting) => (
                <div key={recruiting.id}>
                  <a id={recruiting.id}>
                    <Card border="secondary" style={{ width: "18rem" }}>
                      <Card.Header>{recruiting.title}</Card.Header>
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          <span>
                            Erstellt am:{" "}
                            {Moment(recruiting.date).format("DD.MM.YYYY")}
                          </span>
                          <br />
                          <button
                            className="mt-3"
                            onClick={() => handleClick(recruiting.id)}
                          >
                            Details
                          </button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                  <br />
                </div>
              ))}
          {!recruitings && (
            <table>
              <tbody>
                <tr>
                  <td colSpan="4" className="text-center">
                    <span className="spinner-border spinner-border-lg align-center"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="recruitingContent_big">
        {single && (
          <div>
            <div className="btn-edit-recruiting">
              <Link to={`${path}/edit/${single.id}`} className="btn">
                Editieren
              </Link>
              <button
                onClick={() => deleteRecruitment(single.id)}
                className="btn ml-2"
                style={{ width: "100px" }}
                disabled={single.isDeleting}
              >
                {single.isDeleting ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  <span>Löschen</span>
                )}
              </button>
            </div>
            <div className="recruitinContainer_big_scroll mb-2" id="style-1">
              <div
                dangerouslySetInnerHTML={{ __html: single.recruitingText }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { List };
