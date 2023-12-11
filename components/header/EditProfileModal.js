import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
    password: "",
    avatar: null,
    showPassword: false,
  });

  const handleClose = () => {
    dispatch(closeEditProfileModal());
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, avatar: file });
    // console.log('Selected file:', file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.avatar);
    const formDataObject = new FormData();
    formDataObject.append("avatar", formData.avatar);
    formDataObject.append("name", formData.name);
    formDataObject.append("email", formData.email);
    formDataObject.append("password", formData.password);

    await dispatch(updateProfile(formDataObject));
    await dispatch(refreshUser());
    handleClose();
  };
  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog" style={{ marginTop: "80px" }}>
            <div className="modal-content">
              <div data-bs-theme="dark" className="modal-header  ">
                <h4 className="modal-title">Edit Profile</h4>
                <button
                  type="button"
                  className="btn-close "
                  onClick={handleClose}
                ></button>
              </div>
              <div data-bs-theme="dark" className="modal-body">
                <form onSubmit={handleSubmit} className=" d-grid gap-3">
                  <div className="position-relative">
                    <div className="d-flex justify-content-center">
                      <img
                        src={
                          formData.avatar
                            ? URL.createObjectURL(formData.avatar)
                            : user.avatarURL ||
                              `path/to/placeholder.jpg?timestamp=${new Date().getTime()}`
                        }
                        alt="Avatar"
                        className=" rounded-2"
                        style={{ width: "150px", height: "150px" }}
                      />
                    </div>
                    <label
                      htmlFor="avatarInput"
                      className="position-absolute rounded-2 change-image-button"
                      style={{
                        bottom: "-10%",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <input
                        type="file"
                        id="avatarInput"
                        accept="image/*"
                        className="d-none "
                        onChange={handleFileChange}
                      />
                      <span className="btn ">
                        <i className="bi bi-plus plus-icon"></i>
                      </span>
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    className="form-control color-black form-input "
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    className="form-control"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <div className="input-group">
                    <input
                      type={formData.showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      className="form-control"
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={togglePasswordVisibility}
                    >
                      <i
                        className={`bi ${formData ? "bi-eye-slash" : "bi-eye"}`}
                      ></i>
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="py-2 modals-buttons rounded-2 w-100 mt-4 form-submit-button"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfileModal;
