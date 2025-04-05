'use client'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function MaterialsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()
      if (data.success) {
        localStorage.setItem('token', data.token)
        setIsLoggedIn(true)
        setError('')
      } else {
        setError('Invalid credentials. Please try again.')
      }
    } catch (err) {
      setError('Server error. Please try again later.')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 px-6 py-12 relative">
      {/* Home Button */}
      <div className="absolute top-6 right-6 flex gap-4">
        <Button
          onClick={() => navigate('/')}
          className="bg-white hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg"
        >
          Home
        </Button>
        {isLoggedIn && (
          <Button
            onClick={handleLogout}
            className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-4 py-2 rounded-lg"
          >
            Logout
          </Button>
        )}
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
          Access Teaching Materials
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
          Admin login required to view or download materials.
        </p>

        {!isLoggedIn ? (
          <>
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                onClick={handleLogin}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg"
              >
                Login
              </Button>
            </div>
          </>
        ) : (
          <div className="w-full max-w-4xl p-8 rounded-2xl bg-white shadow-xl mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Basic Computer Course</h2>

            <section className="mb-6">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Week 1:- Basic</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li><a href="ppt\Microsoft Word Basics2.ppt" className="text-blue-600 hover:underline">1.Introduction to Computer and its parts</a></li>
                <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">2.Multimedia Tools:- Input & Output Devices</a></li>
                <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">3.Accessories</a>
                <ol>
                  <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">Paint</a></li>
                  <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">Notepad</a></li>
                  <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">Wordpad</a></li>
                  <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">Calculator,etc.</a></li>
                  <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">Operating System</a></li>
                  <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">Computer Precautions</a></li>
                </ol>
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Week 2:- MS Office</h3>
              <h4 className="text-xl font-medium text-gray-700 mb-2">Microsoft Word Part-1</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li><a href="ppt\Microsoft Word Basics2.ppt" className="text-blue-600 hover:underline">1.Introduction to Microsoft Word</a></li>
                <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">2.Opening,Editing,Saving & Exiting the document</a></li>
                <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">3.Find,Insert Menu,Home Menu,View Menu,etc.</a></li>
                <li><a href="ppt\Microsoft Word Basics2.ppt" className="text-blue-600 hover:underline">4.Print,Print Preview,Print Setting</a></li>
              </ul>
            </section>
            <section className="mb-6">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Week 3</h3>
              <h4 className="text-xl font-medium text-gray-700 mb-2">Microsoft Word Part-2</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li><a href="ppt\Microsoft Word Basics2.ppt" className="text-blue-600 hover:underline">1.Page Setup</a></li>
                <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">Creating Tables</a></li>
                <li><a href="/ppt/health_hygiene.pptx" className="text-blue-600 hover:underline">3.Find,Insert Menu,Home Menu,View Menu,etc.</a></li>
                <li><a href="ppt\Microsoft Word Basics2.ppt" className="text-blue-600 hover:underline">4.Print,Print Preview,Print Setting</a></li>
              </ul>
            </section>
          </div>
        )}
      </div>
    </main>
  )
}
