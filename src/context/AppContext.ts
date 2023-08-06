import { createContext, useContext } from "react";
import { ContextProps } from "../interfaces/ContextInterfaces";

export const AppContext = createContext<ContextProps>({} as ContextProps);

export const useAppContext = () => {
  return useContext(AppContext);
};
