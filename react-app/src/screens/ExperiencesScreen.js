import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import EmptyCard from "../components/EmptyCard";
import axios from "../axios";
import Experience from "../components/Experience";
import Loader from "../components/Loader";


const ExperiencesScreen = () => {
    const [ loading, setLoading ] = useState( true );
    const [ experiences, setExperiences ] = useState( [] );
    const [ loggedIn, setLoggedIn ] = useState( sessionStorage.getItem( "loggedIn" ) );

    const getAllExperiences = async () => {
        if ( sessionStorage.getItem( "experiences" ) )
            setExperiences( JSON.parse( sessionStorage.getItem( "experiences" ) ) );
        else { 
            const { data } = await axios.get( '/api/experiences/' );
            setExperiences( data );
            sessionStorage.setItem( "experiences", JSON.stringify( data ) );
        }        
        setLoading( false );
    };

    useEffect( () => {
        getAllExperiences();
    }, [] );

    return (
        <Container>
            <h5 className="mt-4">MY EXPERIENCES</h5>
            <Row>
                {
                    loading ? <Loader /> : (
                        experiences.map( ( experience ) => (
                            <Col lg={ 6 } key={ experience.id }>
                                <Experience experience={ experience } />
                            </Col>
                        ) ) ) }
                {
                    loggedIn &&
                    <Col sm={ 12 } md={ 6 } lg={ 6 } xl={ 4 }>
                        <EmptyCard path="/admin/experiences/add" />
                    </Col>
                }
            </Row>
        </Container>
    );
};

export default ExperiencesScreen;