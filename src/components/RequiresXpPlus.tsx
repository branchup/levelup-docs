import Link from '@docusaurus/Link';
import styles from './RequiresXpPlus.module.css';

export default function ({ someOnly = false, plan = '' }: { someOnly?: boolean; plan?: string }) {
  const name = `Level Up XP+${plan ? ` ${plan}` : ''}`;

  return (
    <p className={styles.content}>
      <span className={styles.pill}>
        {someOnly ? 'Some features require ' : 'This feature requires '}
        <Link to="/xp/docs#xp-plus">{name}</Link>.
      </span>
    </p>
  );
}
