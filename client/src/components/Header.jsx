import { Link } from "react-router-dom";
import Filters from "./Filters";


function Header(){
    return(
        <header>
            <Link to='/'>
            <button>Landing page</button>
            </Link>
            <Filters/>
            <Link to="/Form">
            <button>Create Pokemon</button>
            </Link>
        </header>
    )
}

export default Header