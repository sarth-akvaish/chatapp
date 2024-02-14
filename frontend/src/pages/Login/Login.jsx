import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(username, password)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-black-400'>Login
                    <span className='text-blue-500'> Chatapp</span>
                </h1>
                <form className='p-2' onSubmit={handleSubmit}>
                    <div>
                        <label className='label '>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter username' className='w-full input focus:outline-none input-bordered h-10' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label className="label">
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered focus:outline-none h-10' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Link to="/signup" className='pt-2 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account ?
                    </Link>
                    <div>
                        <button disabled={loading} className='btn btn-block btn-sm mt-2'>
                            {loading ? <span className='loading loading-spinner'></span> : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
