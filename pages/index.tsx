import Head from "next/head";
import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import About from '../components/About'
// import Tools from './components/Tools'
import Carousel from '../components/Carousel'
// import Reviews from './components/Reviews'
// import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Portfolio profesional" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen">
        <Hero />
        
        <section id="proyectos" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              Mis Proyectos
            </h2>
            <Projects />
          </div>
        </section>
        
        <About />
        
        <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
          <div className="container mx-auto px-4">
            <Carousel />
          </div>
        </section>
        
        {/* Secciones comentadas
        <Tools />
        <Reviews />
        <Contact />
        */}
      </main>
    </>
  );
}