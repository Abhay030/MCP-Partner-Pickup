import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginPartner } from '../services/partnerService'
import { toast } from 'react-toastify'

const PartnerLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginPartner(form)
      localStorage.setItem('partnerId', res.data._id)
      toast.success("Login Successfull")
      navigate('/partner-dashboard')
    } catch {
      toast.error('Login failed!! Invalid Credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <h2 className="block text-gray-700 text-center font-bold text-xl mb-6">
        Pickup Partner Login
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
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default PartnerLogin
