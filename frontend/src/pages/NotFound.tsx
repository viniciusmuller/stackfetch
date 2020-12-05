import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function NotFound() {
  return (
    <div id="not-found">
      <h1>That seems the wrong way...</h1>
      <h2>Take this map and go back to our routes!</h2>

      <Link to="/app">
        <Button>
          Back to the routes
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
