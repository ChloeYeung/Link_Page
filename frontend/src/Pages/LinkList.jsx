//State
import { useState, useEffect } from "react";

// react-router-dom
import { Link, Outlet, useParams } from "react-router-dom";
// Bootstrap
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
// File
import { links } from "../links";
import BackAndForward from "../Components/BackAndForward";
import LinkDetail from "../Components/LinkDetail";
//react-icon
import { MdOutlineTitle, MdOutlineDescription } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { AiFillDelete, AiOutlineInfoCircle } from "react-icons/ai";
//jquery
import $ from 'jquery';

export default function LinkList() {
  //State
  const [linkState, setLinkState] = useState(links);
  const [addLink, setLink] = useState({});

  // Font Awesome
  const fBookOpen = <FontAwesomeIcon icon={faInfo} />;
  const fYoutube = <FontAwesomeIcon icon={faYoutube} />;

  //add link function
  let handleAddTitle = function (event) {
    let addTitle = { ...addLink, title: event.target.value };
    setLink(addTitle);
  };

  let handleAddDescription = function (event) {
    let addDescription = { ...addLink, description: event.target.value };
    setLink(addDescription);
  };

  let handleAddUrl = function (event) {
    let addUrl = { ...addLink, url: event.target.value };
    console.log(addUrl);
    setLink(addUrl);
  };

  let handleSubmit = function () {
    let a = [];
    a = addLink;
    let originUrl = linkState;
    let b = originUrl.concat(a);
    setLinkState(b);
    $("#inputValue1").val("");
    $("#inputValue2").val("");
    $("#inputValue3").val("");
  };

  let handleDeleteLink = function (i) {
    let newObject = [...linkState];
    newObject.splice(i, 1);
    setLinkState(newObject);
  };

  return (
    <>
      <LinkDetail idd={linkState}></LinkDetail>

      <h2 className="container">
        {" "}
        <span style={{ color: "red" }}> {fYoutube}</span> Top 5 Youtube video
        links
      </h2>

      <br />

      <div className="container d-flex align-self-center justify-content-center text-center">
        <Card style={{ width: "50rem" }}>
          <ListGroup variant="flush">
            {linkState.map((link, i) => (
              <ListGroup.Item key={i} id="linksCard">
                <div className="row">
                  <div className="col-10">
                    <h5>Platform: {link.title}</h5>
                    <p> Description: {link.description}</p>
                  </div>
                  <div className="col">
                    <div className="row">
                      <Button variant="outline-primary">
                        <Link to={`${i}`}>
                          <AiOutlineInfoCircle />{" "}
                        </Link>
                      </Button>
                    </div>

                    <div className="row">
                      <Button
                        onClick={() => {
                          handleDeleteLink(i);
                        }}
                        variant="outline-danger"
                      >
                        <AiFillDelete />
                      </Button>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>

      <br />

      <BackAndForward />

      <br />

      <div className="container" id="addFormCard">
        <div className="row text-center" id="addFormCardTitle">
          <h5>
            <b> Add Link</b>
          </h5>
        </div>
        <div className="row">
          <Form id="addFormCardInner">
            <Form.Group className="mb-3" >
              <Form.Label>
                <MdOutlineTitle /> Title
              </Form.Label>
              <Form.Control
                id="inputValue1"
                name="title"
                type="text"
                onChange={handleAddTitle}
                placeholder="Title"
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>
                <MdOutlineDescription /> Description
              </Form.Label>
              <Form.Control
                id="inputValue2"
                name="description"
                type="text"
                onChange={handleAddDescription}
                placeholder="Description"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <BiCodeCurly /> URL
              </Form.Label>
              <Form.Control
                id="inputValue3"
                name="url"
                type="text"
                onChange={handleAddUrl}
                placeholder="URL"
              />
            </Form.Group>

            <div className="text-center">
              <Button onClick={handleSubmit} variant="outline-dark">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <br />
    </>
  );
}
