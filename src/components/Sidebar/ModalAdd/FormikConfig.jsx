import { object, string } from 'yup';

export const formikConfig = {
  initialValues: {
    title: '',
  },
  validationSchema: object({
    title: string().required('Title is required'),
  }),
  onSubmit: (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  },
};
