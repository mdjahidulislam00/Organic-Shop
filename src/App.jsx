import  'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import AdminPage from './pages/AdminPage'
import Shop from './Component/Shop'
import ProductDetails from './Component/ProductDetails'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './Component/PrivateRoute'
import NoMatchRoute from './Component/NoMatchRoute'
import { createContext, useState } from 'react'
import CartPage from './pages/CartPage'
import ProductAddingFrom from './Component/ProductAddingFrom'
import AdminProductShow from './Component/AdminProductShow'

export const currentUser = createContext();

const App = () => {
  const [CurrentLogInUser, setCurrentLogInUser] = useState({});
  return (
    <currentUser.Provider value={[CurrentLogInUser, setCurrentLogInUser]} >
      <Header />
      <Routes>
        <Route path="*" element={ <HomePage/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/*" element={ <PrivateRoute />}>
          <Route path="order" element={<CartPage />} />
          <Route path="admin" element={<AdminPage/>} />
          <Route path="addProduct" element={<ProductAddingFrom />} />
          <Route path="manageProducts" element={<AdminProductShow />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="/signUp" element={ <SignUpPage/>} />
        <Route path="/productDetails/:id" element={ <ProductDetails/>} />
        <Route path="*" element={ <NoMatchRoute/>} />
      </Routes>
      <Footer/>
    </currentUser.Provider>
  )
}

export default App