import { Field, ErrorMessage } from 'formik';

interface FormFieldProps {
  name: string;
  labelMessage: string;
  renderInput: any;
  comment?: string;
  type?: string;
}

function FormField(props: FormFieldProps) {
  const { name, labelMessage, renderInput, type, comment } = props;

  return (
    <>
      <label className="form-label" htmlFor={name}>
        {labelMessage}
      </label>
      <Field
        className="form-input-field"
        type={type}
        as={renderInput}
        name={name}
      />
      <ErrorMessage className="field-error" name={name} component="p" />
      {comment && <p className="field-comment">{comment}</p>}
    </>
  );
}

FormField.defaultProps = {
  comment: undefined,
  type: 'text',
};

export default FormField;
