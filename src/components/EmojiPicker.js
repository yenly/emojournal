import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { EmojiContext } from '../EmojiProvider'
import { getEmojis } from '../utils/helpers'
import Emojis from './Emojis'
import Popover from './Popover'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -15px, 0);
  }

  70% {
    transform: translate3d(0, -8px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const Icon = styled.a`
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0.5rem;
  cursor: pointer;
  animation: ${bounce} 1s ease 1;
`

const EmojiPicker = () => {
  // const [history, setHistory] = useState({})
  const { dispatch } = useContext(EmojiContext)
  
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

  return (
    <div>
      <Popover
        content={({ close }) => (
          <>
            <Emojis emojis={emojis} chooseEmoji={chooseEmoji} close={close} />
          </>
        )}
      >
        {({ open }) => <Icon onClick={open} title='Open Emoji Picker'>😀</Icon>}
      </Popover>
    </div>
  )
}

export default EmojiPicker