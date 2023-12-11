import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorMessage } from '../../features/board-slice/selectors';
import { resetError } from '../../features/board-slice/boardSlice';

const Error = () => {
  const navigate = useNavigate();
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  return (
    <div className='loading-container'>
      <Result
        status='404'
        title='ERROR'
        subTitle={errorMessage}
        extra={
          <Button
            type='primary'
            onClick={() => {
              dispatch(resetError());
              navigate(-1);
            }}
          >
            Go Back
          </Button>
        }
      />
    </div>
  );
};
export default Error;
