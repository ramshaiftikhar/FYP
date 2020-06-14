import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be valid"),
  password: yup.string().required("Password is required"),
});

export default LoginSchema;
