import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-black text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <div className='flex items-center'>
                <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Helpee
              </h6>
              <div>
              <img className='w-20' src='https://www.epuni.school.nz/wp-content/uploads/Classroom-mojo-team.png'/>
              </div>
                </div>
              
              <p>
              Helpee provides trained caregivers and home assistance for seniors.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Trained caregivers for elderly care
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Nursing and medical assistance
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Travel support for seniors
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                Official Website
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Our Story
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Email: support@helpee.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> Location: India
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center text- p-4'>
        © 2025 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Helpee Health Tech PVT. LTD.
        </a>
      </div>
    </MDBFooter>
  );
}