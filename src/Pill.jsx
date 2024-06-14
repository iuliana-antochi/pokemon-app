import "./Pill.css";

function Pill({ types, className }) {
  return (
    <ul className={className}>
      {types ?
        types.map((item) => (
          <li key={item.slot} className={item.type.name}>
            {item.type.name}
          </li>
        )) : null}
    </ul>
  );
}

export default Pill;
