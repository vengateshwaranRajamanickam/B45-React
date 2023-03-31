import React from 'react'
import {ListGroup,ListGroupItem,Button} from 'reactstrap'

export default function Itemlist({listitem}) {
    return (
        <ListGroup>
            {
                listitem.map((value, index) => {
                    return (<ListGroupItem key={index} color="success">
                        {value}
                        <Button color="danger">Delete</Button>
                    </ListGroupItem>
                    )
                })}
        </ListGroup>
//   <ListGroupItem color="info">
//     Dapibus ac facilisis in
//   </ListGroupItem>
//   <ListGroupItem color="warning">
//     Morbi leo risus
//   </ListGroupItem>
//   <ListGroupItem color="danger">
//     Porta ac consectetur ac
    
//     <Container>
//     <Row>
//     <Col
//       className="bg-light border"
//       sm="4"
//       xs="6"
//     >
//      hjhjhlhhjh
//      kjhkjhkjhj
//      khkjhkjhjlh
//      iuoiuiuiopu
//      mn,mnbn,

//     </Col>
//     </Row>
//     </Container>
//   </ListGroupItem>


    )
 }
// <Container>
//   <Row>
   
//     <Col
//       className="bg-light border"
//       sm="4"
//       xs="6"
//     >
//       .col-6 .col-sm-4
//     </Col>
//      </Row>
// </Container>
    
