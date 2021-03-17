# Emojournal

An app to capture your thoughts in emojis only.

Time spent: 8 pomodoros (~4 hours)

I choose to manage the state using React context and useReducer hook because I wanted to use base React library functionalities before reaching for Redux to keep the overall bundling size smaller. I structured the state to be minimal and structured it to use context from the start to prevent prop drilling. The initial intention was to keep the emoji picker reducer closer to the component for better portability. As I added the ability to save a series of emojis as an entry to a list of entries in the central state store, I am mixing different data types and actions in one reducer and component. Because this is a proof of concept and time constraints, I did not separate creating an entry function from the emoji picker component. To make the emoji picker a reusable component, I need to refactor it.

In my research, I found emojibase-data package to have extensive data with skin tone variations in the data structure, but it lacks Unicode information. To parse the data to fit my needs, I would need more time than scoped for this POC. I recommend refactoring to use emojibase-data for the next phase of development. For this exercise, I chose to use Charley's helper file, emoji.js, and emoji-unicode-map package because the time it took to sanitize for emojis without Unicode is quick. The challenge to convert shortcodes back to emoji images for display requires more work. This strategy is suitable for building a proof of concept but not suited for production. I chose Tippy.js to implement the popover because it's well documented, currently maintained, highly customizable, and comes with a React wrapper. I decided to use Emotion as my CSS-inJS to encapsulate the component styling, and the code is almost the same as writing native CSS.

### Want To Do
- [ ] Display emoji instead of shortcode after selection and in entries
- [ ] Limit sentence to 8 emojis
- [ ] Finalize design and change styling
- [ ] Setup reducer to save entries to db
- [ ] Refactor to use emojibase-data
- [ ] Add frequently used category to emoji picker

