import  {useParams} from "react-router-dom"

export default function Usuario(){
    const {id} = useParams();
    return <h2>Perfil del :{id}</h2>
    //como solo es un elemento no hace falta parentesis
}