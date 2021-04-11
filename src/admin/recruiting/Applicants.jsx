import React from 'react'
import CardApplicant from './CardApplicant'
import { Col, Container, Row } from 'react-bootstrap'

const Applicants = (props) => {
    const applieduser = props.location.applieduser;
    return (
        <Container>
            <Row>
                {applieduser.map((au, index) => (
                    <Col key={index} sm={6}>
                        <CardApplicant 
                            firstName={au.firstName}
                            lastName={au.lastName}
                            email={au.email}
                            userId={au.userId}
                        ></CardApplicant>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Applicants
