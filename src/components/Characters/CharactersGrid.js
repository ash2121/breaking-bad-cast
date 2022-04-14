import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
const CharactersGrid = ({ isLoading , items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}>
          {item.name}
        </CharacterItem>
      ))}
    </section>
  );
};

export default CharactersGrid;
