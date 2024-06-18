import "./Images.css";
import placeholderImage from "../../../../assets/Pokemon.svg";

function Images({ data }) {
  return (
    <div className="pokemon-images">
      <img
        src={data.sprites.front_default || placeholderImage}
        alt={`${data.name} front default`}
        width="96px"
        height="96px"
        loading="lazy"
      />

      <img
        src={data.sprites.back_default || placeholderImage}
        alt={`${data.name} back default`}
        width="96px"
        height="96px"
        loading="lazy"
      />

      <img
        src={data.sprites.front_shiny || placeholderImage}
        alt={`${data.name} front shiny`}
        width="96px"
        height="96px"
        loading="lazy"
      />

      <img
        src={data.sprites.back_shiny || placeholderImage}
        alt={`${data.name} back shiny`}
        width="96px"
        height="96px"
        loading="lazy"
      />
    </div>
  );
}

export default Images;
