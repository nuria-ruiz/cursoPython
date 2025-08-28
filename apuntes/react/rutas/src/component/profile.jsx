import { useParams } from "react-router-dom";
export default function Profile() {
  const { username } = useParams();
  return <h2>Perfil de {username}</h2>;
}
