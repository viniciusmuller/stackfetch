import { useField } from 'formik';
import TechnologyInput from '../TechnologyInput';

interface UserTechnologyFieldProps {
  name: string;
  labelMessage: string;
}

function UserTechnologyField(props: UserTechnologyFieldProps) {
  const [field, meta, helpers] = useField(props.name);

  return (
    <div className="user-techs-field">
      <label>
        {props.labelMessage}
      </label>
      <TechnologyInput {...field} onChange={(_, techs) => {
        helpers.setValue(techs.map(t => t.id))}
       } />
      {meta.error && <p className="field-error">{meta.error}</p>}
    </div>
  );
}

export default UserTechnologyField;
