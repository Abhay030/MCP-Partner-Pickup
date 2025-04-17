import React, { useState } from 'react'
import { registerMCP } from '../services/mcpService'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await registerMCP(form)
      alert('Registered successfully!')
      navigate(`/dashboard/${res.data._id}`)
    } catch (err) {
      console.error(err)
      alert('Registration failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <h2 className="block text-gray-700 text-center font-bold text-xl mb-6">
        Create Your MCP Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            id="name"
            type="text"
            name="name"
            placeholder="Your Full Name"
            onChange={handleChange}
            required
          />
        </div>
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
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs mt-6">
        Already have an account?
        <Link to="/Login" className="font-semibold text-blue-500 hover:underline">
          Log in here
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Register
