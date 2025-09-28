import axios from "../../axios";
import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Message from "../../components/Message";

const SkillEditScreen = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [ title, setTitle ] = useState( "" );

    const getSkill = async () => {
        const { data } = await axios.get( `/api/skills/${ params.id }` );
        if ( data != null && data.title != null ) {
            setTitle( data.title );
        }
    };
    useEffect( () => {
        getSkill();
    }, [] );

    const skillEditHandler = async ( e ) => {
        e.preventDefault();
        const request = {
            id: params.id,
            title,
        };

        const { data } = await axios( {
            method: "post",
            url: "/api/skills/add",
            data: request
        } );

        if ( data ) {
            sessionStorage.removeItem( "skills" );
            navigate( "/skills" );
        }
        else
            <Message variant="danger" children="Something went wrong!" />;
    };
    return (
        <Container className="form-container">
            <h5 className="mb-5 add-item">UPDATE SKILL</h5>
            <Form onSubmit={ skillEditHandler }>
                <Form.Group controlId='title'>
                    <Form.Label>Skill Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter skill title'
                        value={ title }
                        onChange={ ( e ) => setTitle( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant="dark" className='mt-4 btn-block w-50'>
                    Update Skill &nbsp;
                    <i class="fas fa-solid fa-right-to-bracket"></i>
                </Button>
            </Form>
        </Container>
    );
};

export default SkillEditScreen;