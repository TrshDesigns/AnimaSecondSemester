
import MakeSound from "./Makesound.jsx"; 

function Tarjeta(props) {
  const inputId = `spawn-${props.entity.replace(/\s+/g, '')}`;

  return (
    <div className="container">
      <h3>{props.entity}</h3>
      <h4>{props.desc}</h4>
      <a className="donationBtn" href="https://www.freefunder.com/">Dona a la causa!</a>
      <input type="checkbox" id={inputId} className="heart-trigger" />
      <label htmlFor={inputId} className="img-wrapper">
        <img className="img itemBrightness" alt={props.alt} src={props.imgUrl} />
        <span className="heart-emoji">❤️</span>
      </label>
      <MakeSound /> 
    </div>
  );
}

export default Tarjeta;
