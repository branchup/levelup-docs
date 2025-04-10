import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import Admonition from '@theme/Admonition';
import styles from './CurrentVersionHighlight.module.css';

interface VersionInfo {
  xp: string | null;
  xpp: string | null;
}

const cleanVersion = (version: string | null): string | null => {
  if (!version) return null;
  const matches = version.match(/^(\d+(\.\d+)*)/) || [];
  return matches[1] || null;
};

export function CurrentVersionHighlight(): JSX.Element | null {
  const location = useLocation();
  const [versionInfo, setVersionInfo] = useState<VersionInfo>({
    xp: null,
    xpp: null,
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const xpVersion = cleanVersion(searchParams.get('xp'));
    const xppVersion = cleanVersion(searchParams.get('xpp'));

    // If neither version is present, don't show anything
    if (!xpVersion && !xppVersion) {
      setVersionInfo({
        xp: null,
        xpp: null,
      });
      return;
    }

    // Update state with all information
    setVersionInfo({
      xp: xpVersion,
      xpp: xppVersion,
    });
  }, [location.search]);

  if (!versionInfo.xp && !versionInfo.xpp) {
    return null;
  }

  // Format the version display text
  let versionText = null;
  if (versionInfo.xp && versionInfo.xpp) {
    versionText = (
      <>
        XP {versionInfo.xp}
        <span> and </span>XP+ {versionInfo.xpp}
      </>
    );
  } else if (versionInfo.xp) {
    versionText = <>XP {versionInfo.xp}</>;
  }

  return (
    <>
      <Admonition type="tip" title="Your are using:">
        <p className={styles.version}>{versionText}</p>
      </Admonition>
      <hr />
    </>
  );
}
