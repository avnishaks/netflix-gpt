import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

export default function Browse () {

   useNowPlayingMovie();
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
}

