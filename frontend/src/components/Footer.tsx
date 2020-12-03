import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ReactComponent as AppLogo } from '../assets/svg/appLogo.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <AppLogo className="footer-app-logo" />
        <p>
          StackFetch App. Search for developers based on their stack.
        </p>
        <p>
          Made by
          <a href="https://github.com/arcticlimer">
            @arcticlimer
          </a>
          , 2020.
        </p>
      </div>
      <div className="footer-section">
        <h2>Share your stack</h2>
        <p>
          Register <Link to="/register">here</Link>!
        </p>
      </div>
      <div className="footer-section">
        <h2>Any doubts?</h2>
        <p>
          Check the about page <Link to="/about">here</Link>!
        </p>
      </div>
      <div className="footer-section">
        <a
          href="https://github.com/arcticlimer/stack-app"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-repo-link"
        >
          <p>
            Open Source project at<br />GitHub&trade;
          </p>
          <FaGithub
            size="2.5rem"
            className="footer-gh-icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
