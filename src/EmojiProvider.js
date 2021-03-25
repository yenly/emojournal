import React, { useReducer, useMemo } from 'react'

export const EmojiContext = React.createContext()

// export const EmojiProvider = ({ initialstate, reducer, children }) => (
//   <EmojiContext.Provider value={useReducer(reducer, initialstate)}>
//     {children}
//   </EmojiContext.Provider>
// )

export const EmojiProvider = ({ initialstate, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate)
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])
  return <EmojiContext.Provider value={contextValue}>
    {children}
  </EmojiContext.Provider>
}

// export const useEmojiProviderValues = () => useContext(EmojiContext)