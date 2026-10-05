import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Product from './Pages/Product.jsx'
import Contact from './Pages/Contact.jsx'
import Nav from './Components/Nav.jsx'
import NoteFound from './Pages/NoteFound.jsx'
import Man from './Pages/Man.jsx'
import Woman from './Pages/Woman.jsx'
import Course from './Pages/Course.jsx'
import CourseDetails from './Pages/CourseDetails.jsx'
import Nav2 from './Components/Nav2.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Nav />
      <Nav2 />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} />
            <Route path='/man' element={<Man/>}></Route>
            <Route path='/woman' element={<Woman/>}></Route>
        <Route/>
        <Route path='*' element={<NoteFound/>} />
        <Route path='/course' element={<Course />}></Route>
        <Route path='/course/:courseId' element={<CourseDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
