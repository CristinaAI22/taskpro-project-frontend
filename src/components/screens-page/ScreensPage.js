import HeaderDashboard from './HeaderDashboard';
import MainDashboard from './MainDashboard';
import './screens-page.css';

const ScreensPage = () => {
  return (
    <div className='screens-page bg-secondary text-center'>
      <HeaderDashboard />
      <MainDashboard />
    </div>
  );
};
export default ScreensPage;
