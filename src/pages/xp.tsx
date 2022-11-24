import { Redirect } from '@docusaurus/router';
import React from 'react';

export default function (): JSX.Element {
  return <Redirect to="/xp/docs" push={false} />;
}
