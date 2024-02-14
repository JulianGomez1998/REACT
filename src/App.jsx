
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import ItemListConteiner from './components/ItemListConteiner'
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Error404 from "./components/error404";


function App() {


  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<ItemListConteiner/>}/>
            <Route path="/inicio" element={<Main/>}/>
            <Route path="/category/:id" element={<ItemListConteiner/>}/>
            <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
        <Footer/>

    </BrowserRouter>
  )
}

export default App
