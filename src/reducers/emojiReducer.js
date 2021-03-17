export const initialState = {
  emojiCode: '',
  entries: []
}

export const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_EMOTE":
      return {...state, emojiCode: action.emojiCode}
    case "ADD_ENTRY":
      return {...state, entries: state.entries.concat(action.entry)}
    default:
      return state
  }
}