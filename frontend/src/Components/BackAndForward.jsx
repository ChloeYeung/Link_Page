import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { MdArrowBack, MdOutlineArrowForward } from "react-icons/md";

export default function GoBack() {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <Button
              variant="dark"
              onClick={() => {
                navigate(-1);
              }}
            >
           <MdArrowBack /> Back
            </Button>
          </div>
          <div className="col">
            <Button
              variant="secondary"
              onClick={() => {
                navigate(1);
              }}
            >
             Forward <MdOutlineArrowForward /> 
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
