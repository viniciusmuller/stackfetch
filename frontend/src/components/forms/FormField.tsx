import { Field, ErrorMessage } from "formik";

interface FormFieldProps {
  name: string;
  labelMessage: string;
  renderInput: any;
  comment?: string;
  type?: string;
}

function FormField(props: FormFieldProps) {
  return (
    <>
      <label className="form-label">{props.labelMessage}</label>
      <Field
        className="form-input-field"
        type={props.type || "text"}
        as={props.renderInput}
        name={props.name}
      />
      <ErrorMessage className="field-error" name={props.name} component="p" />
      {props.comment && <p className="field-comment">{props.comment}</p>}
    </>
  );
}

export default FormField;
