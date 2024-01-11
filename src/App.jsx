
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import ItemListConteiner from './components/ItemListConteiner'


function App() {


  return (
    <>
      <Header/>
      <ItemListConteiner greeting={"Hola! En este momento estamos actualizando nuestra web, no se encuentran productos disponibles."}/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
