import { CssBaseline } from "@mui/material";
import styled from "@emotion/styled";

import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  padding-top: 1rem;
  width: 800px;
`;

/* export async function getServerSideProps() {
  const allPokemon = await (
    await fetch("http://localhost:3000/pokemon.json")
  ).json(); // this is for server-side rendering (SSR) when pokemon.json was located in public
  return {
    props: { pokemon: allPokemon },
  };
} */

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </Container>
    </>
  );
};

export default Home;
