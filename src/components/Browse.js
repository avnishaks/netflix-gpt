import { useSelector } from 'react-redux';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';

export default function Browse () {
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

   useNowPlayingMovie();
   usePopularMovies();
    return (
        <div>
            <Header/>
            {
                showGptSearch ? <GptSearch/> : <><MainContainer/><SecondaryContainer/></>
            }
        </div>
    );
}

