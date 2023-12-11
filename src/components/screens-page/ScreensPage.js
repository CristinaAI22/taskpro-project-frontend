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
  selectBoardIsError,
} from '../../features/board-slice/selectors';
import Loading from '../loading/Loading';
import { useParams } from 'react-router-dom';
import { BackgroundRadio } from '../Sidebar/ModalAdd/radioOptions';
import Error from '../error/Error';

const ScreensPage = () => {
  const dispatch = useDispatch();
  // const boardId = '656f7fe83a3d3914e6fbf7f0';
  const boadData = useSelector(selectBoardData);
  const { boardId } = useParams();
  const isLoading = useSelector(selectBoardIsLoading);
  const isError = useSelector(selectBoardIsError);
  const backgroundImg = useSelector(selectBoardBackgroundImg);
  // console.log(boardId);

  useEffect(() => {
    if (boardId) {
      dispatch(getBoardData({ _id: boardId }));
    }
  }, [dispatch, boardId]);

  const divStyle = {
    backgroundImage: backgroundImg
      ? `url(${BackgroundRadio[backgroundImg].image})`
      : 'none',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

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

  return (
    <div className='screens-page bg-secondary text-center' style={divStyle}>
      <HeaderDashboard />
      <MainDashboard />
    </div>
  );
};
export default ScreensPage;
