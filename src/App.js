import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Purchase from './Pages/Checkout/Purchase';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Payment from './Pages/Payment/Payment';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth';


function App() {
  return (
    <div className='px-14'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/payment/:id' element={<Payment></Payment>}></Route>

        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}> </Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>


          <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}> </Route>
          <Route path='addAProduct' element={<AddAProduct></AddAProduct>}> </Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}> </Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}> </Route>


        </Route>


      </Routes>
      <Footer></Footer>

      <ToastContainer />

    </div>
  );
}

export default App;
