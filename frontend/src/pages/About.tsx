import TopAppLogo from "../components/TopAppLogo";
import BackToAppButton from "../components/BackToAppButton";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <TopAppLogo />
      <div id="about">
        <div className="about-content">
          <h1>About StackFetch</h1>

          <h2>App Stack</h2>
          <p>This app was made using TypeScript.</p>
          <h3>Frontend</h3>
          <p>The frontend consumes the backend API and uses mainly:</p>
          <ul>
            <li>React</li>
            <li>Axios</li>
            <li>Formik</li>
            <li>Yup</li>
            <li>Sass</li>
            <li>Material UI</li>
          </ul>

          <h3>Backend</h3>
          <p>The backend is an MVC structured RESTful API using mainly:</p>
          <ul>
            <li>Express</li>
            <li>Yup</li>
            <li>Axios</li>
            <li>TypeORM</li>
          </ul>

          <h2>Purpose</h2>
          <p>
            This application was made for study purposes and do not target being
            an actual platform.
            <br />
            However, it's functional and can be used by other developers.
          </p>

          <h2>Disclaimer</h2>
          <p>
            It's discouraged for users registering any other GitHub accounts
            that not their own.
          </p>
          <p>
            I do not take responsibility for any user misusage on the platform.
          </p>
          <BackToAppButton />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
