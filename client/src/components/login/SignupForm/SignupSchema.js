import * as yup from "yup";

const SignupSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("email is required"),
  password: yup.string().required("Password is required"),
});
export default SignupSchema;
