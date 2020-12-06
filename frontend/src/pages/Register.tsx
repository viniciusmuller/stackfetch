import { useState } from 'react';

import TopAppLogo from '../components/TopAppLogo';
import RegisterForm from '../components/forms/RegisterForm';
import BackToAppButton from '../components/BackToAppButton';
import Footer from '../components/Footer';

function Register() {
  // TODO parse other backend errors
  const [success, setSuccess] = useState(false);

  return (
    <div>
      <TopAppLogo />
      <div id="register">
        <div className="register-content">
          {success ? (
            <>
              <h1>Thanks for registering!</h1>
              <p>
                We hope that you can connect with others developers through this application.
                <br />
                Never stop learning!
              </p>
              <BackToAppButton />
            </>
          ) : (
            <>
              <h1>Register on StackFetch</h1>
              <RegisterForm onSucess={() => setSuccess(true)} />
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Register;
