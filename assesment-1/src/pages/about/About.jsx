import './_About.scss';

const About = () => {
  return (
    <main className="about__main">
      <h1>Acerca de mi</h1>
      <div className="about__container">
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/13375563?s=400&u=b13eeeed9dd235b8423c0e0f0766d5e33e8da9e9&v=4"
            alt="Foto de Erick Franco Del Castillo Deza"
          />
          <figcaption>
            <h2>Erick Franco Del Castillo Deza</h2>
          </figcaption>
        </figure>
        <div className="about__details">
          <p>
            Soy peruano, bachiller en ingeniería de sistemas e informática de la
            Universidad Nacional Amazónica de Madre de Dios. Me considero una
            persona sincera y persistente. Me encanta la tecnología, la
            programación, las ciencias, los libros de ciencia ficción, los
            videojuegos (especialmente los de estrategia), mangas y animes.
          </p>
          <h3>3 cosas que he aprendido en el Bootcamp de Make It Real:</h3>
          <ol className="about__list">
            <li>
              Manejar de manera profesional los repositorios de git y GitHub.
            </li>
            <li>
              Configurar Eslint y Prettier para prevenir errores de programación
              y seguir buenas prácticas.
            </li>
            <li>
              Conceptos base de React JS como su configuración y los hooks de
              useState y useEffect.
            </li>
          </ol>
          <section className="about__links">
            <a href="mailto:mrff88@gmail.com">📧 Mi correo</a>
            <a href="https://github.com/mrff88/">🐙 Mi GitHub</a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
