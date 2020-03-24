import * as Yup from 'yup';

const authFormSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(50, 'Too Long')
    .required('Name is required'),
});

export default authFormSchema;
