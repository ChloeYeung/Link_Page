//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//image
import profile from '../images/profile.jpg';

//route
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
    return (
        <div>
            <br />
            <div className="d-flex align-self-center justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={profile} />
                    <Card.Body>
                        <Card.Title>Author - Chloe Yeung</Card.Title>
                        <div>
                            <ul>
                                <li>
                                    enter pokemon name to show the name, type and image via Pokemon API  
                                </li>
                                <li>
                                    It displays the top 5 YouTube videos.
                                </li>
                                <li>
                                    Links can be added and sorted.
                                </li>
                            </ul>
                        </div>

                        <div className='text-center'>
                            <Link to="/profile/api">
                                <Button variant='warning' >Test API</Button>
                            </Link>
                        </div>

                        <div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <Outlet />

        </div >
    )
}
