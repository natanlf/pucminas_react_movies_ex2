import { useEffect, useState } from "react"
import { MoviesService } from "../api/MoviesService";
import { MovieItem } from "../components/MovieItem";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    const getMovies = async () => {
        const { data: {results}, } = await MoviesService.getMovies();

        setMovies(results);
    };

    useEffect( () => {
        getMovies();
    },[]);

    return (
        <div className="container">
            <div className="row gy-5">
                {movies.map(movie => (
                    <div key={movie.id} className="col-3">
                        <MovieItem movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}