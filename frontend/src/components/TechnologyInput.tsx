import { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { Technology } from '../common/types';
import api from '../services/api';


interface TechInputProps {
  onChange: (e: React.ChangeEvent<{}>, values: Technology[]) => void;
}

function TechnologyInput(props: TechInputProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Loading all available technologies on mount
  useEffect(() => {
    api.get('/technologies')
      .then(res => setTechnologies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="tech-input">
      <Autocomplete
        multiple
        autoHighlight
        limitTags={4}
        onChange={props.onChange}
        getOptionLabel={(tech: Technology) => tech.name}
        options={technologies}
        noOptionsText="No technologies found."
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            label="Technologies"
          />
        )}
      />
    </div>
  );
}

export default TechnologyInput;
