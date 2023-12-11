import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/auth/selectors";
import { openEditProfileModal } from "../../features/auth/authSlice";
import EditProfileModal from "./EditProfileModal";

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleProfileClick = useCallback(() => {
    dispatch(openEditProfileModal());
  }, [dispatch]);

  return (
    <div className="d-flex gap-2 ">
      <span className="d-none d-md-block ps-2 align-self-center user-name">
        {user.name}
      </span>
      <img
        onClick={handleProfileClick}
        src={user.avatarURL}
        alt={user.name}
        className="rounded-2"
        width={32}
      />

      <EditProfileModal />
    </div>
  );
};

export default UserInfo;
