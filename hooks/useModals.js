import { useSelector } from 'react-redux';
import {
  selectAddColumnModal,
  selectEditColumnModal,
} from '../features/modals/selectors';

export const useModals = () => {
  const addColumnModal = useSelector(selectAddColumnModal);
  const editColumnModal = useSelector(selectEditColumnModal);

  return { addColumnModal, editColumnModal };
};
