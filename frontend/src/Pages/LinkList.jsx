//State
import { useState,useEffect } from 'react';

// react-router-dom
import { Link, Outlet, useParams } from 'react-router-dom';


// Bootstrap 
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

// File
import { links } from '../links';
import BackAndForward from '../Components/BackAndForward';
import LinkDetail from '../Components/LinkDetail';

export default function LinkList() {
  //State
  const [linkState, setLinkState] = useState(links);
  const [addLink, setLink] = useState({});

  // Font Awesome
  const fBookOpen = <FontAwesomeIcon icon={faInfo} />
  const fYoutube = <FontAwesomeIcon icon={faYoutube} />

  //add link function
  let handleAddTitle = function (event) {
    let addTitle = { ...addLink, title: event.target.value }
    setLink(addTitle);
  }

  let handleAddDescription = function (event) {
    let addDescription = { ...addLink, description: event.target.value }
    setLink(addDescription);
  }

  let handleAddUrl = function (event) {
    let addUrl = { ...addLink, url: event.target.value }
    console.log(addUrl);
    setLink(addUrl);
  }

  let handleSubmit = function () {
    let a = [];
    a = addLink;
    let originUrl = linkState;
    let b = originUrl.concat(a);
    setLinkState(b);
  }

  let handleDeleteLink = function (i) {
    let newObject = [...linkState];
    newObject.splice(i, 1);
    setLinkState(newObject);
  
  }
  // useEffect(()=>{
  //   console.log(linkState)
  // },[linkState])

  

  return (
    <>
    <LinkDetail idd={linkState}></LinkDetail>

      <h2> <span style={{ color: "red" }}> {fYoutube}</span> Top 5 Youtube video links</h2>

    

      <BackAndForward />

      <br />

      <div className="d-flex align-self-center justify-content-center text-center">
        <Card style={{ width: '30rem' }} >
          <ListGroup variant="flush">
            {linkState
              //    .sort(function (a, b) {
              //   let textA = a.title.toUpperCase();
              //   let textB = b.title.toUpperCase();
              //   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
              // })
              .map((link, i) => (
                
                <ListGroup.Item key={i}>
                  <h5>Platform: {link.title}</h5>
                  <p> Description: {link.description}</p>
                  <Button variant="outline-primary">
                    <Link to={`${i}`}>{fBookOpen} Info </Link>
                  </Button>
                  <Button onClick={() => { handleDeleteLink(i) }} variant="outline-danger">
                    Delete Link
                  </Button>
                  <br />
                  {/* <p
                  onClick={() =>
                    navigate(`/link/${i}`)
                  }
                >
                  go to that page
                </p> */}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Card>
      </div>

      <br />

      <div className="d-flex align-self-center justify-content-center text-center">

        <Card>
          <Card.Body>
            <Card.Title> Add Link </Card.Title>

            <form className="d-flex">

              <Card.Text>
                <label> Title <input name="title" type="text" onChange={handleAddTitle} /> </label>
              </Card.Text>

              <Card.Text>
                <label> Description<input name="description" type="text" onChange={handleAddDescription} /> </label>
              </Card.Text>

              <Card.Text>
                <label> URL <input name="url" type="text" onChange={handleAddUrl} /> </label>
              </Card.Text>

            </form>
            <Button onClick={handleSubmit} variant="outline-warning" className="text-center "> Submit</Button>
          </Card.Body>
        </Card>
      </div>
      <br />
    </>
  )
}
