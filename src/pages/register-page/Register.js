import { RegisterForm } from "../../components/register-form/RegisterForm";
import { useLoadingAndError } from "../../hooks/useLoadingAndError";
//import ErrorMessage from "../../components/error-message/ErrorMessage";
import Loading from "../../components/loading/Loading";
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from 'react';  

const Register = () => {
 // const { isError, isLoading } = useLoadingAndError();

  return (
    <>
      <div>
        <RouterLink component={RouterLink} to="/register" className="">
          Registration
        </RouterLink>
        <RouterLink component={RouterLink} to="/login" className="">
          Log in
        </RouterLink>
      </div>
      <RegisterForm />
      {/* {isError && <ErrorMessage />}
      {isLoading && <Loading />} */}
    </>
  );
};
export default Register;

 