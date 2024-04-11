import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_GET_API } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from 'react';


export default function useNowPlayingMovie (){
    const dispatch=useDispatch();

    const nowPlayingMovies = useSelector(
        (store) => store.movies.nowPlayingMovies
      );

    const getNowPlayingMovies= async () => {
        const data = await fetch(NOW_PLAYING_GET_API,API_OPTIONS);
        const json =await data.json();
        dispatch(addNowPlayingMovies(json.results))
    };

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
      }, []);
}