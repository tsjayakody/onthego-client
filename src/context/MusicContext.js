import { createContext, useState } from "react";
import musicList from "../data/MusicList";

const MusicContext = createContext();

export const EpisodeProvider = ({ children }) => {

    //! state here
    const [hostList, setHostList] = useState(musicList);
    const [play, setPlay] = useState(false);
    const [pause, setPause] = useState(true);
    const [forward, setForward] = useState(false);
    const [backward, setBackward] = useState(false);

    //! music play function 
    const addPlay = () => {

    }

    //! music pause button
    const addPause = () => {

    }

    //! music forward button
    const addForward = () => {

    }

    //! music backward button
    const addBackward = () => {
        
    } 

    return (
        <MusicContext.Provider value={{ musicList }} >
            { children }
        </MusicContext.Provider>
    );
}
