import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import TopAppLogo from "@components/TopAppLogo";
import Footer from "@components/Footer";

function NotFound() {
  return (
    <>
      <TopAppLogo />
      <div id="not-found">
        <h1>That seems the wrong way...</h1>
        <h2>Take this map and go back to our routes!</h2>

        <Link to="/app" className="back-button">
          <Button>Back to the routes</Button>
        </Link>
        <Footer />
      </div>
    </>
  );
}

export default NotFound;
