import React, { Component } from "react";

import AnimeCard from "./AnimeCard";

import AnimeData from "../data/data";

class AnimeList extends Component {
  state = {
    animeDatas: AnimeData,
  };

  render() {
    const animeList = this.state.animeDatas.map((animeData) => (
      <AnimeCard animeData={animeData} key={animeData.quote} />
    ));
    return <div className="row"> {animeList}</div>;
  }
}

export default AnimeList;
