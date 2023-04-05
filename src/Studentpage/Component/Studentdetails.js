import React from 'react'
import { Input, CardBody, Card, CardSubtitle, CardTitle, InputGroup, CardText, Col } from 'reactstrap'
export default function ListUsersCard({details}) {

    return (
        <Col xs={12} sm={8} md={6} lg={6}>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                    gg
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        gg
                    </CardSubtitle>
                    <CardText>
                        Name:
                    </CardText>
                    <div>Comment:</div>
                    <InputGroup>
                        <Input>
                        </Input>
                     </InputGroup>
                    <br />
                </CardBody>
            </Card>
            <br />
        </Col>
    )

}