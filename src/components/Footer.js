import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-4">
                    <Col className="p-5" md={3} sm={12}>
                        
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Deepa kumari.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;