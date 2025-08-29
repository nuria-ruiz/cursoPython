export default function TaskCard({ title, description, priority }) {
  return (
    <article className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 8,
        }}
      >
        <h3 style={{ margin: "0 0 6px" }}>{title}</h3>
        <span className={`badge_${priority}`}>{priority}</span>
      </div>
      {description && (
        <p style={{ margin: 0, color: "#475569" }}>{description}</p>
      )}
    </article>
  );
}
