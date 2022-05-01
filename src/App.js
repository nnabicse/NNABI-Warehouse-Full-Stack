import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageItems from './Pages/ManageItems/ManageItems'
import MyItems from './Pages/MyItems/MyItems'
import AddItem from './Pages/AddItem/AddItem'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Shared/Footer/Footer'
import OutgoingOrders from './Pages/OutgoingOrders/OutgoingOrders/OutgoingOrders'
import IncomingPurchase from './Pages/IncomingPurchases/IncomingPurchase/IncomingPurchase';
import IncomingPurchases from './Pages/IncomingPurchases/IncomingPurchases/IncomingPurchases';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/outgoingorders' element={<OutgoingOrders></OutgoingOrders>}></Route>
        <Route path='/incomingpurchases' element={<IncomingPurchases></IncomingPurchases>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
