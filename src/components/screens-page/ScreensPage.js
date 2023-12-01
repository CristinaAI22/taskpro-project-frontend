import HeaderDashboard from './HeaderDashboard';
import MainDashboard from './MainDashboard';
import './screens-page.css';
import EditProfileModal from '../header/EditProfileModal';

const ScreensPage = () => {
  return (
    <div className='screens-page bg-secondary text-center'>
      <HeaderDashboard />
      <MainDashboard />
      <EditProfileModal />
    </div>
  );
};
export default ScreensPage;
