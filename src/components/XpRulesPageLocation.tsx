import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import navRulesPre312 from '../assets/xp/nav-rules-pre-3.12.png';
import navRules from '../assets/xp/nav-rules.png';

import styles from './XpRulesPageLocation.module.css';

export default function XpRulesPageLocation() {
  return (
    <Tabs>
      <TabItem value="3.12" label="XP 3.12+" default>
        <div className={styles.content}>
          The rules can be found under the tab "Points".
          <img src={navRules} alt="" />
        </div>
      </TabItem>
      <TabItem value="3.11" label="XP 3.11 and older">
        <div className={styles.content}>
          The rules are found under the tab "Rules".
          <img src={navRulesPre312} alt="" />
        </div>
      </TabItem>
    </Tabs>
  );
}
