import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import Loader from "../components/Loader";

const ExperienceScreen = () => {
    const params = useParams();
    const [ jobRole, setJobRole ] = useState( "" );
    const [ image, setImage ] = useState( "" );
    const [ companyName, setCompanyName ] = useState( "" );
    const [ startDate, setStartDate ] = useState( "" );
    const [ endDate, setEndDate ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [ jobType, setJobType ] = useState( "" );
    const [ loading, setLoading ] = useState( true );

    const getExperience = async () => {
        const { data } = await axios.get( `/api/experiences/${ params.id }` );
        if ( data != null && data.jobRole != null ) {
            setJobRole( data.jobRole );
            setCompanyName( data.companyName );
            setStartDate( data.startDate );
            setEndDate( data.endDate );
            setDescription( data.description );
            setJobType( data.jobType );
            setImage( data.image );
            setLoading( false );
        }
    };

    useEffect( () => {
        getExperience();
    }, [] );

    return (
        <Container className="mt-4">
            <h4>
                <Link to="/experiences">
                    <i class="fa-solid fa-circle-arrow-left"></i>
                </Link>
            </h4>
            <Row className="mt-4">
                {
                    loading ? <Loader /> : (
                        <>
                            <Col lg={ 4 }>
                                <img className="exp-img" src={ `data:image/png;base64, ${ image }` }></img>
                            </Col>
                            <Col className="p-4">
                                <h5 className="pb-3 job-role">{ jobRole.toUpperCase() }</h5>
                                <br />
                                <h6>{ companyName.toUpperCase() }</h6>
                                <h6>{ startDate } - { endDate }</h6>
                                <h6>{ jobType }</h6>
                                <br />
                                <br />
                                <h6>Job Responsibilities</h6>
                                <br />
                                { description.split( ". " ).map( line => <h6><i class="fa-solid fa-check"></i> &nbsp;{ line }.</h6> ) }

                            </Col>
                        </>
                    )
                }
            </Row>
        </Container>
    );
};

export default ExperienceScreen;