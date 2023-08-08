import { useNavigate } from 'react-router-dom'
import { useAuthStatus } from '../Platform/Authentication/hooks/useAuthStatus'
import { getAuth } from 'firebase/auth'
import { AiOutlineLogout } from 'react-icons/ai'
import OAuth from '../Platform/Authentication/Components/OAuth'

function Navbar() {
  const navigate = useNavigate()
  const { loggedIn } = useAuthStatus()
  const auth = getAuth()
  const onLogout = () => {
    auth.signOut()
    navigate('/')
    window.location.reload()
  }

  return (
    <header className=' z-50 mt-6 ml-5 w-screen bg-primary'>
      <div className='md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex items-center gap-2'>
            <p className='md:text-xl'>
              <span className='text-green-500 font-bold'>H</span>ouse
              <span className='text-green-500 font-bold'>M</span>arket
              <span className='text-green-500 font-bold'>P</span>lace
            </p>
          </div>
          {loggedIn && (
            <button
              type='button'
              className='scale-150 cursor-pointer absolute right-5 md:hidden'
              onClick={onLogout}>
              <AiOutlineLogout />
            </button>
          )}
        </div>
        <div className='md:flex hidden items-center gap-8 mr-14'>
          <ul className='flex items-center gap-10'>
            <li
              className='text-lg hover:scale-110 transition cursor-pointer hover:text-green-500  text-black'
              onClick={() => navigate('/')}>
              Home
            </li>
            <li
              className='text-lg hover:scale-110 transition cursor-pointer hover:text-green-500  text-black'
              onClick={() => navigate('/offers')}>
              Offre
            </li>
            <li className='text-lg hover:scale-110 transition cursor-pointer hover:text-green-500  text-black'>
              Service
            </li>
            {loggedIn ? (
              <li className='text-lg hover:scale-110 transition cursor-pointer hover:text-green-500  text-black'>
                <button type='button' className='logOut' onClick={onLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className='text-lg hover:scale-110 transition cursor-pointer hover:text-green-500  text-black'>
                  <button
                    type='button'
                    className='logOut'
                    onClick={() => navigate('/profile')}>
                    Login
                  </button>
                </li>
              </>
            )}
          </ul>
          {loggedIn ? (
            <div className='relative'>
              <img
                whiletap={{ scale: 0.6 }}
                src={
                  auth.currentUser == null ? 'null' : auth.currentUser.photoURL
                }
                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                alt='userprofile'
                onClick={() => navigate('/profile')}
              />
            </div>
          ) : (
            <OAuth />
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
