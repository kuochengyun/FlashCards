import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  const flashCardUser = window.localStorage.getItem('flashCardUser');
  const isAuth = flashCardUser && JSON.parse(flashCardUser) ? true : false;

  return (
    <div>
      <Navbar isDashboard={isAuth} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout