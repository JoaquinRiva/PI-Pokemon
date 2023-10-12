import { Link } from "react-router-dom";
import Filters from "./Filters";
import SearchBar from "./SearchBar"
import "./Navbar.css"


function Header(){
    return(
    <nav className="nav">
        <ul className="ul">        
            <li className="li">
                <Link to='/'>
            <button className="boton">Inicio</button>
            </Link>
            </li>

            <li className="li">
                <Filters/>
            </li>

            <li className="li">
                <Link to="/Form">
            <button className="boton">Create Pokemon</button></Link>
            </li>

            <li className="li"> 
                <SearchBar />
            </li> 
            
            
            
        </ul>
    </nav>
    )
}

export default Header