import Link from '@docusaurus/Link';
import styles from './RequiresXpPlus.module.css';

export default function ({ someOnly = false, plan = '' }: { someOnly: boolean; plan?: string }) {
  return (
    <p className={styles.content}>
      <div className={styles.pill}>
        {!someOnly ? (
          <>
            This features requires <Link to="/xp/docs/#xp-plus">Level Up XP+ {plan}</Link>
          </>
        ) : (
          <>
            Some features require <Link to="/xp/docs/#xp-plus">Level Up XP+ {plan}</Link>
          </>
        )}
      </div>
    </p>
  );
}
