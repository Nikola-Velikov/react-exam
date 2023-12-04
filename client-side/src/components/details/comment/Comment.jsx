import { Button, Card } from "react-bootstrap";
import formatDateTime from "../../../utils/formatDateTime";
import { Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export  function Comment({ comment, commentDeleteHandler, userId }) {

    return (
        <>
            <Card className="mb-2" key={comment._id}>
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                
                                <div className='ms-2'><p style={{display:'inline-block',fontSize:'22px',fontWeight:'700'}} className="text-decoration-none">{comment.username}</p> commented</div>
                            </div>
                            {comment.userId == userId ? (<Button variant="outline-danger" className="float-end" onClick={() => commentDeleteHandler(comment._id)}><Trash /></Button>) : ''}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <i className="text-secondary">{formatDateTime(new Date(comment.createdAt))}</i> <br />
                        {comment.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}