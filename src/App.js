import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='flex flex-col h-screen'>
      {/* main container */}
      <div className='flex flex-grow'>
                {/* sidebar */}
                <Sidebar/>
                {/* <HomeRoute/> */}
                {/* <EpisodesRouter/> */}
                {/* <ShowsRouter/> */}
            </div>
            {/* bottom container -> music player */}
            <MusicPlayer/>
    </div>
  );
}

export default App;
