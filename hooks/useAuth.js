import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectErrorMessage,
} from '../features/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const errorMessage = useSelector(selectErrorMessage);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    errorMessage,
  };
};
