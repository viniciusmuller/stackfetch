import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import userSchema from '@validation/userSchema';
import api from '@services/api';
import FormField from './FormField';
import UserTechnologyField from './UserTechnologyField';

interface RegisterFormProps {
  onSucess: () => void;
}

function RegisterForm(props: RegisterFormProps) {
  return (
    <Formik
      initialValues={{
        name: '',
        age: '',
        about: '',
        gitHubUsername: '',
        stack: [],
      }}
      validationSchema={userSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        api
          .post('/users', values)
          // If no errors occurs, user was registered on the system.
          .then(() => props.onSucess())
          .catch((err) => setErrors(err.response.data.errors))
          .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form className="register-form" autoComplete="off">
          <FormField
            name="name"
            labelMessage="Your name"
            renderInput={TextField}
          />
          <FormField
            name="age"
            type="number"
            labelMessage="Your age"
            renderInput={TextField}
          />
          <FormField
            name="about"
            labelMessage="About you"
            renderInput={TextField}
          />
          <FormField
            name="gitHubUsername"
            labelMessage="Your GitHub username"
            comment="Please do not register any GitHub account that is not yours."
            renderInput={TextField}
          />
          <UserTechnologyField name="stack" labelMessage="Your stack" />
          <div className="submit-button-wrapper">
            <Button
              className="register-form-submit"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
            {isSubmitting && (
              <div className="register-form-loading">
                <CircularProgress size="2rem" />
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
