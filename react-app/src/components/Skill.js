import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "../axios";

const Skill = ( { skill } ) => {
    const [ loggedIn, setLoggedIn ] = useState( sessionStorage.getItem( "loggedIn" ) );

    useEffect( () => {
        setLoggedIn( sessionStorage.getItem( "loggedIn" ) );
    }, [ loggedIn ] );

    const deleteHandler = async () => {
        let text = "You wanna delete the skill for sure?\n";
        if ( window.confirm( text ) === true ) {
            const res = await axios.get( `/api/skills/delete/${ skill.id }` );
            if ( res.data.status === "OK" ) {
                sessionStorage.removeItem( "skills" );
                document.location.reload();
            }

        }
    };

    return (
        <div className="skill-div">
            <h6>{ skill.title }</h6>
            { loggedIn &&
                <Link to={ `/admin/skills/${ skill.id }/edit` }>
                    <i className='fa fa-edit mx-3'></i>
                </Link>
            }
            {
                loggedIn &&
                <i className='fa fa-trash' onClick={ deleteHandler }></i>
            }
        </div>
    );
};

export default Skill;