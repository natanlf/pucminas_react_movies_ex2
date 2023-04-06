import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";

export const MovieDetail = () => {
    
    const { movieId } = useParams();
    const movie = useMovie(movieId);

    return (
        <section className="movie-detail">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-6">
                        {movie.poster_path && 
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" />}
                    </div>
                    <div className="col-6">
                        <h1>{movie.title}</h1>
                        <ul>
                            <li>Budget: {movie.budget}</li>
                            <li>Original language: {movie.original_language}</li>
                            <li>Popularity: {movie.popularity}</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {movie.overview}
                    </div>            
                </div>
            </div>
        </section>
    );
}