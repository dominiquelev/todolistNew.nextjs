import * as Yup from 'yup';

export const validationSchemaRegister = Yup.object().shape({
    username: Yup.string().required('Username is Required'),
    email: Yup.string().email('Invalid Email').required('Email is Required'),
    password: Yup.string().required('Password is Required')
});

export const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().email('Email is Invalid').required('Email is Required'),
    password: Yup.string().required('Password is Required'),
})



