import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_VIDEO_GET_API } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

export default function useMovieTrailer (movieId) {
    const dispatch=useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))

    }

    useEffect(() => {
        !trailerVideo && getMovieVideo()
    }, [])
}