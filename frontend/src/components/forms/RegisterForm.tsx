import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import userSchema from '@validation/userSchema';
import api from '@services/api';
import FormField from './FormField';
import UserTechnologyField from './UserTechnologyField';

interface RegisterFormProps {
  onSuccess: () => void;
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
      onSubmit={(values, { setSubmitting, setErrors, setStatus }) => {
        api
          .post('/users', values)
          .then(props.onSuccess)
          .catch((err) => {
            switch (err.response.status) {
              case 429:
                setStatus(
                  'You registered too many accounts. Please wait some minutes.',
                );
                break;
              case 422:
                setErrors(err.response.data.errors);
                break;
              default:
                console.error(err);
            }
          })
          .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting, status }) => (
        <Form className="register-form" autoComplete="off">
          <p className="field-error">{status}</p>
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
