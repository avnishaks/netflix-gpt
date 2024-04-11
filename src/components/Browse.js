import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

export default function Browse () {

   useNowPlayingMovie();
   usePopularMovies();
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
}

