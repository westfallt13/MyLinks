import { useState } from 'react'
import './App.css'
import { ListSocial } from './components/ListSocial'
import { ProfilePicture } from './components/ProfilePicture'
import { ProfileName } from './components/ProfileName'
import Portfolio from './components/Portfolio'
import { FaFacebook, FaLinkedin, FaPatreon, FaGithub } from 'react-icons/fa'
import tiktokIcon from './assets/tiktok-fill-svgrepo-com.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ContactButton from './components/ContactButton'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

function HomePage() {

  return (

    <>

      <main className='container'>

        <h1 className='mt-3 mb-3'>My Links</h1>

        <ProfilePicture />

        <ProfileName username={'Thomas Westfall'} />

        <h6 className="mb-3">Software Engineer | 2D/3D Artist | Musician | Writer</h6>


        <Link to="/portfolio" className="btn btn-primary w-100" style={{ marginBottom: '10px', backgroundColor: 'white', color: 'black' }}>
          View My Portfolio
        </Link>

        <ContactButton email="westfallt13@gmail.com" />

        <br></br>

        <p className="socialclass">Connect With Me</p>

        <ul className="list-group mb-4">

          <ListSocial name={'GitHub'} link={"https://github.com/westfallt13?tab=repositories"} icon={<FaGithub />} />

          <ListSocial name={'Facebook'} link={"https://www.facebook.com/profile.php?id=61585659697434"} icon={<FaFacebook />} />

          <ListSocial name={'LinkedIn'} link={"https://www.linkedin.com/in/thomas-westfall-225186376/"} icon={<FaLinkedin />} />

          <ListSocial name={'Patreon'} link={"https://www.patreon.com/cw/Beachfall"} icon={<FaPatreon />} />




        </ul>

      </main>

    </>

  )

}

export default App