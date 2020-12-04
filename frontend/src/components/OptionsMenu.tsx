import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import TechnologyInput from './TechnologyInput';
import { Technology } from '../common/types';

interface OptionsMenuProps {
  onTechsChange: (event: React.ChangeEvent<{}>, value: Technology[]) => void;
}

function OptionsMenu(props: OptionsMenuProps) {
  return (
    <div
      id="options-bar"
      tabIndex={0}
    >
      <div className="cog">
        <FaCog size="3rem" />
      </div>
      <div className="options-flex">
        <div className="options">
          <h2>Filter users</h2>
          <TechnologyInput onChange={props.onTechsChange} />
          <div className="reg-button-wrapper">
            <h2>Wanna show your skills to the world?</h2>
            <Link
              to="/register"
              className="link-register"
            >
              <Button className="mui-register-button">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsMenu;
