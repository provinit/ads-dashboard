
import { createContext, useState, useContext } from "react";

const AdContext = createContext();

const AdProvider = ({children}) => {
    const [isCheckedText, setCheckedText] = useState(false);
    const [isCheckedMedia, setCheckedMedia] = useState(false);
    const handleChangeText = (event) => {
        setCheckedText(event.target.checked);
      };
      const handleChangeMedia = (event) => {
        setCheckedMedia(event.target.checked);
      };
      return(
        <AdContext.Provider value={{isCheckedText, isCheckedMedia,handleChangeText,handleChangeMedia}}>
            {children}
        </AdContext.Provider>
      );
};

const useAdContext = () => {
    const context = useContext(AdContext);
    return context;
}

export {AdProvider, useAdContext};