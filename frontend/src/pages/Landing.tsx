import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { ReactComponent as UndrawLandingSvg } from '../assets/svg/undrawLanding.svg';

function Landing() {
  return (
    <div id="landing">
      <div className="undraw-landing">
        <UndrawLandingSvg />
      </div>

      <div className="landing-text">
        <h1>StackFetch</h1>
        <h2>Find developers around the world based on their stack.</h2>

        <Link to="/app">
          <Button className="get-started-button">
            Get started!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
