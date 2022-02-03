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

function App() {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='flex flex-grow'>
                <Router>
                    <Sidebar/>
                  <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/episodes' element={<Episodes/>}/>
                    <Route path='/shows' element={<Shows/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contactus' element={<ContactUs/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/sendepisodes' element={<SendEpisodes/>}/>
                    <Route path='/episodes/episodeslist' element={<EpisodesList/>}/>
                    <Route path='/episodes/episodeslist/episodedetail' element={<EpisodeDetailScreen/>}/>
                  </Routes>
                </Router>
            </div>
            <div className="fixed bottom-0 left-0 right-0">
            <MusicPlayer/>
            </div>
    </div>
  );
}

export default App;
