import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import PartsDetail from './components/Home/PartsDetail';
import PurchaseOrder from './components/PurchaseOrder/PurchaseOrder';
import RequireAuth from './components/Login/RequireAuth';
import Dashboard from './components/DashBoard/Dashboard';
import About from './components/Shared/About';
import NotFound from './components/Shared/NotFound';
import MyOrders from './components/DashBoard/MyOrders';
import MyReview from './components/DashBoard/MyReview';
import MyProfile from './components/DashBoard/MyProfile';
import Users from './components/DashBoard/Users';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <PartsDetail></PartsDetail>
        </RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer/>
    </>
  );
}

export default App;


