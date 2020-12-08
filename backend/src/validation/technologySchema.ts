import * as Yup from 'yup';

const technologySchema = Yup.object().shape({
  name: Yup.string()
    .typeError('Name must be a string.')
    .required('Name is required.')
    .max(20, 'Name must be at most 20 characters.'),

  color: Yup.string()
    .typeError('Color must be a string.')
    .required('Color is required.')
    .matches(/^#[0-9a-f]{6}$/i, 'Color must be hexadecimal.')
});

export default technologySchema;
