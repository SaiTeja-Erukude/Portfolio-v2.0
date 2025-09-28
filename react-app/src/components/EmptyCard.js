import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const EmptyCard = ( { path } ) => {
    return (
        <Link to={ path }>
            <Card className="empty-card p-4">
                <Card.Body className="empty-card-body">
                    <Card.Title><i class="fa-solid fa-plus"></i></Card.Title>
                    <Card.Text>&nbsp;Add</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default EmptyCard;