import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CardApplicant = ( props ) => {  
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" />
                <Card.Body>
                    <Card.Title>Name: {props.firstName} {props.lastName}</Card.Title>
                    <Card.Text>
                        Unterlagen eingereicht: ABC
                    </Card.Text>
                    <Button variant="primary">Bewerber Ansehen</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardApplicant
