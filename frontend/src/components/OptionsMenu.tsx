import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

function OptionsMenu() {
  return (
    <div id="options-bar"
      tabIndex={0}
    >
      <div className="cog">
        <FaCog size="3rem" />
      </div>
      <div className="options-flex">
        <div className="options">
          <h2>Filter users</h2>
          <Autocomplete
            multiple
            autoHighlight
            limitTags={4}
            id="tags-standard"
            options={['React', 'Python', 'COBOL']}
            noOptionsText="No technologies found."
            renderInput={params => (
              <TextField
                {...params}
                variant="standard"
                label="Technologies"
              />
            )}
          />
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
