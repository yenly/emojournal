import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initialState, reducer } from './reducers/emojiReducer'
import { EmojiProvider } from './EmojiProvider'
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <EmojiProvider initialstate={initialState} reducer={reducer}>
      <GlobalStyles />
      <App />
    </EmojiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
