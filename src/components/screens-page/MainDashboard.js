import AddColumn from './AddColumn';
import { useSelector } from 'react-redux';
import { selectBoardLists } from '../../features/board-slice/selectors';
import { useModals } from '../../hooks/useModals';
import AddColumnModal from './AddColumnModal';
import Lists from './Lists';

const MainDashboard = () => {
  const boardLists = useSelector(selectBoardLists);
  const { addColumnModal, editColumnModal } = useModals();

  return (
    <>
      <div className='main-dashboard row p-3 px-4 flex-nowrap'>
        <Lists />
        <AddColumn />
      </div>
      {addColumnModal && <AddColumnModal />}
    </>
  );
};
export default MainDashboard;
