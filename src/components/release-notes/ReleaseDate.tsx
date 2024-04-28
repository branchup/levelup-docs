import styles from './ReleaseDate.module.css';

export default function ReleaseDate({ children }: { children: string }) {
  return <p className={styles.date}>{children}</p>;
}
