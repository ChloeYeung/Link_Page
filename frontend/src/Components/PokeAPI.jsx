import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'

export default function PokeAPI() {
    const [pokemonData, setpokemonData] = useState({
        name: "",
        image: "",
        type: ""
    });
    let [apiName, setApiName] = useState("gengar");
    let [changeName, setchangeName] = useState("");

    let handleChangeApiName = function (event) {
        console.log(event.target.value);
        setchangeName(event.target.value);
    }

    let handleSubmitApi = function () {
        setApiName(changeName);
    }

    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/pokemon/${apiName}`)
            .then((response) => {
                setpokemonData(
                    {
                        name: response.data.forms[0].name,
                        image: response.data.sprites.front_default,
                        type: response.data.types[0].type.name
                    }
                )
            })
    }, [apiName]);

    const fFeather = <FontAwesomeIcon icon={faFeather} />

    return (
        <div >
            <div className='d-flex align-self-center justify-content-center text-center'>
                <Card id="apiCard">
                    <Card.Body>
                        <Card.Title>{pokemonData.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{pokemonData.type}</Card.Subtitle>
                        <div>
                            <img src={pokemonData.image} alt="Poke Image" />
                        </div>

                        <div>
                            <form>
                                <input name="name" type="text" onChange={handleChangeApiName} />
                            </form>
                            <br />
                            <Button id='apiCardBtn' onClick={handleSubmitApi}>Enter</Button>
                        </div>
                    </Card.Body>
                </Card>
            {/* </div>

     
            <div className='d-flex align-self-center justify-content-center text-center'> */}
                <Toast id='toastApi'>
                    <Toast.Header>
                        <strong className="me-auto">  {fFeather} Try to enter:</strong>
                    </Toast.Header>
                    <Toast.Body> squirtle , clefairy , ninetales , snorlax , wobbuffet </Toast.Body>
                </Toast>
            </div>


        </div>
    )
}
