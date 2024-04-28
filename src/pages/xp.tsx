import { Redirect } from '@docusaurus/router';

export default function (): JSX.Element {
  return <Redirect to="/xp/docs" push={false} />;
}
