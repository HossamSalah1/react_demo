import { Component } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
export default class Foot extends Component {
    constructor() {
        super()

    }
    render() {
        return <>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                
                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            
                            <MDBCol md="6" lg="4" xl="4" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <FaHome style={{ marginRight: "10px" }} />
                                    Assiut
                                </p>
                                <p>
                                    <MdEmail style={{ marginRight: "10px" }} />
                                    hossam@gmail.com
                                </p>
                                <p>
                                    <FaPhoneAlt style={{ marginRight: "10px" }} />
                                    01145197866
                                </p>
                                
                            </MDBCol>

                            
                            <MDBCol md="6" lg="4" xl="4" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Follow Us</h6>
                                <div className="social-icons d-flex justify-content-start">
                                    <a href='' className='me-4 text-reset'>
                                        <FaFacebook />
                                    </a>
                                    <a href='https://www.facebook.com/hosam.salah.5895?mibextid=ZbWKwL' className='me-4 text-reset'>
                                        <FaTwitter />
                                    </a>
                                    <a href='https://www.facebook.com/hosam.salah.5895?mibextid=ZbWKwL' className='me-4 text-reset'>
                                        <CiInstagram />
                                    </a>
                                    <a href='https://www.facebook.com/hosam.salah.5895?mibextid=ZbWKwL' className='me-4 text-reset'>
                                        <FaLinkedin />
                                    </a>
                                    <a href='https://github.com/HossamSalah1' className='me-4 text-reset'>
                                        <FaGithub />
                                    </a>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', fontSize: '14px' }}>
                    <a className='text-reset fw-bold' href='' style={{ textDecoration: "none" }}>
                        React Task
                    </a>
                    {' '}© {new Date().getFullYear()} All rights reserved.
                </div>
            </MDBFooter>


        </>
    }
}