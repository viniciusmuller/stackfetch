import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import TopAppLogo from '../components/TopAppLogo';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <TopAppLogo />
      <div id="about">
        <div className="about-content">
          {/* TODO improve about page */}
          <h1>About StackFetch</h1>
          <h2>Stack</h2>
          <h3>Frontend</h3>
          <p>This app uses React, Sass, and some Material UI's components on the frontend and consumes the backend API.</p>

          <h3>Backend</h3>
          <p>
            The backend is an RESTful API using the MVC project structuration, express.js for the server and TypeORM on the database.
          </p>

          <h2>Purpose</h2>
          <p>
            This application was made for study purposes and do not target being an actual platform.<br />
            However, it's functional and can be used by other developers.
          </p>

          <h2>Disclaimer</h2>
          <p>
            It's discouraged for users registering any other accounts that not their own.
          </p>
          <p>
            I do not take responsibility for any user misusage on the platform.
          </p>

          <Link to="/app" className="about-link-app">
            <Button>
              Back to the app
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
