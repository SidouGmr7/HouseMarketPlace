import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import Categorylist from '../components/Categorylist'

function Explore() {
  return (
    <div className='explore '>
      <header>
        <p className='text-green-500 md:text-4xl text-2xl font-bold'>Explore</p>
      </header>
      <main>
        <p className=' p-6 font-bold'>Categories</p>
        <div className=' grid grid-cols-2 md:gap-5 gap-2'>
          <Categorylist image={rentCategoryImage} name='rent' url='rent' />
          <Categorylist image={sellCategoryImage} name='sell' url='sell'/>
          <Categorylist image={sellCategoryImage} name='sell' url='sell'/>
          <Categorylist image={sellCategoryImage} name='sell' url='sell'/>
        </div>
      </main>
    </div>
  )
}

export default Explore
