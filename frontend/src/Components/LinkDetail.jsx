import { useParams } from 'react-router-dom';
import { links } from '../links';
import Card from 'react-bootstrap/Card';
import LinkList from '../Pages/LinkList';


export default function LinkDetail(props) {
    const { id } = useParams();

    return (
        <div>
           

            <Card id='detailCard' className="d-flex align-self-center justify-content-center text-center">
                <Card.Header as="h5">Title: {props.idd[id].title}</Card.Header>
                <Card.Body>
                    <Card.Title>Description: {props.idd[id].description}</Card.Title>
                    <Card.Text>
                        URL: <a href={props.idd[id].url}>  {props.idd[id].url}</a>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div >
    )
}


// //backup
// import { useParams } from 'react-router-dom';
// import { links } from '../links';
// import Card from 'react-bootstrap/Card';
// import LinkList from '../Pages/LinkList';


// export default function LinkDetail() {
//     const { id } = useParams();

//     return (
//         <div>

//             <Card id='detailCard' className="d-flex align-self-center justify-content-center text-center">
//                 <Card.Header as="h5">Title: {links[id].title}</Card.Header>
//                 <Card.Body>
//                     <Card.Title>Description: {links[id].description}</Card.Title>
//                     <Card.Text>
//                         URL: <a href={links[id].url}>  {links[id].url}</a>
//                     </Card.Text>
//                 </Card.Body>
//             </Card>

//         </div >
//     )
// }


