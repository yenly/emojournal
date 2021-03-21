// import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useEmojiProviderValues } from '../EmojiProvider'
import { getEmojis } from '../utils/helpers'
import Popover from './Popover'
import Emojis from './Emojis'


const Button = styled.button`
  background-color: var(--color-button-primary);
  border: 0;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 0 1rem 0 0;
  text-transform: uppercase;
  color: var(--color-text);
  font-weight: bold;
`

const EmojiPicker = () => {
  // const [history, setHistory] = useState({})
  const [{ emojiCode }, dispatch] = useEmojiProviderValues()
  
  const chooseEmoji = (emojiName) => {
    const emoji = getEmoji(emojiName)
    dispatch({ type: 'ADD_EMOTE', emojiCode: emoji })
    // saveHistory(emojiShortcode)
  }

  // const saveHistory = (emoji) => {
  //   let newHistory = history
  //   if(history[emoji]) {
  //     newHistory[emoji] += 1
  //   } else {
  //     newHistory[emoji] = 1
  //   }
  //   setHistory(newHistory)
  // }

  const emojis = getEmojis()

  const getEmoji = (name) => {
    return emojis[name]
  }
  console.log({emojiCode})
  return (
    <div>
      <Popover
        content={({ close }) => (
          <>
            <Button onClick={close}>X</Button>
            <Emojis emojis={emojis} chooseEmoji={chooseEmoji} close={close} />
          </>
        )}
      >
        {({ open }) => <Button onClick={open}>😀</Button>}
      </Popover>
      
    </div>
  )
}

export default EmojiPicker