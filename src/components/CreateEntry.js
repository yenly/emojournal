import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { useEmojiProviderValues } from '../EmojiProvider'
import EmojiPicker from './EmojiPicker'

const Button = styled.button`
  height: 40px;
  background-color: var(--color-button-primary);
  border: 0;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 0 1rem 0 0;
  text-transform: uppercase;
  color: var(--color-text);
  font-weight: bold;
`

const SentenceWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px dotted white;
`

const Sentence = styled.p`
  width: 100%;
  height: 38px;
  margin: 0;
`

const CreateEntry = () => {
  const [sentence, setSentence] = useState([])
  const [{ emojiCode }, dispatch] = useEmojiProviderValues()

  //TODO: revisit
  useEffect(() => {
    setSentence([...sentence, emojiCode])
  }, [emojiCode])

  const saveSentence = () => {
    const now = dayjs(new Date())
    if (sentence.length !== 0) { // TO DO: Should not save if sentence is blank
      dispatch({ type: 'ADD_ENTRY', entry: {
        date: now.valueOf(),
        sentence: sentence
      }})
      dispatch({ type: 'ADD_EMOTE', emojiCode: '' })
      setSentence([])
    }
  }
  
  const renderSentence = () => {
    return sentence.map((emoji, index) => {
      return <span key={`${emoji.name}-${index}`}
                   title={emoji.name && emoji.name.replaceAll('_', ' ')}>
               {emoji.emoji}
             </span>
    })
  } 

  return (
    <section>
      <p>Capture your thoughts in emoji vision. Choose emojis to express your moment.</p>
      <SentenceWrapper>
        <Sentence>{sentence.length !== 0 && renderSentence()}</Sentence>
        <EmojiPicker />
      </SentenceWrapper>
      <Button onClick={saveSentence}>Save</Button>
    </section>
  )
}

export default CreateEntry