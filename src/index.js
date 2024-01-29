import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Adminlogin from './components/Admin Login/Adminlogin';
import ProductAdd from './components/Product Addition Page/Productadd';
import UserDataAdd from './components/User Details/UserDataAdd';
import Contact from './components/Contact page/Contact'
import SubProduct from './components/SubProduct page/SubProduct';
import PolicyDetails from './components/PolicyDetails/PolicyDetails';
import Product from './components/Product page/Product';
import FDback from './components/FeedBack page/FDback';
import { Auth0Provider } from '@auth0/auth0-react';
// import Server from './Server';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
  domain="kanish.us.auth0.com"
  clientId="uFj0oGTTaXwtqZSEk0FzcQEm4PSjyGUv"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/adminlogin' element={<Adminlogin />}></Route>
      <Route path='/productadd' element={<ProductAdd />}></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/subproduct' element={<SubProduct />}></Route>
      <Route path='/feedback' element={<FDback />}></Route>
      <Route path='/policydetails' element={<PolicyDetails />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/userdata' element={<UserDataAdd />}></Route>
    </Routes>
  </BrowserRouter>
  </Auth0Provider>
  // <React.StrictMode><Server/></React.StrictMode>

);


