import {Link} from "react-router-dom" 
import BotonLogin from "./BotonLogin"

export default function Navbar(){
    return(
        <>
        <BotonLogin/>
        <nav>
        <Link to ="/">Inicio</Link>
        <Link to ="/About">About</Link>
        <Link to ="/contact">Contact</Link>
        </nav>
        </>
    )
}