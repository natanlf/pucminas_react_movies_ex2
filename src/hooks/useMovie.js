import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";

export const useMovie = (movieId) => {
    const [movie, setMovie] = useState({});
    

    const getMovie = async () => {
        const { data } = await MoviesService.getMovieDetail(movieId);
        setMovie(data);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return movie;
}