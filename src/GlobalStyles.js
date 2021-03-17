import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html {
          --color-background-dark: #2E3440;
          --color-background-white: #FFFFFF;
          --color-button-primary: #5E81AC;
          --color-text-header: #E5E9F0;
          --color-text: #ECEFF4;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: 18px;
          line-height: 1.25;
        }

        body {
          font-size: 1rem;
          background-color: var(--color-background-dark);
          color: var(--color-text);
        }
      `}
    />
  );
};

export default GlobalStyles