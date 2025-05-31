import { createContext } from "react";
import { topDoctors } from "../assets/assets";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const value = {
    topDoctors
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider