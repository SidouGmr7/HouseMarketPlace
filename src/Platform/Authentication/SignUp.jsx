import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase.config"
import OAuth from "./Components/OAuth"
import { ReactComponent as ArrowRightIcon } from "./svg/keyboardArrowRightIcon.svg"
import { TextField, PasswordField } from "./Components/Fields"

function SignUp(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        lastUpdate: serverTimestamp(),
        ...props.extraFields,
    })
    const { name, email, password } = formData
    const navigate = useNavigate()
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            updateProfile(auth.currentUser, {
                displayName: name,
            })
            const formDataCopy = { ...formData }
            delete formDataCopy.password
            formDataCopy.uuid = user.uid
            await setDoc(doc(db, "users", user.uid), formDataCopy)
            navigate("/")
        } catch (error) {
            toast.error("Something went wrong with registration")
        }
    }

    return (
        <>
            <div className='pageContainer'>
                <header>
                    <p className='p-4 font-bold text-xl'>Welcome Back!</p>
                </header>
                <form onSubmit={onSubmit} name='name'>
                    <TextField onChange={onChange} name='name' />
                    <TextField onChange={onChange} name='email' />
                    <PasswordField onChange={onChange} />
                    {/* {props.extraFields.map((field) => (
                        <TextField onChange={onChange} name={field} />
                    ))} */}
                    <div className='flex flex-row md:right-16 right-6 absolute gap-3'>
                        <Link to='/sign-in' className='text-green-500 font-semibold'>
                            Sign In
                        </Link>
                        <Link to='/forgot-password' className='text-green-500 font-semibold'>
                            Forgot Password
                        </Link>
                    </div>
                    <div className='signUpBar'>
                        <p className='signUpText'>Sign Up</p>
                        <button className='signUpButton'>
                            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                        </button>
                    </div>
                </form>
                <div className='md:hidden'>
                    <OAuth />
                </div>
            </div>
        </>
    )
}

export default SignUp
