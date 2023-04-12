import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='Footer text-center text-lg-start text-muted ' >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='Footerlogo'>
        <MDBContainer className='text-center text-md-start mt-5'>
         <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <div class="elementor-widget-container">
															<img width="200" height="203" src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/01/srm-logo.svg.gzip" data-src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/01/srm-logo.svg.gzip" class="attachment-large size-large lazy loaded" alt="" data-was-processed="true"/>															</div>
              
         </MDBCol>

          

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Course </h6>
              <p>
                <a href='#!' className='text-reset'>
                  Bachelor
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Master
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MBBS
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Tamil Nadu,India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                infodesk@srmist.edu.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />+91 44 27417000
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 44 27417777
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:All Rights reserved
      </div>
    </MDBFooter>
  );
}