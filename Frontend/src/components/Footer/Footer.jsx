import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const quick__links=[
  {
      path:'/home',
      display:'Home'
  },{
      path:'/about',
      display:'About'
  },{
      path:'/tours',
      display:'Tours'
  }
];

const quick__links2=[
  {
      path:'/gallery',
      display:'Gallery'
  },{
      path:'/login',
      display:'Login'
  },{
      path:'/register',
      display:'Register'
  }
]

const year = new Date().getFullYear()
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg='3'>
               <div className="logo">
                <img src={logo} alt="" />
                <p>A traveling site help to plan your trips more efficently</p>

                <div className="social__links d-flex align-items-center gap-4">
                  <span>
                    <Link to='#'><i className="ri-youtube-line"></i></Link>
                  </span> 
                  <span>
                    <Link to='#'><i className="ri-github-fill"></i></Link>
                  </span>
                  <span>
                    <Link to='#'><i className="ri-facebook-circle-line"></i></Link>
                  </span>
                  <span>
                    <Link to='#'><i className="ri-instagram-line"></i></Link>
                  </span>
                </div>
               </div>
            </Col>
            <Col lg='3'>
              <h5 className="footer__link-title">Discover</h5>
              <ListGroup className="footer__quick-links">
              {
                quick__links.map((item,index)=>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
              </ListGroup>
            </Col>
            <Col lg='3'>
           <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup className="footer__quick-links">
              {
                quick__links2.map((item,index)=>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
              </ListGroup>
            </Col>
            <Col lg='3'><h5 className="footer__link-title">Contact</h5>
              <ListGroup className="footer__quick-links">
              
                
                  <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                   <h6 className="mb-0 d-flex align-items-center gap-2"><span><i className="ri-map-pin-line"></i></span>Address:</h6>
                   <p className="mb-0">Punjab,India</p>
                  </ListGroupItem>

                  <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                   <h6 className="mb-0 d-flex align-items-center gap-2"><span><i className="ri-mail-line"></i></span>Email:</h6>
                   <p className="mb-0">support@utour.com</p>
                  </ListGroupItem>

                  <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                   <h6 className="mb-0 d-flex align-items-center gap-2"><span><i className="ri-phone-fill"></i></span>Phone:</h6>
                   <p className="mb-0">+91 9876543210</p>
                  </ListGroupItem>
               
              </ListGroup></Col>
              <Col lg='12' className="text-center">
                <p className="copyright">Copyright {year} , design and develop by team. All rights reserved</p>
              </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
