import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import FormField from './FormField';
import UserTechnologyField from './UserTechnologyField';
import api from '../../services/api';

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
        stack: []
      }}
      validate={values => {
        // TODO validate on clientside
        let errors = {};
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        api.post('/users', values)
          // If no errors occurs, means our user was registered on the system
          .then(() => props.onSucess())
          .catch(err => setErrors(err.response.data.errors));
          setSubmitting(false)
      }}
    >
    {({ isSubmitting }) => (
      <Form autoComplete="off">
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
        <UserTechnologyField
          name="stack"
          labelMessage="Your stack"
        />
        <Button
          className="register-form-submit"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Form>
    )}
    </Formik>
  );
}

export default RegisterForm;
