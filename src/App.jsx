import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ListSocial } from './components/ListSocial'
import { ProfilePicture } from './components/ProfilePicture'
import { ProfileName } from './components/ProfileName'
import { FaFacebook, FaLinkedin, FaPatreon, FaGithub } from 'react-icons/fa'
import tiktokIcon from './assets/tiktok-fill-svgrepo-com.svg'

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
          <ListSocial
            name={'TikTok'}
            link={"https://www.tiktok.com/@beachfall_?fbclid=IwY2xjawPwrZJleHRuA2FlbQIxMABicmlkETE2YWtza3VJVkNPb2RWcHVQc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrVmONX3VDYs6ciLtv2njuqwePQHv0QxS0YeXqxSQ-rGSth1rBWIjUF2z3Jl_aem_TJVOT0kOA465tf5DOqv4OQ"}
            icon={<img src={tiktokIcon} alt="TikTok" style={{ width: '24px', height: '24px' }} />}
          />
        </ul>
      </main>
    </>
  )
}

export default App