import { useEffect, useState } from 'react';
import { Header, Footer } from './Component/export';
import { Home, Destination, CharDham, ExploreMore, AdminLogin,Adminlayout,AddDestination } from './Pages/export';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EnquireFormModal from './Component/EnquireFormModal/EnquireFormModal';
import PopupForm from './Component/PopupForm/PopupForm';
import FixBottomNav from './Component/FixBottomNav/FixBottomNav';

// Create a Layout component that includes the header and footer


const Layout = ({ children }) => (
  <>
  <PopupForm/>
  <FixBottomNav/>
   <EnquireFormModal/>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    
  <>
  <ToastContainer/>
    <Routes>
      {/* Use the Layout component for routes where you want the header and footer */}
      <Route
        path='/'
        element={
          <Layout>
          <Home/>
          </Layout>
        }
      />
      <Route path='/destinations' element={<Layout><Destination /></Layout>} />
      <Route path='/charDham' element={<Layout><CharDham /></Layout>} />
      <Route path='/faqs' element={<Layout><ExploreMore /></Layout>} />
      
      {/* For the Admin route, do not include the Layout component */}
      <Route path='/admin' element={<AdminLogin />} />
      <Route path='/admin/home' element={<Adminlayout />} />
      <Route path='/admin/dashboard/add-destination' element={<Adminlayout><AddDestination/></Adminlayout>} />
    </Routes>
  </>
  );
}

export default App;