import { useEffect } from 'react';
import { useDispatch } from 'react-redux';  

const UsersPage = () => { 
  const dispatch = useDispatch(); 
   
  useEffect(() => {
    // dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <p>hi</p>
    </>
  );
};
export default UsersPage;
