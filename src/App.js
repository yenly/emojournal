import CreateEntry from './components/CreateEntry'
import Entries from './components/Entries'
import styled from '@emotion/styled'

const Main = styled.div`
  max-width: 680px;
  margin: 0 auto;
`

const Header = styled.div`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-text-header);
`

const App = () => {
  return (
    <Main>
      <Header>Emojournal</Header>
      <article>
        <CreateEntry />
        <Entries />
      </article>
    </Main>
  );
}

export default App
