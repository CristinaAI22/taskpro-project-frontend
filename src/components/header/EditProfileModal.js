import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { closeEditProfileModal } from "../../features/auth/authSlice";
import { updateProfile, refreshUser } from "../../features/auth/operations";
import {
  selectIsEditProfileModalOpen,
  selectUser,
} from "../../features/auth/selectors";

const EditProfileModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsEditProfileModalOpen);
  const user = useSelector(selectUser);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: user?.password || "",
    profileImage: null,
  });

  const handleClose = () => {
    dispatch(closeEditProfileModal());
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
    console.log("Selected file:", file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(formData));
    await dispatch(refreshUser());
    handleClose();
  };

  return (
    <>
      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="position-relative">
              <img
                src={
                  formData.profileImage
                    ? URL.createObjectURL(formData.profileImage)
                    : user.avatarURL ||
                      `path/to/placeholder.jpg?timestamp=${new Date().getTime()}`
                  //de daugat placeholder
                }
                alt="Avatar"
                className="img-fluid rounded-circle mb-3"
                style={{ width: "150px", height: "150px" }}
              />
              <label
                htmlFor="avatarInput"
                className="position-absolute"
                style={{
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <input
                  type="file"
                  id="avatarInput"
                  accept="image/*"
                  className="d-none"
                  onChange={handleFileChange}
                />
                <span className="btn btn-primary btn-sm">+</span>
              </label>
            </div>

            {/* Form fields */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditProfileModal;
