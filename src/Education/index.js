import React from 'react'
import { Element } from 'react-scroll'
import { Container,Card,CardBody,CardTitle,CardSubtitle } from 'reactstrap'
import './Education.css'
function Education() {
  return (
    <Element>
<Container className='Education_Container' id="Education">
      <Card
       className='Education_card'
        style={{
          border: "none"
        }}
      >   <CardTitle tag="h5" className='Exp_CardTitle'>
      <div className='Exp_CardTitle_Name'>Sastra University </div> <div className='Exp_CardTitle_Year'>2016 - 2019</div>
      </CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
      Thankavur,Tamil Nadu
      </CardSubtitle>
      <CardBody>
          <CardTitle tag="h5">
          Bachelor of Electriacal & Electronics
          </CardTitle>  
     </CardBody>
      </Card>
      <Card
       className='Education_card'
        style={{
          border: "none"
        }}
      >   <CardTitle tag="h5" className='Exp_CardTitle'>
      <div className='Exp_CardTitle_Name'>Sastra University </div> <div className='Exp_CardTitle_Year'>2016 - 2019</div>
      </CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
      Thankavur,Tamil Nadu
      </CardSubtitle>
      <CardBody>
          <CardTitle tag="h5">
          Bachelor of Electriacal & Electronics
          </CardTitle>  
     </CardBody>
      </Card>
      </Container>
    </Element>
  )
}

export default Education 