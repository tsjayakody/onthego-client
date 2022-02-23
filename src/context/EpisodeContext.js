import { createContext, useState } from "react";
import episodes from "../data/Episodes";


const EpisodeContext = createContext()

export const EpisodeProvider = ({ children }) => {

    //! state here
    const [episodeList, setEpisodeList] = useState(episodes);

    return (
        <EpisodeContext.Provider value={{ episodes }} >
            { children }
        </EpisodeContext.Provider>
    );
}

export default EpisodeContext 