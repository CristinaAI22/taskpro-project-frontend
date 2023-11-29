import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginSchema = Yup.object().shape({
  email: Yup.string().label("email").required("Email is required!"),
  password: Yup.string()
    .label("password")
    .min(8, { length: "Password is too short!" })
    .matches(/\d+/, { message: { number: "Password has no number!" } })
    .matches(/[a-z]+/, { message: "Password has no lowercase!" })
    .matches(/[A-Z]+/, { message: "Password has no uppercase!" })
    .required("Password is required!"),
});

function LogInForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="wrapper">
      <input
        autoComplete="off"
        id="email"
        type="email"
        value={formik.values.email}
        placeholder="Enter your email!"
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
        placeholder="Enter your password!"
        onChange={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password ? (
        <span className="error">{formik.errors.password}</span>
      ) : null}

      <button type="submit" onClick={formik.handleSubmit}>
        Log in
      </button>
    </div>
  );
}

export default LogInForm;
