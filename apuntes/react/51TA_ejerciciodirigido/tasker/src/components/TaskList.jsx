import TaskCard from "./TaskCard";
export default function TaskList({ tasks }) {
  if (!tasks?.length) {
    //tasks? = True por tanto !tasks? = false
    return (
      <div className="empty" role="status">
        No hay tareas aún.
      </div>
    );
  }
  return (
    <section className="grid" aria-live="polite">
      {tasks.map((t) => (
        <TaskCard
          key={t.id}
          title={t.title}
          description={t.description}
          priority={t.priority}
        />
      ))}
    </section>
  );
}
