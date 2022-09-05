import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <div className='explore '>
      <header>
        <p className='text-green-500 md:text-4xl text-2xl font-bold'>Explore</p>
      </header>
      <main>
        <p className=' p-6 font-bold'>Categories</p>
        <div className='exploreCategories flex justify-between'>
          <Link
            to='/category/rent'
            className='relative hover:scale-105 transition w-[48%]'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg '
            />
            <p className='absolute md:bottom-5 bottom-2 right-5 text-white bg-opacity-25 bg-green-500 rounded-xl p-1 md:p-2 font-bold md:text-xl text-sm'>
              Places for rent
            </p>
          </Link>
          <Link
            to='/category/sale'
            className='relative hover:scale-105 transition w-[48%]'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg  '
            />
            <p className=' absolute md:bottom-5 bottom-2 right-5 text-white bg-opacity-25 bg-green-500 rounded-xl p-1 md:p-2 font-bold md:text-xl text-sm'>
              Places for sale
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
