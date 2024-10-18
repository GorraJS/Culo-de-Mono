import { useState } from "react";
import "./Preguntas.css";
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Componente de Font Awesome
import { faRocket } from '@fortawesome/free-solid-svg-icons'; // Ícono de cohete
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // corazon
import { faFilm } from '@fortawesome/free-solid-svg-icons'; // peli

function Preguntas() {
  return (
    <div className="grid-container">
      <div>
        <center>
          <h1>¿Sueles ver Romance o Acción?</h1>
          <p>
            Otras preg: ¿Quieres que te recomendemos similares a tus gustos o un
            género nuevo?
          </p>
          <div className="grid-container">
            <div>
              <center>
                <button className="my-button">
                  <FontAwesomeIcon icon={faRocket} className="icon" />
                  Accion
                </button>
              </center>
            </div>
            <div>
              <center>
                <button className="my-button">
                  <FontAwesomeIcon icon={faHeart} className="icon" />
                  Romance
                </button>
              </center>
            </div>
          </div>
        </center>
        <center>
          <button className="my-button">
            <FontAwesomeIcon icon={faFilm} className="icon" />
            Ver ahora
          </button>
        </center>
      </div>
      <center>
        <div className="movie-card">
          <img className="movie-image" src="pelicula.jpg" alt="Película" />
          <div className="movie-content">
            <div className="movie-title">Título De La Peli En La Imagen</div>
            <div className="movie-author">nombre del Autor</div>
          </div>
          <Footer /> {Footer}
        </div>
      </center>
    </div>
  );
}

export default Preguntas;