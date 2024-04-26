/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const LoaderContext = createContext()

export function LoaderProvider({children}) {
  const [onceLoaded, setOnceLoaded] = useState(false)
  return (
    <LoaderContext.Provider value={{onceLoaded, setOnceLoaded}}>{children}</LoaderContext.Provider>
  )
}

export const useLoaderContext = () => useContext(LoaderContext)