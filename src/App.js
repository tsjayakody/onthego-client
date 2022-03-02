import Home from "./components/Home";
import Episodes from "./components/Episodes";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shows from "./components/Shows";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Register from "./components/Register";
import SendEpisodes from "./components/SendEpisodes";
import EpisodesList from "./components/EpisodesList";
import EpisodeDetailScreen from "./components/EpisodeDetailScreen";
import ShowsDetail from "./components/ShowsDetail";
import HostDetailPage from "./components/HostDetailPage";
import ErrorPage from "./components/ErrorPage";
import MeetTheHosts from "./components/MeetTheHosts";
import PopularEpisodes from "./components/episodes/PopularEpisodes";
import LatestEpisodeExpandedGrid from "./components/home/LatestEpisodeExpandedGrid";
import FeaturedEpisodesExpanded from "./components/home/FeaturedEpisodesExpanded";
import ShowsExpanedGrid from "./components/shows/ShowsExpanedGrid";
import { EpisodeProvider } from './context/EpisodeContext';
import { HostProvider } from './context/HostsContext';

function App() {

  return (
    <EpisodeProvider>
      <HostProvider>
        <div className='flex flex-col h-screen w-screen'>
          <div className='flex flex-grow'>
            <Router>
              <Sidebar className="z-10" />
              <Routes>
                <Route exact path='/' element={<Home />} />.
                <Route path='/episodes' element={<Episodes />} />
                <Route path='/shows' element={<Shows />} />
                <Route path='/about' element={<About />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/register' element={<Register />} />
                <Route path='/sendepisodes' element={<SendEpisodes />} />
                <Route path='/episodes/episodeslist' element={<EpisodesList />} />
                <Route path='/episodes/episodeslist/episodedetail' element={<EpisodeDetailScreen />} />
                <Route path='/shows/showsdetails' element={<ShowsDetail />} />
                <Route path='/hostdetail' element={<HostDetailPage />} />
                <Route path='/404' element={<ErrorPage />} />
                <Route path='/meetthehosts' element={<MeetTheHosts />} />
                <Route path='/popularepisodes' element={<PopularEpisodes />} />
                <Route path='/latestepisodes' element={<LatestEpisodeExpandedGrid />} />
                <Route path='/featuredepisodes' element={<FeaturedEpisodesExpanded />} />
                <Route path='/recentlyupdated' element={<PopularEpisodes />} />
                <Route path='/shows/showslist' element={<ShowsExpanedGrid />} />
              </Routes>
            </Router>
          </div>
          <div className="fixed bottom-0 left-0 right-0">
            <MusicPlayer />
          </div>
        </div>
      </HostProvider>
    </EpisodeProvider>
  );
}

export default App;
