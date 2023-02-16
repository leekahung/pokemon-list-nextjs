import { CssBaseline } from "@mui/material";
import styled from "@emotion/styled";

import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";

import store from "@/src/store";

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

export async function getServerSideProps() {
  const pokemon = await (
    await fetch("http://localhost:3000/pokemon.json")
  ).json();
  return {
    props: { pokemon },
  };
}

const Home = ({ pokemon }) => {
  store.setPokemon(pokemon);
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
