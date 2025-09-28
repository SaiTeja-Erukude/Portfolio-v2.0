import axios from "../../axios";
import React, { useState } from 'react';
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";

const ExperienceAddScreen = () => {
    const [ jobRole, setJobRole ] = useState( "" );
    const [ image, setImage ] = useState( "" );
    const [ companyName, setCompanyName ] = useState( "" );
    const [ startDate, setStartDate ] = useState( "" );
    const [ endDate, setEndDate ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [ jobType, setJobType ] = useState( "" );

    let navigate = useNavigate();

    const experienceAddHandler = async ( e ) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append( "id", jobRole.toLowerCase().split( " " ).join( "-" ) );
        formData.append( "jobRole", jobRole );
        formData.append( "image", image );
        formData.append( "companyName", companyName );
        formData.append( "startDate", startDate );
        formData.append( "endDate", endDate );
        formData.append( "description", description );
        formData.append( "jobType", jobType );

        const res = await axios( {
            method: "post",
            url: "/api/experiences/add",
            data: formData
        } );

        if ( res ) {
            sessionStorage.removeItem( "experiences" );
            navigate( "/experiences" );
        }
        else
            <Message variant="danger" children="Something went wrong!" />;

    };

    return (
        <Container className="form-container">
            <h5 className="mb-3 add-item">ADD EXPERIENCE</h5>
            <Form onSubmit={ experienceAddHandler } encType="multipart/form-data">
                <Form.Group controlId='title'>
                    <Form.Label>Job Role</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter job role'
                        value={ jobRole }
                        onChange={ ( e ) => setJobRole( e.target.value ) }
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
                <Form.Group controlId='companyName' className="mt-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Enter company name'
                        value={ companyName }
                        onChange={ ( e ) => setCompanyName( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='startDate' className="mt-3">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Enter Start Date'
                        value={ startDate }
                        onChange={ ( e ) => setStartDate( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='endDate' className="mt-3">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Enter End Date'
                        value={ endDate }
                        onChange={ ( e ) => setEndDate( e.target.value ) }
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
                <Form.Group controlId='jobType' className="mt-3">
                    <Form.Label>Job Type</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Enter Job Type'
                        value={ jobType }
                        onChange={ ( e ) => setJobType( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant="dark" className='mt-4 btn-block w-50'>
                    Add Experience &nbsp;
                    <i class="fas fa-solid fa-right-to-bracket"></i>
                </Button>
            </Form>
        </Container>
    );
};

export default ExperienceAddScreen;