import React from 'react';
import {Spinner, Col, Row} from 'react-bootstrap';

export const Loader = () => {
    return (
        <Row className="justify-content-md-center">
        <Col>
            <Spinner animation="border" role="status"></Spinner> 
            Loading the menu please wait ...
        </Col>
        </Row>
    )
} 