import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">Welcome to the documentation site for Level Up.</p>
        <div
          style={{
            maxWidth: '54rem',
            margin: '4rem auto 0',
          }}
        >
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>XP</h2>
              <div className={styles.cardExpander}>
                <p>The documentation for Level Up XP and XP+.</p>
              </div>
              <Link className="button button--secondary button--lg" to="/xp/docs">
                Browse
              </Link>
            </div>
            <div className={styles.card}>
              <h2>Quest</h2>
              <div className={styles.cardExpander}>
                <p>The documentation for Level Up Quest.</p>
              </div>
              <Link className="button button--secondary button--lg" to="/quest/docs">
                Browse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} wrapperClassName={styles.layout}>
      <HomepageHeader />
    </Layout>
  );
}
