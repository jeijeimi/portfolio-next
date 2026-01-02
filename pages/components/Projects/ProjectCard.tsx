import styles from "../../../styles/projectCard.module.scss";
import { Project } from "./types"

interface Props {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <div className={styles.card} onClick={() => onOpen(project)}>
      <div className={styles.imageWrap}>
        <img src={project.image} alt={project.title} />
        <button className={styles.button}>VER PROYECTO</button>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className={styles.tools}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

