import CreateEntry from './components/CreateEntry'
import Entries from './components/Entries'

const App = () => {
  return (
    <main>
      <header>Emojournal</header>
      <article>
        <CreateEntry />
        <Entries />
      </article>
    </main>
  );
}

export default App;
