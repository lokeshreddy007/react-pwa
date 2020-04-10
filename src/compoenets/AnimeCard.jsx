import React from "react";

// const randomNum = () => {
//   return Math.floor(Math.random() * anime.length);
// };

// const getRandomQuote = () => {
//   let randNum = randomNum();
//   return anime[randNum].quote;
// };

const AnimeCard = (props) => {
  console.log(props.animeData.movie);
  return (
    <div className="col-md-5 mb-2 ml-2">
      <div className="card">
        <div className="card-header">{props.animeData.movie}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.animeData.quote}</p>
            <footer className="blockquote-footer">
              {props.animeData.type}{" "}
              <cite title="Source Title">{props.animeData.year}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
