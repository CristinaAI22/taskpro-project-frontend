import AddColumn from './AddColumn';
import { useModals } from '../../hooks/useModals';
import AddColumnModal from './AddColumnModal';
import Lists from './Lists';

const MainDashboard = () => {
  const { addColumnModal } = useModals();

  return (
    <>
      <div className='main-dashboard row p-3 px-4 flex-nowrap bg-transparent'>
        <Lists />
        <AddColumn />
      </div>
      {addColumnModal && <AddColumnModal />}
    </>
  );
};
export default MainDashboard;
