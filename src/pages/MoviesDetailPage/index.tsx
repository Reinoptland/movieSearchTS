import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MoviesDetailPage() {
  const [details, setDetails] = useState<any>({});
  const { imdbID } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=a7462395`
      ).then((res) => res.json());

      console.log(response);
      setDetails(response);
    }

    getMovieDetails();
  }, [imdbID]);

  return (
    <div>
      <h1>{details.Title}</h1>
      <img src={details.Poster} />
      <p>{details.Plot}</p>
    </div>
  );
}
