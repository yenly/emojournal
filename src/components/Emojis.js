import React, { useState } from 'react'
import { categories, emojis } from '../utils/emojis'
import { sanitazeEmojiList } from '../utils/helpers'

const Emojis = ({ chooseEmoji, close }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const categoryNames = Object.keys(categories)

  const handleOnClick = (shortcode) => {
    chooseEmoji(shortcode)
    close()
  }

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const renderEmojis = () => {
    return categoryNames.map(category => {
      const emojiList = sanitazeEmojiList(emojis[category])
      const filteredList = emojiList.filter(emoji => emoji.shortcode.includes(searchTerm))
      return (
        <section key={category}>
          {filteredList.length !== 0 && <h4>{category}</h4>}
          {filteredList.map(emoji => <span key={emoji.shortcode} title={emoji.shortcode} onClick={() => handleOnClick(emoji.shortcode)}>{emoji.emoji}</span>)}
        </section>
      )
    })
  }

  return (
    <div>
      <input id='seach' value={searchTerm} onChange={handleOnChange} placeholder='search' />
      <div>{renderEmojis()}</div>
    </div>
  )
}

export default Emojis