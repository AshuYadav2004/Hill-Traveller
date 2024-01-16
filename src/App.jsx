import { useEffect, useState } from 'react';
import { Header, Footer } from './Component/export';
<<<<<<< HEAD
import { Home, Destination, CharDham, ExploreMore, AdminLogin, Adminlayout, AddDestination, Contact,ViewAllDestination,UpdateDestination} from './Pages/export';
=======
import { Home, Destination, CharDham, ExploreMore, AdminLogin, Adminlayout, AddDestination, Contact, ViewAllDestination, About, PrivacyPolicy, TermsAndConditions ,RefundPolicy } from './Pages/export';
>>>>>>> abb460ae5d84923bc64c9a658ec4795cb2c861d2
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EnquireFormModal from './Component/EnquireFormModal/EnquireFormModal';
import PopupForm from './Component/PopupForm/PopupForm';
import FixBottomNav from './Component/FixBottomNav/FixBottomNav';
import Aos from 'aos';
import "aos/dist/aos.css"
import { duration } from '@mui/material';





// Create a Layout component that includes the header and footer


const Layout = ({ children }) => (

  <>
    <PopupForm />
    <FixBottomNav />
    <EnquireFormModal />
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  return (


    <>
      <ToastContainer />
      <Routes>
        {/* Use the Layout component for routes where you want the header and footer */}
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path='/destinations' element={<Layout><Destination /></Layout>} />
        <Route path='/charDham' element={<Layout><CharDham /></Layout>} />
        <Route path='/exploremore/:id' element={<Layout><ExploreMore /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/privacypolicy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/term-condition" element={<Layout><TermsAndConditions /></Layout>} />
        <Route path="/refund-policy" element={<Layout><RefundPolicy /></Layout>} />
        {/* For the Admin route, do not include the Layout component */}
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin/home' element={<Adminlayout />} />
        <Route path='/admin/dashboard/add-destination' element={<Adminlayout><AddDestination /></Adminlayout>} />
<<<<<<< HEAD
        <Route path='/admin/dashboard/view-all-destination' element={<Adminlayout><ViewAllDestination/></Adminlayout>} />
        <Route path='/admin/dashboard/update/:id' element={<Adminlayout><UpdateDestination/></Adminlayout>} />
=======
        <Route path='/admin/dashboard/view-all-destination' element={<Adminlayout><ViewAllDestination /></Adminlayout>} />
>>>>>>> abb460ae5d84923bc64c9a658ec4795cb2c861d2
      </Routes>
      
    </>
  );
}

export default App;