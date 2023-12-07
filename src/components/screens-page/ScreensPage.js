import { useEffect } from 'react';
import HeaderDashboard from './HeaderDashboard';
import MainDashboard from './MainDashboard';
import './screens-page.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardData } from '../../features/board-slice/operations';
import {
  selectBoardData,
  selectBoardIsLoading,
  selectBoardBackgroundImg,
} from '../../features/board-slice/selectors';
import Loading from '../loading/Loading';
import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const dispatch = useDispatch();
  const boardId = '656f7fe83a3d3914e6fbf7f0';
  const boadData = useSelector(selectBoardData);
  // const boardId = useParams('boardId');
  const isLoading = useSelector(selectBoardIsLoading);
  useEffect(() => {
    dispatch(getBoardData({ _id: boardId }));
  }, [dispatch, boardId]);

  const state = useSelector((state) => state.board);
  // console.log(state);
  const backgroundImg = useSelector(selectBoardBackgroundImg);
  const divStyle = {
    backgroundImage: backgroundImg ? `url(${backgroundImg})` : 'none',
  };

  if (!boadData) {
    return (
      <div className='screens-page bg-secondary text-center d-flex align-items-center justify-content-center'>
        <div className='no-board-info-container'>
          <h2 className='no-board-text'>
            Before starting your project, it is essential{' '}
            <span>to create a board</span> to visualize and track all the
            necessary tasks and milestones. This board serves as a powerful tool
            to organize the workflow and ensure effective collaboration among
            team members.
          </h2>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='screens-page bg-secondary text-center' style={divStyle}>
      {/* col */}
      {/* <div className='row'> */}
      <HeaderDashboard />
      {/* </div> */}
      {/* <div className='row'> */}
      <MainDashboard />
      {/* </div> */}
    </div>
  );
};
export default ScreensPage;
