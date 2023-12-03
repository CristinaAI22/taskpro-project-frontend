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
    <div>
      <img
        onClick={handleProfileClick}
        src={user.avatarURL}
        alt={user.name}
        className="rounded-circle"
        width={32}
      />
      <span className="d-none d-md-block ps-2">{user.name}</span>
      <EditProfileModal />
    </div>
  );
};

export default UserInfo;
