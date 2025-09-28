import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Certification from "../components/Certification";
import EmptyCard from "../components/EmptyCard";
import axios from "../axios";
import Loader from "../components/Loader";

const CertificationsScreen = () => {

    const [ loading, setLoading ] = useState( true );
    const [ certifications, setCertifications ] = useState( [] );
    const [ loggedIn, setLoggedIn ] = useState( sessionStorage.getItem( "loggedIn" ) );

    const getAllCertifications = async () => {
        const { data } = await axios.get( '/api/certifications/' );
        setCertifications( data );
        setLoading( false );
    };

    useEffect( () => {
        getAllCertifications();
    }, [] );


    return (
        <Container>
            <h5 className="mt-4">MY CERTIFICATIONS</h5>
            <Row>
                {
                    loading ? <Loader /> : (
                        certifications.map( ( certification ) => (
                            <Col key={ certification.id } sm={ 12 } md={ 6 } lg={ 6 } xl={ 4 }>
                                <Certification certification={ certification } />
                            </Col>
                        ) ) ) }
                {
                    loggedIn &&
                    <Col sm={ 12 } md={ 6 } lg={ 6 } xl={ 4 }>
                        <EmptyCard path="/admin/certifications/add" />
                    </Col>
                }

            </Row>
        </Container>
    );
};

export default CertificationsScreen;