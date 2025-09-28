import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import axios from "../axios";

const Project = ( { project } ) => {

    const [ loggedIn, setLoggedIn ] = useState( sessionStorage.getItem( "loggedIn" ) );

    useEffect( () => {
        setLoggedIn( sessionStorage.getItem( "loggedIn" ) );
    }, [ loggedIn ] );

    const deleteHandler = async () => {
        let text = "You wanna delete the project for sure?\n";
        if ( window.confirm( text ) === true ) {
            const res = await axios.get( `/api/projects/delete/${ project.id }` );
            if ( res != null ) {
                sessionStorage.removeItem( "projects" );
                document.location.reload();
            }
        }
    };

    return (
        <Card style={ { width: '25em' } } className="card p-3">
            <Link to={ `/projects/${ project.id }` }>
                <Card.Img className="img" variant="top" src={ `data:image/png;base64, ${ project.image }` } />
            </Link>
            <Card.Body>
                <Card.Title className="mt-2 mb-4">{ project.title }</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={ `/projects/${ project.id }` }>
                        <Button variant="btn btn-sm btn-dark">View More</Button>
                    </Link>
                    { loggedIn &&
                        <Link to={ `/admin/project/${ project.id }/edit` }>
                            <i className='fa fa-edit'></i>
                        </Link>
                    }
                    {
                        loggedIn &&
                        <i className='fa fa-trash' onClick={ deleteHandler }></i>
                    }

                </div>
            </Card.Body>

        </Card>
    );
};

export default Project;