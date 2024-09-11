import Dashboard_1 from '@/components/Dashboard_1/Dashboard_1';
import Header from '@/components/Header/Header';

const Dashboard = () => {
  return (
    <>
      <div  className='block md:hidden'>
        <Header />
      </div>
      <Dashboard_1 />
    </>
  );
};

export default Dashboard;
