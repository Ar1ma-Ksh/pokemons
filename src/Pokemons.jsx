import React from "react";

const Pokemons = ({ pokemons }) => {
  return (
    <div className="mainDiv items-center justify-center gap-6">
      {pokemons.map((item) => {
        const id = item.url.split("/")[6];
        return (
          <div key={item.name}>
            <div className="boxes flex items-center justify-around bg-blue-200 w-60 h-30 p-1.5">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={item.name}
              />
              <h1 className="font-bold text-xl">{item.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemons;
