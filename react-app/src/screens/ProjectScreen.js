import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import Loader from "../components/Loader";

const ProjectScreen = () => {
    const params = useParams();
    const [ title, setTitle ] = useState( "" );
    const [ image, setImage ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [ hostLink, setHostLink ] = useState( "" );
    const [ githubLink, setGithubLink ] = useState( "" );
    const [ loading, setLoading ] = useState( true );

    const getProject = async () => {
        const { data } = await axios.get( `/api/projects/${ params.id }` );
        if ( data != null && data.title != null ) {
            setTitle( data.title );
            setDescription( data.description );
            setHostLink( data.hostLink );
            setGithubLink( data.githubLink );
            setImage( data.image );
            setLoading( false );
        }
    };

    useEffect( () => {
        getProject();
    }, [] );

    return (
        <Container className="mt-5">
            <Row>
                {
                    loading ? <Loader /> : (
                        <>
                            <Col>
                                <h4 className="mb-5">
                                    <Link to="/projects">
                                        <i class="fa-solid fa-circle-arrow-left"></i>
                                    </Link>
                                    &nbsp;&nbsp; { title }</h4>
                                <img className="screens-img d-flex" src={ `data:image/png;base64, ${ image }` }></img>
                            </Col>
                            <Col className="p-4">
                                <h5>Description</h5>
                                <br />
                                { description.split( ". " ).map( line => <h6><i class="fa-solid fa-check"></i> &nbsp;{ line }.</h6> ) }
                                <div className="mt-5">
                                    <a href={ hostLink } target="_blank">
                                        <i class="fa-solid fa-up-right-from-square social"></i>
                                    </a>
                                    <a href={ githubLink } target="_blank">
                                        <i class="fa-brands fa-github social"></i>
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

export default ProjectScreen;