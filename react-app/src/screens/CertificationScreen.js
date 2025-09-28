import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import Loader from "../components/Loader";

const CertificationScreen = () => {
    const params = useParams();
    const [ title, setTitle ] = useState( "" );
    const [ image, setImage ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [ link, setLink ] = useState( "" );
    const [ loading, setLoading ] = useState( true );


    const getCertification = async () => {
        const { data } = await axios.get( `/api/certifications/${ params.id }` );
        if ( data != null && data.title != null ) {
            setTitle( data.title );
            setDescription( data.description );
            setLink( data.link );
            setImage( data.image );
            setLoading( false );
        }
    };

    useEffect( () => {
        getCertification();
    }, [] );

    return (
        <Container className="mt-5">
            <Row>
                {
                    loading ? <Loader /> : (
                        <>
                            <Col>
                                <h4 className="mb-5">
                                    <Link to="/certifications">
                                        <i class="fa-solid fa-circle-arrow-left"></i>
                                    </Link>
                                    &nbsp;&nbsp;{ title }</h4>
                                <img className="certificate-img" src={ `data:image/png;base64, ${ image }` }></img>
                            </Col>
                            <Col className="p-4">
                                <h5>Description</h5>
                                <br />
                                { description.split( ". " ).map( line => <h6><i class="fa-solid fa-check"></i> &nbsp;{ line }.</h6> ) }
                                <div className="mt-5">
                                    <a href={ link } target="_blank">
                                        <i class="fa-solid fa-up-right-from-square social"></i>
                                    </a>
                                </div>
                            </Col>
                        </>
                    )
                }
            </Row>
        </Container>
    );
};

export default CertificationScreen;