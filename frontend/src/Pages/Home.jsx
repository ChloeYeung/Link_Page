//route
import { Link, Outlet } from "react-router-dom";
import BackAndForward from "../Components/BackAndForward";
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <div >
            <br />

            <div className="text-center">
                <p>This website was created by REACT.</p>
                <Link to="/profile">
                    <Button variant="outline-warning"> View More</Button>
                </Link>
            </div>
            <Outlet />

            <br />

                <BackAndForward className=" row-2 " />


        </div >
    )
}
