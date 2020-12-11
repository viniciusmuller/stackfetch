import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { Technology } from '@common/types';
import TechnologyInput from './TechnologyInput';

interface OptionsMenuProps {
  onTechsChange: (event: React.ChangeEvent<{}>, value: Technology[]) => void;
}

// TODO add search butuno here too
function OptionsMenu(props: OptionsMenuProps) {
  const { onTechsChange } = props;

  // TODO maybe back to tabIndex here
  return (
    <div id="options-bar" tabIndex={0} role="button">
      <div className="cog">
        <FaCog size="3rem" />
      </div>
      <div className="options-flex">
        <div className="options">
          <h2>Filter users</h2>
          <TechnologyInput onChange={onTechsChange} />
          <div className="reg-button-wrapper">
            <h2>Wanna show your skills to the world?</h2>
            <Link to="/register" className="link-register">
              <Button className="mui-register-button">Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsMenu;
