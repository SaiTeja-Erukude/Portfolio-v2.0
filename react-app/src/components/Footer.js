import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-2 footer-text'>Copyright &copy; Sai Teja Erukude 2022</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;