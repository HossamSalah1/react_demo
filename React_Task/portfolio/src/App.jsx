import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import AboutMe from './pages/aboutMe/AboutMe'
import ContactUs from './pages/contactUs/contactUs'
import Products from './pages/products/Products'
import Navbar from './components/Navbar/Navbar'
import NotFound from './pages/notFound/notFound'
import Movie from './pages/Movie/Movie'
import MoviDetals from './pages/Movie/moviDetals'
import Form from './pages/Form/Form'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<AboutMe></AboutMe>} />
          <Route path='/contact' element={<ContactUs></ContactUs>} />
          <Route path='/products' element={<Products></Products>} />
          <Route path='/form' element={<Form></Form>} />
          <Route path='/movieDetails/:id' element={<MoviDetals></MoviDetals>} />
          <Route path='/movies' element={<Movie></Movie>} />
          <Route path='*' element={<NotFound/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
