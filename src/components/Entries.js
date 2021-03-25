import React, { useContext } from 'react'
import { EmojiContext } from '../EmojiProvider'
import dayjs from 'dayjs';
import styled from '@emotion/styled'

const EntriesWrapper = styled.ul`
  padding: 0;
  margin: 2rem 0;
`

const Sentence = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  margin: 0;
  padding: 0.25rem 0.5rem 0.25rem 0;
  & > span {
    height: 20px;
    width: 20px;
    padding: 0;
    margin: 0 0.25rem;
  }
`
 
const Entries = () => {
  const { state } = useContext(EmojiContext)

  if(!state) {
    return null
  }

  const { entries } = state
  const sortedEntries = entries.sort((a, b) => b.date - a.date)
  return (
    <section>
      {entries.length !== 0 && 
        <EntriesWrapper>
          {sortedEntries.map((entry, index) => {
            return (
              <Sentence key={index}>
                {dayjs(entry.date).format('MMM DD, YYYY hh:mma')}
                {entry.sentence.map((emoji, index) => (
                  <span
                    key={index}
                    aria-label={emoji.name && emoji.name.replaceAll('_', ' ')}
                    title={emoji.name && emoji.name.replaceAll('_', ' ')}>
                    {emoji.emoji}
                  </span>
                ))}
              </Sentence>
            )
          })}
        </EntriesWrapper>
      }
    </section>
  )
}

 export default Entries