import React, { useState, useRef } from 'react'
import { categories } from '../utils/emojis'
import styled from '@emotion/styled'

const EmjoisWrapper = styled.div`
  height: 400px;
  overflow: scroll;
`

const EmojiIcons = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
  margin: 0.25rem 0;
  padding: 0;
`

// const H4 = styled.h4`
//   margin: 1rem 0 0.5rem 0;
//   text-transform: uppercase;
// `


const Emojis = ({ emojis, chooseEmoji, close }) => {
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

  const renderByCat = () => {
    return categoryNames.map(category => {
      let emojiList = Object.values(emojis).filter(emoji => emoji.category === category)
      const filteredList = emojiList.filter(emoji => emoji.name.includes(searchTerm))
      return (
        <section ref={(element) => storeRef(element, category)} key={category}>
          {filteredList.length !== 0 && category}
          <EmojiIcons>
            {filteredList.map(item => {
              return <li key={item.name} title={item.name} onClick={() => handleOnClick(item.name)}>{item.emoji}</li>
            })}
          </EmojiIcons>
        </section>
      )
    })
  }

  const renderCategories = () => {
    return categoryNames.map(cat => {
      return (
          <li key={cat} onClick={() => showCategory(cat)}>{categories[cat]}</li>
      )
    })
  }
  
  return (
    <div>
      <EmojiIcons>{renderCategories()}</EmojiIcons>
      <input id='seach' value={searchTerm} onChange={handleOnChange} placeholder='search' />
      <EmjoisWrapper>{renderByCat()}</EmjoisWrapper>
    </div>
  )
}

export default Emojis