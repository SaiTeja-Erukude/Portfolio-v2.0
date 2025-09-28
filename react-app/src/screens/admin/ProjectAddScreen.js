import axios from "../../axios";
import React, { useState } from 'react';
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";

const ProjectAddScreen = () => {
    const [ title, setTitle ] = useState( "" );
    const [ image, setImage ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [ hostLink, setHostLink ] = useState( "" );
    const [ githubLink, setGithubLink ] = useState( "" );

    let navigate = useNavigate();

    const projectAddHandler = async ( e ) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append( "id", title.toLowerCase().split( " " ).join( "-" ) );
        formData.append( "title", title );
        formData.append( "image", image );
        formData.append( "description", description );
        formData.append( "hostLink", hostLink );
        formData.append( "githubLink", githubLink );

        const res = await axios( {
            method: "post",
            url: "/api/projects/add",
            data: formData
        } );

        if ( res ) {
            sessionStorage.removeItem( "projects" );
            navigate( "/projects" );
        }
        else
            <Message variant="danger" children="Something went wrong!" />;

    };

    return (
        <Container className="form-container">
            <h5 className="mb-3 add-item" >ADD PROJECT</h5>
            <Form onSubmit={ projectAddHandler } encType="multipart/form-data">
                <Form.Group controlId='title'>
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter project title'
                        value={ title }
                        onChange={ ( e ) => setTitle( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='image' className="mt-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        required
                        type='file'
                        placeholder='Select Image'
                        accept=".jpeg, .png, .jpg"
                        onChange={ ( e ) => setImage( e.target.files[ 0 ] ) }
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='description' className="mt-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea" rows={ 3 }
                        placeholder='Enter description'
                        value={ description }
                        onChange={ ( e ) => setDescription( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='hostLink' className="mt-3">
                    <Form.Label>Host Link</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter host link'
                        value={ hostLink }
                        onChange={ ( e ) => setHostLink( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='githubLink' className="mt-3">
                    <Form.Label>Github Link</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter github link'
                        value={ githubLink }
                        onChange={ ( e ) => setGithubLink( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant="dark" className='mt-4 btn-block w-50'>
                    Add Project &nbsp;
                    <i class="fas fa-solid fa-right-to-bracket"></i>
                </Button>
            </Form>
        </Container>
    );
};

export default ProjectAddScreen;