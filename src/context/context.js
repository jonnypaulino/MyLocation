import { createContext } from "react";
import { StateAplication } from "./state";

export const AplicationContext = createContext({})

const AplicationProvider = ({children}) => {

    const {ative, setAtive, time, setTime, location, locationoff} = StateAplication()
    return(
        <AplicationContext.Provider value={{ative, setAtive, time, setTime, location, locationoff}}>
            {children}
        </AplicationContext.Provider>
    )
}

export default AplicationProvider