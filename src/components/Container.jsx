import { useState } from "react";
import {Card} from "./Card"
import { fetchData } from "../fetchData.mjs";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=3b825def59e6fa84bf72d5da4823b5d0&language=es-ES&page=1`;

const resource = fetchData(apiUrl)

export function Container(){
    const data = resource.read();
    //console.log(data)
    const movies = data.results;

    return(
        <div className="">
            <h1 className="">Peliculas Populares</h1>
            <div className="">
                {movies.map(movie => (
                    <Card key={movie.id} movie={movie}></Card>
                ))}
            </div>
        </div>
    )
}