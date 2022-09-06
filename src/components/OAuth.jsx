import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

function OAuth() {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Check for user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      // If user, doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
    } catch (error) {
      toast.error('Could not authorize with Google')
    }
  }
  return (
    <div className='flex flex-col items-center '>
      <p className='md:hidden'>
        Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with{' '}
      </p>
      <button
        className='bg-white p-3 md:p-2 rounded-full md:w-10 w-12 m-3 md:m-0 md:shadow-sm shadow-xl hover:scale-110'
        onClick={onGoogleClick}>
        <img src={googleIcon} alt='google' />
      </button>
    </div>
  )
}

export default OAuth
