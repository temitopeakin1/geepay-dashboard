import Header from './header';
import Sidebar from './sidebar';


const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <>
      <Sidebar />
      <Header />
      <div className='min-h-screen dark:bg-gray-900 bg-[#FAFAFA]'>
        {children}
      </div>
    </>
  
  )
};

export default Layout;