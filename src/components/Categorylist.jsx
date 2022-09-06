import { Link } from 'react-router-dom'

const Categorylist = ({ image, name, url }) => {
  return (
    <Link
      to={`/category/${url}`}
      className='relative hover:scale-105 transition'>
      <img src={image} alt='' className='exploreCategoryImg ' />
      <p className='absolute md:bottom-5 bottom-2 right-5 text-slate-100 bg-opacity-40 bg-green-500 rounded-xl p-1 md:p-2 font-bold md:text-xl text-sm'>
        {name}
      </p>
    </Link>
  )
}

export default Categorylist
