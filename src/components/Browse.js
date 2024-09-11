 
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import usePopularMoies from '../hooks/usePopularMoies';
import useTopratedMovies from '../hooks/useTopratedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Headr from './Headr';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
 

const Browse = () => {
 useNowPlayingMovies();
 usePopularMoies();
 useUpcomingMovies();
 useTopratedMovies();
  return (
    <div>
      <Headr></Headr>
      <Maincontainer></Maincontainer>
      <SecondaryContainer></SecondaryContainer>
      
    </div>
     
  )
}

export default Browse