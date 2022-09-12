//creating single link
//font awnsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

export default function SingleList01(props) {
    const fInfo = <FontAwesomeIcon icon={faInfo} />
    return (
        <div>
            <div className="d-flex align-self-center justify-content-center text-center">
                <Card style={{ width: '30rem' }} >
                    <ListGroup variant="flush">
                        <ListGroup.Item key={props.i}>
                            <h5>Platform: {props.title}</h5>
                            <p> Description: {props.description}</p>
                            <Button variant="outline-primary">
                                <Link to={`${props.i}`}>{fInfo} Info </Link>
                            </Button>
                            <Button onClick={() => { props.handleDeleteLink }} variant="outline-danger">
                                Delete Link
                            </Button>
                            <br />
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    )
}
