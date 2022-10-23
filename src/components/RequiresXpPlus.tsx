import Link from '@docusaurus/Link';
import React from 'react';
import styles from './RequiresXpPlus.module.css';

export default function () {
  return (
    <p className={styles.content}>
      <div className={styles.pill}>
        This features requires <Link to="/xp/docs/#xp-plus">Level Up XP+</Link>
      </div>
    </p>
  );
}
