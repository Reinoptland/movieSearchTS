import React from "react";
import { useParams } from "react-router-dom";

export default function MoviesDetailPage() {
  const { imdbID } = useParams();

  return <div>DETAILS!</div>;
}
