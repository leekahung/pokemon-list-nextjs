import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const Container = styled.div`
  margin: auto;
  padding-top: 1rem;
  width: 800px;
`;

export async function getServerSideProps(context) {
  const allPokemon = await (
    await fetch("http://localhost:3000/pokemon.json")
  ).json();
  const pokemon = allPokemon.find(
    ({ id }) => id.toString() === context.query.id
  );
  return {
    props: { pokemon },
  };
}

const Pokemon = ({ pokemon }) => {
  return (
    <Container>
      {pokemon && (
        <div>
          <h1>{pokemon.name.english}</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(pokemon.base).map((key) => {
                return (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{pokemon.base[key]}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default Pokemon;
