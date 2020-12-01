import { Link } from 'react-router-dom';

import { ReactComponent as UndrawLandingSvg } from '../assets/svg/undrawLanding.svg';

function Landing() {
  return (
    <>
      <UndrawLandingSvg width="50vw" />
      <Link to="/app">
        <h1>Go to app</h1>
      </Link>
    </>
  );
}

export default Landing;
