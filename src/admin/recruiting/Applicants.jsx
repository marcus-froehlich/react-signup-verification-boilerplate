import React, { useState } from 'react'
import CardApplicant from './CardApplicant'
import { Col, Container, Row } from 'react-bootstrap'

const Applicants = (props) => {
    const [applieduser, setAppliedUser] = useState(props.location.applieduser);
    return (
        <Container>
            <Row>
                {applieduser.map((au, index) => (
                    <Col sm={6}>
                        <CardApplicant key={index}
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
