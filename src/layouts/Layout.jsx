import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header at the top */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 overflow-y-auto bg-zinc-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
