import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { refreshUser, editUserProfile } from "../../features/auth/operations";
import { selectUser } from "../../features/auth/selectors";
import { closeEditProfileModal } from "../../features/auth/authSlice";
import styled from "styled-components";

const StyledDialog = styled(Dialog)`
  width: 400px;
`;

const StyledProfilePictureContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10%;
  overflow: hidden;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProfileIcon = styled.i`
  font-size: 2rem;
  color: #fff; /* Set the color of the icon */
`;

const StyledInputContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EditProfileModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isModalOpen = useSelector((state) => state.auth.isEditProfileModalOpen);

  const handleClose = useCallback(() => {
    dispatch(closeEditProfileModal());
  }, [dispatch]);

  const handleEscape = useCallback(
    (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);

  const handleSubmit = async (values) => {
    try {
      await dispatch(editUserProfile(values));
      await dispatch(refreshUser());
      handleClose();
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleFileChange = (event, form) => {
    const file = event.files[0];
    form.setFieldValue("profilePicture", file);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters"),
  });

  return (
    <StyledDialog
      visible={isModalOpen}
      onHide={handleClose}
      header="Edit Profile"
      modal
      focusOnShow={false}
    >
      <Formik
        initialValues={{
          name: user.name,
          email: user.email,
          password: "",
          profilePicture: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Placeholder for profile picture */}
          <StyledProfilePictureContainer>
            <StyledProfileIcon className="pi pi-user" />
          </StyledProfilePictureContainer>
          <FileUpload
            name="profilePicture"
            accept="image/*"
            chooseLabel="Choose"
            uploadLabel="Upload"
            cancelLabel="Cancel"
            customUpload
            onSelect={(e) => handleFileChange(e, e.form)}
          />
          <ErrorMessage name="profilePicture" component="div" />

          {/* Inputs for name, email, password */}
          <StyledInputContainer>
            <label htmlFor="name">Name:</label>
            <InputText type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </StyledInputContainer>

          <StyledInputContainer>
            <label htmlFor="email">Email:</label>
            <InputText type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </StyledInputContainer>

          <StyledInputContainer>
            <label htmlFor="password">Password:</label>
            <InputText type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </StyledInputContainer>

          {/* Send button */}
          <StyledButtonContainer>
            <Button type="submit" label="Save" />
          </StyledButtonContainer>
        </Form>
      </Formik>
    </StyledDialog>
  );
};

export default EditProfileModal;
