import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

// Alles was im Admindashboard aufgerufen werden soll
function Overview({ match }) {
  const { path } = match;

  return (
    <>
      <div className="container-xl">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>Dashboard Admin</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <span>
                <Link to={`${path}/users`}>Benutzer verwalten</Link>
              </span><br />
              <span>
                <Link to={`${path}/recruiting`}>Stellenübersicht</Link>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export { Overview };
