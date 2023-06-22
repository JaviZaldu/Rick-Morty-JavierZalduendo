import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
  const {characters, onClose} = props;

  return (
    <div className={styles.Cards}>
      {characters?.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}

