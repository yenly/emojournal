
 import unicode from 'emoji-unicode-map'
 import { categories, emojis } from './emojis'
/*
only use emojis with unicode name
emojis <Array>
*/
export const getEmojis = () => {
  let emojiStore = {}
  Object.keys(categories).forEach(category => {
    let eList = emojis[category]
    eList.forEach(item => {
      let name = unicode.get(item)
      if (name) {
        const eObj = {
          name,
          emoji: item,
          category
        }
        emojiStore[name] = eObj
      }
    })
  })
  return emojiStore
}