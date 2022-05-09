import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddItem from './Pages/AddItem/AddItem'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Shared/Footer/Footer'
import OutgoingOrders from './Pages/OutgoingOrders/OutgoingOrders/OutgoingOrders'
import IncomingPurchases from './Pages/IncomingPurchases/IncomingPurchases/IncomingPurchases';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import ManageInventories from './Pages/ManageInventories/ManageInventories/ManageInventories';
import AddInventoryItem from './Pages/AddInventoryItem/AddInventoryItem';
import MyItems from './Pages/MyItems/MyItems/MyItems';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItems from './Pages/ManageItems/ManageItems/ManageItems';
import { ToastContainer } from 'react-toastify';
import About from './Pages/About/About';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/outgoingorders' element={<RequireAuth>
          <OutgoingOrders></OutgoingOrders>
        </RequireAuth>}></Route>
        <Route path='/incomingpurchases' element={<RequireAuth>
          <IncomingPurchases></IncomingPurchases>
        </RequireAuth>}></Route>
        <Route path='/manageinventory' element={<RequireAuth>
          <ManageInventories></ManageInventories>
        </RequireAuth>}></Route>
        <Route path='/addinventoryitem' element={<RequireAuth>
          <AddInventoryItem></AddInventoryItem>
        </RequireAuth>}></Route>
        <Route path='/manageitems' element={<RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <ItemDetail></ItemDetail>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path='/addItem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>

  );
}

export default App;
