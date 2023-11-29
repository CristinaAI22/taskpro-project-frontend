import * as Yup from "yup";
import { useFormik } from "formik";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!").label("name"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .label("password")
    .min(8, { length: "Password is too short!" })
    .matches(/\d+/, { message: { number: "Password has no number!" } })
    .matches(/[a-z]+/, { message: "Password has no lowercase!" })
    .matches(/[A-Z]+/, { message: "Password has no uppercase!" })
    .required("Password is required!"),
});

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="">
      <input
        autoComplete="off"
        id="name"
        type="name"
        value={formik.values.name}
        placeholder="Please enter your name!"
        onChange={formik.handleChange("name")}
        onBlur={formik.handleBlur("name")}
      />
      {formik.touched.name ? (
        <span className="error">{formik.errors.name}</span>
      ) : null}
      <input
        autoComplete="off"
        id="email"
        type="email"
        value={formik.values.email}
        placeholder="Please enter your email!"
        onChange={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
      />
      {formik.touched.email ? (
        <span className="error">{formik.errors.email}</span>
      ) : null}
      <input
        autoComplete="off"
        id="password"
        type="password"
        value={formik.values.password}
        placeholder="Create your password!"
        onChange={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password ? (
        <span className="">{formik.errors.password}</span>
      ) : null}
      <button type="submit" onClick={formik.handleSubmit}>
        Register Now
      </button>
    </div>
  );
};
