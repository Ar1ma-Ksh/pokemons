import React, { useEffect, useState } from "react";
import Pokemons from "./Pokemons";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <div>
      <Pokemons pokemons={pokemons} />
    </div>
  );
};

export default App;
