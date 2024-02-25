
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import ItemListConteiner from './components/ItemListConteiner'
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Error404 from "./components/error404";
import Cart from "./components/cart";
import CartContextProvider from "./context/CartContext";
import Checkout from "./components/Checkout";


function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<ItemListConteiner/>}/>
            <Route path="/inicio" element={<Main/>}/>
            <Route path="/category/:id" element={<ItemListConteiner/>}/>
            <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
