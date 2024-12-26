import React from "react";
import "./reviews.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faKey, faComment, faTag, faMap, faCircleCheck, faSprayCanSparkles, faStarHalf} from "@fortawesome/free-solid-svg-icons";

const icons = [
    {faStar, label :" Star"},
    {faSprayCanSparkles, label :" Sparkles"},
    {faStarHalf, label :" Half Star"},
    {faKey, label :" Key"},
    {faComment, label :" Comment"},
    {faTag, label :" Tag"},
    {faMap, label :" Map"},
    {faCircleCheck, label :" Check"},
]
const img ="/assets/experience/review.png";
function Reviews() {
    return (
      <div className="reviews-container">
        <h3>VALORACIONES</h3>
        <div className="columnone">
          <img src={img} alt="reviewImage" className="review-img" />
          <h4>Reseñas de +7 años de experiencia</h4>
          <p>Puntuación general</p>
          <div className="starsfirst">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
          </div>
        </div>
        <div className="columntwo">
          <p>Recomendaciones de los húespedes: </p>
          <ul>
            <p>
              <FontAwesomeIcon icon={faSprayCanSparkles} className="fa-icon" />
              Limpieza
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleCheck} className="fa-icon" />
              Veracidad
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
            </p>
            <p>
              <FontAwesomeIcon icon={faKey} className="fa-icon" />
              Llegada
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </p>
            <p>
              <FontAwesomeIcon icon={faComment} className="fa-icon" />
              Comunicación
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </p>
            <p>
              <FontAwesomeIcon icon={faMap} className="fa-icon" />
              Ubicación
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
            </p>
            <p>
              <FontAwesomeIcon icon={faTag} className="fa-icon" />
              Calidad
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
            </p>
          </ul>
        </div>
      </div>
    );
  }
export default Reviews;