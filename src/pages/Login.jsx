import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setMessage('Form submitted successfully!')
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        {/* Title and Toggle between Login and Sign Up */}
        <div className="text-center mb-4">
          <p className="text-4xl font-semibold text-gray-800">{currentState}</p>
          <hr className="mt-2 border-gray-300 w-20 mx-auto" />
        </div>

        {/* Name input (only for Sign Up) */}
        {currentState === 'Sign Up' && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-900"
            placeholder="Enter your name"
            required
          />
        )}

        {/* Email input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-900"
          placeholder="Enter your email"
          required
        />

        {/* Password input */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
          className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-900"
          placeholder="Enter your password"
          required
        />

        {/* Links for Forgot Password and Create Account/Login Here */}
        <div className="w-full flex justify-between text-sm text-gray-500">
          <p className="cursor-pointer hover:text-green-900">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p
              className="cursor-pointer hover:text-green-900"
              onClick={() => setCurrentState('Sign Up')}
            >
              Create an Account
            </p>
          ) : (
            <p
              className="cursor-pointer hover:text-green-900"
              onClick={() => setCurrentState('Login')}
            >
              Login Here
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-900'
          } text-white py-3 rounded-lg font-bold text-lg transition duration-300`}
        >
          {loading ? 'Processing...' : currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>

        {/* Display Message */}
        {message && (
          <div className="mt-4 text-center text-green-700 font-semibold">
            {message}
          </div>
        )}
      </form>
    </div>
  )
}

export default Login
