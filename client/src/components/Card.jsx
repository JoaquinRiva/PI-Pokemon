import { Link } from "react-router-dom";
import "./Card.css"


function Card({id, image, name, type, attack, defense, hp}) {
    return(
        <div className="cardContenedor" key={id}>
            <div >
                <img src={image} alt={name} />
            </div>
            <h2>NAME: {name}</h2>
            <p>ID: {id}</p>
            <p>Type: {type}</p>
            <p>attack: {attack}</p>
            <p>defense: {defense}</p>
            <p>HP: {hp}</p>
            <Link to={`/detail/${id}`}>
            <button>Details of {name}</button>
            </Link>
        </div>
    )
}

export default Card;