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

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<PartsDetail></PartsDetail>}></Route>
        <Route path='/confirm-order' element={<PurchaseOrder></PurchaseOrder>}></Route>

      </Routes>

      <Footer></Footer>
      <ToastContainer/>
    </>
  );
}

export default App;


{/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/all-products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <UpdateProduct />
          </RequireAuth>
        }
        ></Route>
        <Route path='/confirm-order/:id' element={
          <RequireAuth>
            <ConfirmOrder />
          </RequireAuth>
        }
        ></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='my-orders' element={<MyOrders />}></Route>
          <Route path='add-review' element={<AddReview />}></Route>
          <Route index element={<MyProfile />}></Route>
          <Route path='payment/:orderId' element={<Payment />}></Route>

          <Route path='manage-users' element={
            <RequireAdmin>
              <ManageUsers />
            </RequireAdmin>
          }></Route>
          <Route path='add-product' element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>
          }></Route>
          <Route path='manage-products' element={
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>
          }></Route>
          <Route path='manage-orders' element={
            <RequireAdmin>
              <ManageOrders />
            </RequireAdmin>
          }></Route>

        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes> */}