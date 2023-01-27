import React, {useState} from 'react'
import logo from '../logo.svg'
import { Container, Row, Col, Nav, Form, Button} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

const ThisYear = new Date().getFullYear();

export default function Index() {
  return (
   <footer className='pt-5'>
    <Container fluid>
    <Row>
        <Col md="2"  xs="6" sm="6" className="mb-3">
            <h5>Section</h5>
            <Nav className='flex-column'>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Features</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Pricing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Facts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">About</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
        <Col md="2" xs="6" sm="6" className="mb-3">
            <h5>Section</h5>
            <Nav className='flex-column'>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Features</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Pricing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Facts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">About</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
        <Col md="2"  xs="6" sm="6" className="mb-3">
            <h5>Section</h5>
            <Nav className='flex-column'>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Features</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Pricing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">Facts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className="p-o text-muted">About</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
        <Col md="5" className="mb-3 offset-md-1 text-start">
            <Form>
                <h5>subscribed to Newsletter</h5>
                <p>Monthly Digest of What's new and everything from us</p>
                <Form.Group className='mb-3' controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <Form.Control type='email' placeholder="Enter Email" /> 
                    <Button variant="primary" type="submit">Submit</Button>
                    </div>
                    <Form.Text className="text-muted">We'll never share youre email with anyone else</Form.Text>
                </Form.Group>
               
            </Form>
        </Col> 
    </Row>
    <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
        <p className="">&copy; {ThisYear} React, Inc, All rights reserved.</p>
        <ul className='list-unstyled d-flex'>
            <li><Icon.Facebook size={30} title='fb' color='royalblue' /></li>
        </ul>
    </div>
    </Container>
   </footer>
  )
}

