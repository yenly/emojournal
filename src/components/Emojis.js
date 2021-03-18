import React, { useState, useRef } from 'react'
import { categories, emojis } from '../utils/emojis'
import { sanitazeEmojiList } from '../utils/helpers'
import styled from '@emotion/styled'

const EmjoisWrapper = styled.div`
  height: 400px;
  overflow: scroll;
`

const H4 = styled.h4`
  margin: 1rem 0 0.5rem 0;
  text-transform: uppercase;
`


const Emojis = ({ chooseEmoji, close }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const categoryNames = Object.keys(categories)
  const catReferences = useRef({})

  const handleOnClick = (shortcode) => {
    chooseEmoji(shortcode)
    close()
  }

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const showCategory = (category) => {
    const targetElement = catReferences.current[category]
    targetElement.scrollIntoView()
  }

  const storeRef = (elem, cat) => {
    catReferences.current[cat] = elem
  }

  const renderEmojis = () => {
    return categoryNames.map(category => {
       /* TODO move sanitazeEmojiList to parent component for reuse */
      const emojiList = sanitazeEmojiList(emojis[category])
      const filteredList = emojiList.filter(emoji => emoji.shortcode.includes(searchTerm))
      return (
        <section ref={(element) => storeRef(element, category)} key={category}>
          {filteredList.length !== 0 && <H4>{category}</H4>}
          {/* TODO change to use ul */}
          {filteredList.map(emoji => <span key={emoji.shortcode} title={emoji.shortcode} onClick={() => handleOnClick(emoji.shortcode)}>{emoji.emoji}</span>)}
        </section>
      )
    })
  }

  const renderCategories = () => {
    return categoryNames.map(cat => {
      return (
          <span onClick={() => showCategory(cat)} key={cat}>{categories[cat]}</span>
      )
    })
  }

  return (
    <div>
      {renderCategories()}
      <input id='seach' value={searchTerm} onChange={handleOnChange} placeholder='search' />
      <EmjoisWrapper>{renderEmojis()}</EmjoisWrapper>
    </div>
  )
}

export default Emojis