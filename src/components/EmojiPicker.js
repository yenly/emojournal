import React, { useState } from 'react'
import Emojis from './Emojis'
import { useEmojiProviderValues } from '../EmojiProvider'
import Popover from './Popover'
import dayjs from 'dayjs'

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
            <button onClick={close}>X</button>
            <Emojis chooseEmoji={chooseEmoji} close={close} />
          </>
        )}
      >
        {({ open }) => <button onClick={open}>😀</button>}
      </Popover>
      <button onClick={saveSentence}>Save</button>
    </div>
  )
}

export default EmojiPicker