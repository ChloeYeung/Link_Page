import React from 'react';
import { useLocation } from 'react-router-dom';
import error from '../images/error.jpg';
import Alert from 'react-bootstrap/Alert';



export default function Error() {
    let location = useLocation();
    return (
        <div >

            <br />

            <div className='d-flex align-self-center justify-content-center'>
                <img id="errorImg" src={error} alt="error" />
            </div>

            <br />

            <Alert key="success" variant="success" className='d-flex align-self-center justify-content-center'>
                No page matches for{' '}
                <Alert.Link href="#">{location.pathname}</Alert.Link>
                . Give it a click if
                you like.
            </Alert>
        </div>
    )
}


