import { useEffect } from 'react';
import HeaderDashboard from './HeaderDashboard';
import MainDashboard from './MainDashboard';
import './screens-page.css';
import { useDispatch } from 'react-redux';
import { getBoardData } from '../../features/board-slice/operations';

const ScreensPage = () => {
  const dispatch = useDispatch();
  const boardId = '656639d36713cb888590d983';

  useEffect(() => {
    dispatch(getBoardData({ _id: boardId }));
  }, [dispatch]);

  return (
    <div className='screens-page bg-secondary text-center'>
      <HeaderDashboard />
      <MainDashboard />
    </div>
  );
};
export default ScreensPage;
