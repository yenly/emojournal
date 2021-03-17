import React, { useState } from 'react'
import Emojis from './Emojis'
import { useEmojiProviderValues } from '../EmojiProvider'
import Popover from './Popover'
import dayjs from 'dayjs'
import styled from '@emotion/styled'

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
  const [sentence, setSentence] = useState([])
  const [{ emojiCode }, dispatch] = useEmojiProviderValues()
  
  const chooseEmoji = (emojiShortcode) => {
    dispatch({ type: 'ADD_EMOTE', emojiCode: emojiShortcode })
    setSentence([...sentence, emojiShortcode])
  }

  const saveSentence = () => {
    const now = dayjs(new Date())
    dispatch({ type: 'ADD_ENTRY', entry: {
      date: now.valueOf(),
      sentence: sentence
    }})
    setSentence([])
  }

  return (
    <div>
      <div>
        <p>current pick: {emojiCode}</p>
        <p>sentence: {sentence}</p>
      </div>
      <Popover
        content={({ close }) => (
          <>
            <Button onClick={close}>X</Button>
            <Emojis chooseEmoji={chooseEmoji} close={close} />
          </>
        )}
      >
        {({ open }) => <Button onClick={open}>😀</Button>}
      </Popover>
      <Button onClick={saveSentence}>Save</Button>
    </div>
  )
}

export default EmojiPicker