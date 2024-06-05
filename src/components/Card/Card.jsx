import { useEffect, useState } from "react";
import "./Card.css";
import PropTypes from "prop-types";

// A good folder structure is to think of your components as: 
// 1) shared components that are used throughout the app;
// 2) sub component of a big component. Only used in that big component;
// In this case, Card is used only as subcomponent to Cards;
// So in the Cards folder, you can add a Component folder and add the Card folder there;
// The pill-looking thing you're going to use in the pokemon page as well;
// That will be a shared component;
// You can put it in Component/ shared folder;

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
      // I very much recommend reading this article about useEffect: https://react.dev/learn/you-might-not-need-an-effect
      // not relevant here if you'll use a custom hook, but essential to understand for a good React developer
  }, [name]);

  return (
    // I would suggest against using the && operator here;
    // Because if data or data.sprites is falsy, it will return false;
    // Technically this is not a big deal, but its cleaner for a component to either return jsx or null;
    // data && data.sprintes ? <component> : null
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

// In my opinion, you can turn off the eslint rule that makes you do this;
// In the future you will learn tyepscript, but until then use javascript and don't worry about prop types;
Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
