import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form } from 'react-bootstrap';
import { closeEditProfileModal } from '../../features/auth/authSlice';
import { updateProfile, refreshUser } from '../../features/auth/operations';
import {
  selectIsEditProfileModalOpen,
  selectUser,
} from '../../features/auth/selectors';

const EditProfileModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsEditProfileModalOpen);
  const user = useSelector(selectUser);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    password: user?.password || '',
    avatar: user.avatarURL,
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

    const formDataObject = new FormData();
    formDataObject.append('avatar', formData.avatar);
    formDataObject.append('name', formData.name);
    formDataObject.append('email', formData.email);
    formDataObject.append('password', formData.password);

    await dispatch(updateProfile(formDataObject));
    await dispatch(refreshUser());
    handleClose();
  };
  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  return (
    <>
      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            className='border border-success d-grid gap-3'
          >
            <div className='position-relative '>
              <div className='  border d-flex justify-content-center'>
                <img
                  src={
                    formData.profileImage
                      ? URL.createObjectURL(formData.profileImage)
                      : user.avatarURL ||
                        `path/to/placeholder.jpg?timestamp=${new Date().getTime()}`
                    //de daugat placeholder
                  }
                  alt='Avatar'
                  className='  border border-success rounded-2 '
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <label
                htmlFor='avatarInput'
                className='position-absolute rounded-2'
                style={{
                  bottom: '-10%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'red',
                }}
              >
                <input
                  type='file'
                  id='avatarInput'
                  accept='image/*'
                  className='d-none'
                  onChange={handleFileChange}
                />
                <span className='btn btn-primary btn-sm'>
                  <i className='bi bi-plus'></i>
                </span>
              </label>
            </div>
            <Form.Control
              type='text'
              placeholder='Enter your name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <Form.Control
              type='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <div className='input-group'>
              <Form.Control
                type={formData.showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type='button'
                className='btn btn-outline-secondary'
                onClick={togglePasswordVisibility}
              >
                <i
                  className={`bi ${
                    formData.showPassword ? 'bi-eye-slash' : 'bi-eye'
                  }`}
                ></i>
              </button>
            </div>
            <button
              type='submit'
              className='py-2 modals-buttons rounded-2 w-100 mt-4 color-green '
            >
              Send
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditProfileModal;
