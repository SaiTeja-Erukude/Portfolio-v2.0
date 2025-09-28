import { useEffect, useState } from "react";
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import Message from "../components/Message";

const LoginScreen = () => {
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ loginSuccess, setLoginSuccess ] = useState( false );
    const [ error, setError ] = useState( '' );

    let navigate = useNavigate();

    const loginHandler = async ( e ) => {
        e.preventDefault();
        try {
            const { data } = await axios.post( "/api/admin/login", { email, password } );
            if ( data.message === "Admin Logged In!" ) {
                sessionStorage.setItem( "loggedIn", "true" );
                setLoginSuccess( true );
            }
        } catch ( e ) {
            setError( "Invalid Admin Credentials!" );
        }
    };

    useEffect( () => {
        if ( loginSuccess ) {
            navigate( "/?redirect=home" );
        }
    }, [ loginSuccess ] );

    return (
        <Container className="form-container">
            <h5 className="mb-5">ADMIN LOGIN</h5>
            { error && <Message className="mb-2" variant={ "danger" }>{ error } </Message> }
            <Form onSubmit={ loginHandler }>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password' className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={ password }
                        onChange={ ( e ) => setPassword( e.target.value ) }
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant="dark" className='mt-4 btn-block w-50'>
                    Log In &nbsp;
                    <i class="fas fa-solid fa-right-to-bracket"></i>
                </Button>
            </Form>
        </Container>
    );
};

export default LoginScreen;