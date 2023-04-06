import { MovieItem } from "../components/MovieItem";
import { useMovies } from "../hooks/useMovies";

export const Movies = () => {
    const movies = useMovies();    

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