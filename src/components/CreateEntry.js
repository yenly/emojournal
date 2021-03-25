import React, { useState, useEffect, useContext } from 'react'
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { EmojiContext } from '../EmojiProvider'
import EmojiPicker from './EmojiPicker'

const Button = styled.button`
  height: 40px;
  background-color: var(--color-button-primary);
  border: 0;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 0.7rem 1rem 0 0;
  text-transform: uppercase;
  color: var(--color-text);
  font-weight: bold;
  text-shadow: 1px 0 3px #4C566A;
`

const SentenceWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px dotted white;
`

const Sentence = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  margin: 0;
  padding: 0.25rem 0.5rem;
  & > span {
    height: 20px;
    width: 20px;
    padding: 0;
    margin: 0 0.25rem 0 0;
  }
`

const CreateEntry = () => {
  const [sentence, setSentence] = useState([])
  const { state, dispatch} = useContext(EmojiContext)

  useEffect(() => {
    if(state.emojiCode) {
      setSentence([...sentence, state.emojiCode])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.emojiCode])

  const saveSentence = () => {
    const now = dayjs(new Date())
    if (sentence.length >= 1) { // TO DO: Should not save if sentence is blank, 1 should not be correct
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