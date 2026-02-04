import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ListSocial } from './components/ListSocial'
import { ProfilePicture } from './components/ProfilePicture'
import { ProfileName } from './components/ProfileName'
import { FaFacebook, FaLinkedin, FaPatreon, FaGithub } from 'react-icons/fa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='container'>
        <h1 className='mt-3'>My Links</h1>
        <ProfilePicture />

        <ProfileName username={'Thomas Westfall'} />

        <ul className="list-group mb-4">
          <ListSocial name={'Facebook'} link={"https://www.facebook.com/profile.php?id=61585659697434"} icon={<FaFacebook />} />
          <ListSocial name={'LinkedIn'} link={"https://www.linkedin.com/in/thomas-westfall-225186376/"} icon={<FaLinkedin />} />
          <ListSocial name={'Patreon'} link={"https://www.patreon.com/cw/Beachfall"} icon={<FaPatreon />} />
          <ListSocial name={'GitHub'} link={"https://github.com/westfallt13?tab=repositories"} icon={<FaGithub />} />
        </ul>
      </main>
    </>
  )
}

export default App