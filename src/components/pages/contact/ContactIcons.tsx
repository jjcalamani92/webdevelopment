import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faPhone, faMap } from '@fortawesome/free-solid-svg-icons';

export const ContactIcons = () => {
  return (
    <div className="icons-container">
      <div className="icons">
        <FontAwesomeIcon className="icon" icon={faClock}/>
        <h3>horario de atención :</h3>
        <p>08:00 am a 13:00 pm</p>
      </div>

      <div className="icons">
        <FontAwesomeIcon className="icon" icon={faPhone}/>
        <h3>teléfono :</h3>
        <p>+591 69869305</p>
      </div>

      <div className="icons">
      <FontAwesomeIcon className="icon" icon={faEnvelope}/>
        <h3> email : </h3>
        <p>info@jjwebdevelopment.com</p>
        <p>jjwebdevelopment@gmail.com</p>
      </div>

      <div className="icons">
      <FontAwesomeIcon className="icon" icon={faMap}/>
        <h3>dirección :</h3>
        <p>La Paz, BOLIVIA</p>
      </div>
    </div>
  );
};
