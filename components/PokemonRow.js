import Link from "next/link";
import Button from "@mui/material/Button";
import PokemonType from "../src/pokemonType";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>
      <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
    </td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button variant="contained" onClick={() => onSelect(pokemon)}>
        Select
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;
