import { useEmojiProviderValues } from '../EmojiProvider'
import dayjs from 'dayjs';
 
const Entries = () => {
  const [{ entries }] = useEmojiProviderValues();

  return (
    <section>
      {entries.length !== 0 && 
        <ul>
          {entries.map((entry, index) => {
            return (
              <li key={index}>
                {dayjs(entry.date).format('MMM DD, YYYY hh:mm')}
                {entry.sentence.map((emoji, index) => {
                  return <span key={index} title={emoji.name && emoji.name.replaceAll('_', ' ')}>{emoji.emoji}</span>
                })}
              </li>
            )
          })}
        </ul>
      }
    </section>
  )
}

 export default Entries