import { createContext, useState } from "react";
import musicList from "../data/MusicList";

const MusicContext = createContext();

export const EpisodeProvider = ({ children }) => {

    //! state here
    const [hostList, setHostList] = useState(musicList);

    return (
        <MusicContext.Provider value={{ musicList }} >
            { children }
        </MusicContext.Provider>
    );
}
