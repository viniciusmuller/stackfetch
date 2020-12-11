import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function BackToAppButton() {
  return (
    <Link to="/app" className="back-to-app">
      <Button>Back to the app</Button>
    </Link>
  );
}

export default BackToAppButton;
