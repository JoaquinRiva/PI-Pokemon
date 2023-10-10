import { Link } from "react-router-dom";


function Card({id, image, name, type, attack, defense, hp}) {
    return(
        <div key={id}>
            <div>
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