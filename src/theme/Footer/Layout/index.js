import clsx from 'clsx';

import styles from './index.module.css';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        {links}
        <div className={styles.bottom}>
          <div>
            <div className={styles.licence}>
              Content licenced under{' '}
              <a className="footer__link-item" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                Creative Commons Attribution-ShareAlike 4.0 International License
              </a>
              .
            </div>
          </div>
          <div className={styles.copyright}>{copyright}</div>
        </div>
      </div>
    </footer>
  );
}
