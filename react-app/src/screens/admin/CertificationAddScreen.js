import axios from "../../axios";
import React, { useState } from 'react';
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";

const CertificationAddScreen = () => {
    const [ title, setTitle ] = useState( "" );
    const [ image, setImage ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [ link, setLink ] = useState( "" );

    let navigate = useNavigate();

    const certificationAddHandler = async ( e ) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append( "id", title.toLowerCase().split( " " ).join( "-" ) );
        formData.append( "title", title );
        formData.append( "image", image );
        formData.append( "description", description );
        formData.append( "link", link );

        const res = await axios( {
            method: "post",
            url: "/api/certifications/add",
            data: formData
        } );

        if ( res ) {
            sessionStorage.removeItem( "certifications" );
            navigate( "/certifications" );
        }
        else
            <Message variant="danger" children="Something went wrong!" />;

    };

    return (
        <Container className="form-container">
            <h5 className="mb-3 add-item" >ADD CERTIFICATION</h5>
            <Form onSubmit={ certificationAddHandler } encType="multipart/form-data">
                <Form.Group controlId='title'>
                    <Form.Label>Certification Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter certification title'
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
                <Form.Group controlId='link' className="mt-3">
                    <Form.Label>Link</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter link'
                        value={ link }
                        onChange={ ( e ) => setLink( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant="dark" className='mt-4 btn-block w-50'>
                    Add Certification &nbsp;
                    <i class="fas fa-solid fa-right-to-bracket"></i>
                </Button>
            </Form>
        </Container>
    );
};

export default CertificationAddScreen;