import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


export default function GoBack() {
    const navigate = useNavigate();
    return (
        <div className="text-center">
            <Button variant="dark" onClick={() => { navigate(-1); }}>
                GoBack
            </Button>

            <Button variant="secondary" onClick={() => { navigate(1); }}>
                Go Forward
            </Button>
        </div>
    )
}
