import axios from "../../axios";
import React, { useState } from 'react';
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";

const SkillAddScreen = () => {
    let navigate = useNavigate();
    const [ title, setTitle ] = useState( "" );

    const skillAddHandler = async ( e ) => {
        e.preventDefault();
        const request = {
            id: title.toLowerCase().split( " " ).join( "-" ),
            title
        };

        const res = await axios( {
            method: "post",
            url: "/api/skills/add",
            data: request
        } );

        if ( res ) {
            sessionStorage.removeItem( "skills" );
            navigate( "/skills" );
        }
        else
            <Message variant="danger" children="Something went wrong!" />;

    };

    return (
        <Container className="form-container">
            <h5 className="mb-3 add-item">ADD SKILL</h5>
            <Form onSubmit={ skillAddHandler }>
                <Form.Group controlId='title'>
                    <Form.Label>Skill Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Skill'
                        value={ title }
                        onChange={ ( e ) => setTitle( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant="dark" className='mt-4 btn-block w-50'>
                    Add Skill &nbsp;
                    <i class="fas fa-solid fa-right-to-bracket"></i>
                </Button>
            </Form>
        </Container>
    );
};

export default SkillAddScreen;