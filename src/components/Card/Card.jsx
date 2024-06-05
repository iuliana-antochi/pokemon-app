import { useEffect, useState } from "react";
import "./Card.css";
import PropTypes from "prop-types";


function Card({ name }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
      })
        
      .catch((error) => console.error(error));
  }, [name]);

  return (
    <>
      {data && data.sprites && (
        <div className="card">
          <img src={data.sprites.front_default} alt={data.name} />
          <h2>{data.name}</h2>
          <ul>
            {data.types.map(item => (<li key={item.id} className={item.type.name}> {item.type.name}</li>))}
          </ul>
        </div>
      )}
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
