export default function ProjectCard({ title, desc }) {
  return (
    <div className="project-card container">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
