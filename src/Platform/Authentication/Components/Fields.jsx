import { useState } from "react"
import visibilityIcon from "../svg/visibilityIcon.svg"

let inputstyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"

export const TextField = ({ onChange, name }) => {
    return <input name={name} className='nameInput' placeholder={name} type='text' onChange={onChange} required />
}

export const NumberField = ({ onChange, name }) => {
    return <input name={name} placeholder={name} className='nameInput' type='number' onChange={onChange} required />
}

export const PasswordField = ({ onChange, name }) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='passwordInputDiv'>
            <input type={showPassword ? "text" : "password"} className='passwordInput' placeholder='Password' name='password' onChange={onChange} required />
            <img src={visibilityIcon} alt='show password' className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
        </div>
    )
}
export const SelectField = ({ name, choices, onChange }) => {
    return (
        <div classname='w-full md:w-1/2 px-8'>
            <select name={name} className={`${inputstyle} w-full px-10 py-3`} onChange={onChange} required={true}>
                {choices &&
                    choices.map((choice) => {
                        return (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        )
                    })}
            </select>
        </div>
    )
}
