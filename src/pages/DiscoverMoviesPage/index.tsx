import React, { useState } from "react";
import { Link } from "react-router-dom";

type SearchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: TMovie[] } // todo: specify the data type too
  | { status: "error"; error: string };

type TApiResult =
  | {
      Response: "True";
      Search: TMovie[];
      totalResults: string;
    }
  | {
      Response: "False";
      Error: string;
    };

type TMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState<SearchState>({
    status: "idle",
  });

  const search = async () => {
    // http://www.omdbapi.com/?s=tt3896198&apikey=a7462395

    const response: TApiResult = await fetch(
      `http://www.omdbapi.com/?s=${searchText}&apikey=a7462395`
    ).then((res) => res.json());

    if (response.Response === "False") {
      return setSearchState({ status: "error", error: response.Error });
    }

    setSearchState({ status: "success", data: response.Search });
  };

  const movies =
    searchState.status === "success"
      ? searchState.data.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                <h1>{movie.Title}</h1>
              </Link>
              <img src={movie.Poster} />
            </div>
          );
        })
      : null;

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {movies}
    </div>
  );
}
