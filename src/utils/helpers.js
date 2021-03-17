
 import unicode from 'emoji-unicode-map'
/*
only use emojis with unicode
emojis <Array>
*/
export const sanitazeEmojiList = (emojis) => {
  let unicodedEmojis = []
  emojis.forEach(emoji => {
    const eUnicode = unicode.get(emoji)
    if(eUnicode) {
      unicodedEmojis.push({
        emoji,
        shortcode: `:${eUnicode}:`
      })
    }
  })
  return unicodedEmojis
}