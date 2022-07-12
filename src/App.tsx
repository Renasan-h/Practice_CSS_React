import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Header from './views/components/Header'
import NavigationBar from './views/components/NavigationBar'
import Footer from './views/components/Footer'
import Keyvisual from './views/parts/Keyvisual'
import Home from './views/parts/Home'
import About from './views/parts/About'
import Menu from './views/parts/Menu'
import Contact from './views/parts/Contact'
import Access from './views/parts/Access'

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Keyvisual />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/access' element={<Access />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App