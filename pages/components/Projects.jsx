import Card from './Cards'

export default function Projects() {
  return (
    <section className="projects container">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        <Card title="Portfolio Web" desc="Diseño y desarrollo" />
        <Card title="Motion Reel" desc="Animación 2D" />
        <Card title="Game UI" desc="Interfaz para videojuego" />
      </div>
    </section>
  )
}
