import { Link } from 'react-router-dom'
import { ProfilePicture } from '../components/ProfilePicture'
import { ProfileName } from '../components/ProfileName'
import { ListSocial } from '../components/ListSocial'
import { FaFacebook, FaLinkedin, FaPatreon, FaGithub } from 'react-icons/fa'

function Home() {
  return (
    <>
      <main className='container'>
        <h1 className='mt-3 mb-3'>Central Hub</h1>
        <ProfilePicture />
        <ProfileName username={'Thomas Westfall'} />
        <h6 className="mb-3">Software Engineer | 2D/3D Artist | Musician | Writer</h6>

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

export default Home