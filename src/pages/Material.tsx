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

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setState(prev => ({ ...prev, isLoading: false }));
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/verify`, {
          headers: { 'Authorization': `Bearer ${token}` }
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
      } catch {
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
    } catch {
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

  const courseWeeks = [
    {
      week: 1,
      title: "Basic",
      topics: [
        "Introduction to Computer and its parts",
        "Multimedia Tools – Input & Output Devices",
        "Accessories: Paint, Notepad, WordPad, Calculator, etc.",
        "Operating System",
        "Computer Precautions"
      ]
    },
    {
      week: 2,
      title: "Microsoft Word Part-1",
      topics: [
        "Introduction to Microsoft Word",
        "Opening, Editing, Saving & Exiting the Document",
        "Font, Insert Menu, Home Menu, View Menu, etc.",
        "Print, Print Preview, Print Setting"
      ]
    },
    {
      week: 3,
      title: "Microsoft Word Part-2",
      topics: [
        "Page Setup",
        "Creating Tables",
        "Resume Making",
        "Various Uses of Word"
      ]
    },
    {
      week: 4,
      title: "Microsoft Excel Basics",
      topics: [
        "Introduction to Microsoft Excel",
        "Basic Spreadsheet Concept",
        "Starting Excel",
        "Working with Workbook",
        "Using Workbook",
        "Entering and Editing Data, Using Filters"
      ]
    },
    {
      week: 5,
      title: "Excel Advanced",
      topics: [
        "Formatting a Worksheet",
        "Working with Range of Cells",
        "Functions",
        "Graphs and Charts",
        "Printing Excel Worksheet"
      ]
    },
    {
      week: 6,
      title: "Microsoft PowerPoint",
      topics: [
        "Introduction to PowerPoint",
        "Creating Presentation",
        "Editing, Working with Slides & Slideshow",
        "Drawing and Working with Objects",
        "Making Notes Pages",
        "Printing Presentation",
        "Printing, Scanning, Storing"
      ]
    },
    {
      week: 7,
      title: "Internet & Cyber Security",
      topics: [
        "Introduction to Internet",
        "Search Engines, Browsing & Surfing",
        "Social Networking Sites: YouTube, Facebook",
        "Emails: Account Setup, Sending & Receiving, Attachments",
        "Viruses – Security, Websites",
        "Pen Drives, CD/DVD, Bluetooth – Uses & Cautions",
        "Cyber Scam Awareness: Phishing, Malware, Stalking"
      ]
    },
    {
      week: 8,
      title: "Digital Services & eCommerce",
      topics: [
        "e-Commerce: Online Shopping (Amazon, Snapdeal)",
        "Online Booking: Railways, Flights, Bus, Cinema",
        "Online Form Fillings (e.g., Google Forms)",
        "Online Banking & Precautions",
        "Digital Payments: UPI, Paytm, Debit/Credit Cards"
      ]
    },
    {
      week: 9,
      title: "Generative AI",
      topics: [
        "Introduction to Generative AI",
        "Usage of ChatGPT, Gemini & DeepSeek"
      ]
    },
    {
      week: 10,
      title: "Career in Computer",
      topics: [
        "Knowledge about other courses: DTP, TALLY, GST, ANIMATION, PHOTOSHOP, HARDWARE, NETWORKING",
        "Practice Session & Doubt Clearing"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 px-6 py-12 relative">
      <div className="absolute top-6 right-6 flex gap-4">
        <Button onClick={() => navigate('/')} className="bg-white hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg">Home</Button>
        {state.isLoggedIn && (
          <Button onClick={logout} className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-4 py-2 rounded-lg">Logout</Button>
        )}
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
          Access Teaching Materials
        </h1>

        {!state.isLoggedIn ? (
          <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-4">
            <input type="text" name="username" placeholder="Username" value={state.username} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            {state.error && <p className="text-red-500 text-sm">{state.error}</p>}
            <Button onClick={login} disabled={state.isLoading} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg">
              {state.isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </div>
        ) : (
          <div className="w-full max-w-4xl p-8 rounded-2xl bg-white shadow-xl mt-6 space-y-8">
            {courseWeeks.map((week) => (
              <section key={week.week} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Week {week.week}: {week.title}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {week.topics.map((topic, idx) => (
                    <li key={idx} className="hover:text-blue-600 transition-colors">{topic}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
