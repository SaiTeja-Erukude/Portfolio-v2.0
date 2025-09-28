import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import axios from "../axios";


const Experience = ( { experience } ) => {
    const [ loggedIn, setLoggedIn ] = useState( sessionStorage.getItem( "loggedIn" ) );

    useEffect( () => {
        setLoggedIn( sessionStorage.getItem( "loggedIn" ) );
    }, [ loggedIn ] );

    const deleteHandler = async () => {
        let text = "You wanna delete the experience for sure?\n";
        if ( window.confirm( text ) === true ) {
            const res = await axios.get( `/api/experiences/delete/${ experience.id }` );
            if ( res != null ) {
                sessionStorage.removeItem( "experiences" );
                document.location.reload();
            }
        }
    };

    return (
        <Card className="p-1 exp-card">
            <Link to={ `/experiences/${ experience.id }` }>
                <Row>
                    <Col lg={ 6 } className="p-4">
                        <Card.Img className="img" variant="top" src={ `data:image/png;base64, ${ experience.image }` } />

                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title className="mt-2 mb-4 role">{ experience.jobRole }</Card.Title>
                            <h6>{ experience.companyName }</h6>
                            <h6>{ experience.jobType }</h6>
                            <h6>{ experience.startDate } - { experience.endDate }</h6>
                            <br />
                            <div className="view-more">
                                <Link to={ `/experiences/${ experience.id }` }>
                                    <Button variant="btn btn-sm btn-dark">View More</Button>
                                </Link>
                                { loggedIn &&
                                    <Link to={ `/admin/experiences/${ experience.id }/edit` }>
                                        <i className='fa fa-edit mx-5'></i>
                                    </Link>
                                }
                                {
                                    loggedIn &&
                                    <i className='fa fa-trash' onClick={ deleteHandler }></i>
                                }
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Link>
        </Card >
    );
};

export default Experience;