import { useEmojiProviderValues } from '../EmojiProvider'
import dayjs from 'dayjs';
 
const Entries = () => {
  const [{ entries }] = useEmojiProviderValues();
  
  return (
    <section>
      {entries.length !== 0 && 
        <ul>
          {entries.map(entry => {
            return <li key={entry.date}>{dayjs(entry.date).format('MMM DD, YYYY')} - {entry.sentence}</li>
          })}
        </ul>
      }
    </section>
  )
}

 export default Entries