import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    
    const getMovies = async () => {
        const { data: {results}, } = await MoviesService.getMovies();

        setMovies(results);
    };

    useEffect( () => {
        getMovies();
    },[]);

    return movies;
}