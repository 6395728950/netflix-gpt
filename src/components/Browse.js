 
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import Headr from './Headr';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
 

const Browse = () => {
 useNowPlayingMovies();
  return (
    <div>
      <Headr></Headr>
      <Maincontainer></Maincontainer>
      <SecondaryContainer></SecondaryContainer>
      
    </div>
     
  )
}

export default Browse