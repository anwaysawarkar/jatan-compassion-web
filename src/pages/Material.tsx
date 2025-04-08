'use client'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const API_BASE_URL = 'http://localhost:5000';

export default function MaterialsPage() {
  const [state, setState] = useState({
    isLoggedIn: false,
    isLoading: true,
    username: '',
    password: '',
    error: ''
  });
  const navigate = useNavigate();

  // Verify token on mount
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setState(prev => ({ ...prev, isLoading: false }));
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/verify`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setState(prev => ({
            ...prev,
            isLoggedIn: true,
            isLoading: false,
            username: data.user.username
          }));
        } else {
          logout();
        }
      } catch (error) {
        logout();
      }
    };

    verifyToken();
  }, []);

  const login = async () => {
    try {
      setState(prev => ({ ...prev, error: '', isLoading: true }));

      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: state.username,
          password: state.password
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        setState(prev => ({
          ...prev,
          isLoggedIn: true,
          isLoading: false,
          error: ''
        }));
      } else {
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: data.message || 'Login failed'
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Network error. Please try again.'
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setState({
      isLoggedIn: false,
      isLoading: false,
      username: '',
      password: '',
      error: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  if (state.isLoading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
  }

  return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 px-6 py-12 relative">
        {/* Navigation buttons */}
        <div className="absolute top-6 right-6 flex gap-4">
          <Button
              onClick={() => navigate('/')}
              className="bg-white hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg"
          >
            Home
          </Button>
          {state.isLoggedIn && (
              <Button
                  onClick={logout}
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

          {!state.isLoggedIn ? (
              <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-4">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={state.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {state.error && (
                    <p className="text-red-500 text-sm">{state.error}</p>
                )}
                <Button
                    onClick={login}
                    disabled={state.isLoading}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg"
                >
                  {state.isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </div>
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
  );
}