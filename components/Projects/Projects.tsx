import { useState } from 'react';
import ProjectCard from "./ProjectCard"
import { projects } from "./ProjectData"
import { Project } from "./types"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    // Aquí podrías abrir un modal o navegar a una página de detalles
    console.log('Proyecto seleccionado:', project);
  };

  return (
    <section>
      {projects.map(project => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onOpen={handleOpen} 
        />
      ))}
    </section>
  );
}
