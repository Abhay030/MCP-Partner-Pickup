import React, { useState } from 'react'
import { loginMCP } from '../services/mcpService'
import { useNavigate , Link} from 'react-router-dom'
import { toast } from 'react-toastify'
// import './app.css'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginMCP(form)
      toast.success('Login successful')
      navigate(`/dashboard/${res.data._id}`)
    } catch (err) {
      console.error(err)
      toast.error('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <h2 className="block text-gray-700 text-center font-bold text-xl mb-6">
        Log in to MCP
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            onChange={handleChange}
            required
          />
          {/* Add error message display here if needed */}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="password"
              type="password"
              name="password"
              placeholder="********"
              onChange={handleChange}
              required
            />
            {/* Optional: Add a toggle button to show/hide password */}
            {/* <button className="absolute inset-y-0 right-0 px-4 py-2 focus:outline-none">
              <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.178 8.993-4.18 12-3.002 3.007-6.793 5.96-9.797 7-3.003-1.04-6.793-4-9.796-7-3.004-3.007-5.457-7.943-4.18-12z" />
              </svg>
            </button> */}
          </div>
          {/* Optional: Add "Forgot Password?" link */}
          {/* <p className="text-right text-gray-600 text-xs mt-1">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
          </p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            type="submit"
          >
            Log In
          </button>
          {/* Optional: Remember me checkbox */}
          {/* <div className="text-sm">
            <label className="inline-block align-middle">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div> */}
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs mt-6">
        Don't have an account?
        <Link to="/register" className="font-semibold text-blue-500 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Login
