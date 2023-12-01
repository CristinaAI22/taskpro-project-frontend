import { useDispatch, useSelector } from 'react-redux';
import { selectBoardLists } from '../../features/board-slice/selectors';

const Lists = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectBoardLists);

  return (
    <>
      {lists.map((list) => {
        const title = list.title;
        return (
          <div className='main-dashboard-lists col-12 col-sm-6 col-md-4 bg-dark p-3 rounded-2'>
            <ListTitle title={title} />
          </div>
        );
      })}
    </>
  );
};
export default Lists;

function ListTitle({ title }) {
  return <div className='column-title-card text-light'>{title}</div>;
}
