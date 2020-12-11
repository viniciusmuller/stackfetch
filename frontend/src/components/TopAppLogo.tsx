import { Link } from "react-router-dom";

import { ReactComponent as AppLogo } from "@assets/svg/appLogo.svg";

function TopAppLogo() {
  return (
    <div id="logo-wrapper">
      <Link to="/app">
        <AppLogo className="main-app-logo" />
      </Link>
    </div>
  );
}

export default TopAppLogo;
