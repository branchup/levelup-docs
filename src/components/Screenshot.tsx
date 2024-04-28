import styles from './Screenshot.module.css';

type Props = { img: { default: string } | string; children: React.ReactNode };

export default function ({ img, children }: Props) {
  const src = typeof img === 'string' ? img : img.default;
  return (
    <figure className={styles.figure}>
      <img src={src} className={styles.img} />
      <figcaption className={styles.figcaption}>{children}</figcaption>
    </figure>
  );
}
