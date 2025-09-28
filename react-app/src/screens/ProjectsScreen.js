import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Project from "../components/Project";
import EmptyCard from "../components/EmptyCard";
import axios from "../axios";
import Loader from "../components/Loader";

const ProjectsScreen = () => {

    const [ loading, setLoading ] = useState( true );
    const [ projects, setProjects ] = useState( [] );
    const [ loggedIn, setLoggedIn ] = useState( sessionStorage.getItem( "loggedIn" ) );

    const getAllProjects = async () => {
        if ( sessionStorage.getItem( "projects" ) )
            setProjects( JSON.parse( sessionStorage.getItem( "projects" ) ) );
        else {
            const { data } = await axios.get( '/api/projects/' );
            setProjects( data );
            sessionStorage.setItem( "projects", JSON.stringify( data ) );
        }
        setLoading( false );
    };

    useEffect( () => {
        getAllProjects();
    }, [] );


    return (
        <Container>
            <h5 className="mt-4">SOME OF MY FAV PROJECTS</h5>
            <Row>
                {
                    loading ? <Loader /> : (
                        projects.map( ( project ) => (
                            <Col key={ project.id } sm={ 12 } md={ 6 } lg={ 6 } xl={ 4 }>
                                <Project project={ project } />
                            </Col>
                        ) ) ) }
                {
                    loggedIn &&
                    <Col sm={ 12 } md={ 6 } lg={ 6 } xl={ 4 }>
                        <EmptyCard path="/admin/projects/add" />
                    </Col>
                }

            </Row>
        </Container>
    );
};

export default ProjectsScreen;