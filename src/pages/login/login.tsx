import React, { useState } from 'react'

const LoginPages = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <div className='bg-gray-100 h-screen flex items-center justify-center'>
      <div className="h-screen bg-gradient-to-br from-blue-600 to-cyan-300 flex justify-center items-center w-full">
        <form method="POST" action="#">
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Login
              </h1>
              <hr />
              <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 text-sm outline-none border-none w-full"
                  type="text"
                  name="username"
                  defaultValue=""
                  placeholder="username"
                  required
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 text-sm outline-none border-none w-full"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id=""
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className=""
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.364 8.364a4 4 0 10-5.657 5.657"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12a6 6 0 11-6-6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.364 8.364a4 4 0 10-5.657 5.657"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15a3 3 0 01-3-3 3 3 0 016 0 3 3 0 01-3 3z"
                      />
                    </svg>
                  )}
                </button>
                
              </div>
            </div>
            <button
              type="submit"
              value="login"
              id="login"
              className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
            >
              Login
            </button>
            <hr />
            <div className="flex justify-center items-center mt-4">
              <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center"></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPages
