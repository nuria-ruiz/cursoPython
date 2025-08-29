import Home from "./components/Home";
import Contador from "./components/Contador"
import TaskList from "./components/TaskList";

const mockTasks = [
  {
    id: "t1",
    title: "Crear proyecto",
    description: "Montar Vite y limpiar plantilla",
    priority: "high",
  },
  {
    id: "t2",
    title: "Diseñar componentes",
    description: "Header, TaskList, TaskCard, Footer",
    priority: "medium",
  },

   {
    id: "t3",
    title: "Limpiar la casa",
    description: "barrer y fregar",
    priority: "low",
  },
];

export default function App() {
  return (
    <div className="app">
      <Home titulo = "Mi proyecto" subtitulo ="Sesión 1">
        <TaskList tasks={mockTasks} />
        <Contador />
      </Home>
    </div>
  );
}
