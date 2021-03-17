import React, { useContext, useReducer } from 'react'

const EmojiContext = React.createContext()

export const EmojiProvider = ({ initialstate, reducer, children }) => (
  <EmojiContext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </EmojiContext.Provider>
)

export const useEmojiProviderValues = () => useContext(EmojiContext)