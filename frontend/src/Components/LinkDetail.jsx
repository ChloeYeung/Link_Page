import { useParams } from "react-router-dom";
import { links } from "../links";
import Card from "react-bootstrap/Card";
import LinkList from "../Pages/LinkList";

export default function LinkDetail(props) {
  const { id } = useParams();

  return (
    <div>
      <Card
        id="detailCard"
        className="d-flex align-self-center justify-content-center text-center"
      >
        <Card.Header as="h5">
          Title: &nbsp;
          {props.idd[id] == undefined ? <div></div> : props.idd[id].title}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            Description: &nbsp;
            {props.idd[id] == undefined ? (
              <div></div>
            ) : (
              props.idd[id].description
            )}
          </Card.Title>
          <Card.Text>
            URL: &nbsp;
            <a target="_blank" href={props.idd[id] == undefined ? " " : props.idd[id].url}>
              {props.idd[id] == undefined ? <div></div> : props.idd[id].url}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
