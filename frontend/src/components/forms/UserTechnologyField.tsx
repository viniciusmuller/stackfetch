import { useField } from 'formik';
import TechnologyInput from '@components/TechnologyInput';

interface UserTechnologyFieldProps {
  name: string;
  labelMessage: string;
}

function UserTechnologyField(props: UserTechnologyFieldProps) {
  const { name, labelMessage } = props;
  const [field, meta, helpers] = useField(name);
  const { error } = meta;

  return (
    <div className="user-techs-field">
      <label htmlFor={name}>{labelMessage}</label>
      <TechnologyInput
        {...field}
        onChange={(_, techs) => {
          helpers.setValue(techs.map((t) => t.id));
        }}
      />
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}

export default UserTechnologyField;
