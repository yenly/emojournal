import React, { useState, useRef } from 'react'
import { categories } from '../utils/emojis'
import styled from '@emotion/styled'

const Picker = styled.div`
  width: 260px;
`

const EmjoisWrapper = styled.div`
  width: 270px;
  height: 300px;
  overflow: scroll;
`

const Ul = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0.25rem 0;
  padding: 0;
`

const Categories = styled(Ul)`
  justify-content: space-between;
  & > li {
    cursor: pointer;
  }
`

const EmojiIcons = styled(Ul)`
  list-style: none;
  & > li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18px;
    width: 18px;
    padding: 4px;
    margin: 0;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: #D8DEE9;
    }
  }
`

const H4 = styled.h4`
  margin: 0.5rem 0 0 0;
  text-transform: uppercase;
`

const SearchBar = styled.div`
  border: 1px solid steelblue;
  padding: 2px;
  margin: 0.4rem 0;
`

const Input = styled.input`
  width: 95%;
  border: 0;
  outline: none;
  color: black;  
  &::placeholder {
    color: lightgrey;
  }
`

// TODO: handle closing without choosing an emoji
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
          {filteredList.length !== 0 && <H4>{category}</H4>}
          <EmojiIcons>
            {filteredList.map(item => {
              return <li key={item.name} aria-label={item.name} title={item.name} onClick={() => handleOnClick(item.name)}>{item.emoji}</li>
            })}
          </EmojiIcons>
        </section>
      )
    })
  }

  const renderCategories = () => {
    return categoryNames.map(cat => {
      return (
          <li key={cat} aria-label={cat} onClick={() => showCategory(cat)}>{categories[cat]}</li>
      )
    })
  }
  
  return (
    <Picker>
      <Categories>{renderCategories()}</Categories>
      <SearchBar>
        <Input id='search' value={searchTerm} onChange={handleOnChange} placeholder='search' />
      </SearchBar>
      <EmjoisWrapper>{renderByCat()}</EmjoisWrapper>
    </Picker>
  )
}

export default Emojis