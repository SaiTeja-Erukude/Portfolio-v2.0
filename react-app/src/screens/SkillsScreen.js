import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Skill from "../components/Skill";
import EmptyCard from "../components/EmptyCard";
import axios from "../axios";
import Loader from "../components/Loader";

const SkillsScreen = () => {

    const [ skills, setSkills ] = useState( [] );
    const [ loggedIn, setLoggedIn ] = useState( sessionStorage.getItem( "loggedIn" ) );
    const [ loading, setLoading ] = useState( true );

    const getAllSkills = async () => {
        if ( sessionStorage.getItem( "skills" ) )
            setSkills( JSON.parse( sessionStorage.getItem( "skills" ) ) );
        else {
            const { data } = await axios.get( '/api/skills/' );
            setSkills( data );
            sessionStorage.setItem( "skills", JSON.stringify( data ) );
        }
        setLoading( false );
    };

    useEffect( () => {
        getAllSkills();
    }, [] );


    return (
        <Container>
            <h5 className="mt-4 mb-5">MY SKILLS</h5>
            <Row>
                {
                    loading ? <Loader /> : (
                        skills.map( ( skill ) => (
                            <Col xs={ 6 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 3 } key={ skill.id }>
                                <Skill skill={ skill } />
                            </Col>
                        ) ) ) }
                {
                    loggedIn &&
                    <Col sm={ 12 } md={ 6 } lg={ 6 } xl={ 4 }>
                        <EmptyCard path="/admin/skills/add" />
                    </Col>
                }
            </Row>
        </Container>
    );
};

export default SkillsScreen;