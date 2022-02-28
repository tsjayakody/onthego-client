import { createContext, useState } from "react";
import hosts from '../data/Hosts';

const HostsContext = createContext();

export const HostProvider = ({ children }) => {

    //! state here
    const [hostList, setHostList] = useState(hosts);

    return (
        <HostsContext.Provider value={{ hosts }} >
            { children }
        </HostsContext.Provider>
    );
}

export default HostsContext;