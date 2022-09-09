import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  navbarImage  from '../images/navbar.png';

function ShowNavbar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand><img src={navbarImage} alt="navbar image" id='navbarImage' /></Navbar.Brand>
                    <Nav className="me-auto flex-grow-1 justify-content-evenly">
                        <Link to="/"> Home </Link>
                        <Link to="/link">Link</Link>
                        <Link to="/invaild">Invaild</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ShowNavbar;