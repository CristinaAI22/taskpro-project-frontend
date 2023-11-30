import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operationsAuth';

export const UserMenu = () => {
  const { name } = useSelector(state => state.auth.user);
  console.log('Username:', name);

  const dispatch = useDispatch();

  return (
    <div className="custom-navbar-username d-flex align-items-end gap-3">
      <p className="text-capitalize custom-navbar-userIn-name m-0">{name}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="32"
        viewBox="0 0 2 32"
        fill="none"
      >
        <path d="M1 0L0.999999 32" stroke="#E0E0E0" strokeWidth="2" />
      </svg>
      <button
        className="custom-navbar-userIn-exit"
        onClick={() => dispatch(logOut())}
      > 
        Exit 
      </button>
    </div>
  );
};
