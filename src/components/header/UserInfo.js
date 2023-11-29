import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/auth/selectors";
import EditProfileModal from "./EditProfileModal";
import { openEditProfileModal } from "../../features/auth/authSlice";

import styled from "styled-components";

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

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleProfileClick = useCallback(() => {
    dispatch(openEditProfileModal());
  }, [dispatch]);

  return (
    <UserInfoContainer onClick={handleProfileClick}>
      <StyledProfilePictureContainer>
        <StyledProfileIcon className="pi pi-user" />
      </StyledProfilePictureContainer>
      <ProfileImage src={user.image} alt={user.name} />
      <EditProfileModal />
    </UserInfoContainer>
  );
};

export default UserInfo;
