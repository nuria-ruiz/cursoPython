import { useNavigate } from "react-router-dom"

export default function BotonLogin(){
    const Navigate = useNavigate();

    return <button onClick = {()=> Navigate("/dashboard")}>Ir a dashboard</button>
}