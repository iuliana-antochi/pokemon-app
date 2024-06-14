import "./Cards.css";
import Card from "./component/Card/Card";

function Cards({ data }) {
  return (
    <div className="cards-wrapper">
      {data.results.map((item) => (
        <Card key={item.name} name={item.name} />
      ))}
    </div>
  );
}

export default Cards;
