import React from 'react'
import CardApplicant from './CardApplicant'
import { Col, Container, Row } from 'react-bootstrap'

const Applicants = (props) => {
    const applieduser = props.location.applieduser;
    return (
        <div className="container-xl">
        <Container>
            <Row>
                {applieduser.map((ul, index) => (
                    <Col key={index} sm={6}>
                        <CardApplicant 
                            firstName={ul.firstName}
                            lastName={ul.lastName}
                            email={ul.email}
                            userId={ul.userId}
                        ></CardApplicant>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    )
}

export default Applicants
