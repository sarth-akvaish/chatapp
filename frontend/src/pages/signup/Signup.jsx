import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {

    const { loading, signup } = useSignup();

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(inputs);
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-black-400'>Signup
                    <span className='text-blue-500'> Chatapp</span>
                </h1>
                <form className='p-2' onSubmit={handleSubmit}>
                    <div>
                        <label className='label '>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='John Doe' value={inputs.fullName} className='w-full input focus:outline-none input-bordered h-10' onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>
                    <div>
                        <label className='label '>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter username' value={inputs.username} className='w-full input focus:outline-none input-bordered h-10' onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>
                    <div>
                        <label className="label">
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' value={inputs.password} className='w-full input input-bordered focus:outline-none h-10' onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>
                    <div>
                        <label className="label">
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered focus:outline-none h-10' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className='pt-2 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account ?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : 'SignUp'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
