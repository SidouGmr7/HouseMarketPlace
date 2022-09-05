import SidouProfile2 from '../assets/img/SidouProfile2.jpg'
import { useNavigate, useLocation } from 'react-router-dom'


function Navbar() {
  
  const navigate = useNavigate()
  const location = useLocation()
  
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }
  return (
    <header className=' z-50 mt-6 ml-5 w-screen bg-primary'>
      <div className='md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex items-center gap-2'>
            <p className='md:text-xl'>
              <span className='text-rose-600 font-bold'>H</span>ouse
              <span className='text-rose-600 font-bold'>M</span>arket
              <span className='text-rose-600 font-bold'>P</span>lace
            </p>
          </div>
        </div>
        <div className='md:flex hidden items-center gap-8 mr-14'>
          <ul className='flex items-center gap-10'>
            <li className='text-lg hover:scale-110 transition cursor-pointer hover:text-rose-600 text-black' onClick={() => navigate('/')}>
              Home
            </li>
            <li className='text-lg hover:scale-110 transition cursor-pointer hover:text-rose-600 text-black'>
              Offre
            </li>
            <li className='text-lg hover:scale-110 transition cursor-pointer hover:text-rose-600 text-black'>
              Profile
            </li>
            <li className='text-lg hover:scale-110 transition cursor-pointer hover:text-rose-600 text-black'>
              Login
            </li>
          </ul>
          <div className='relative'>
            <img
              whileTap={{ scale: 0.6 }}
              src={SidouProfile2}
              className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
              alt='userprofile'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
