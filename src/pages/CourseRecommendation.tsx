'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Client } from '@gradio/client';
import { Button } from '@/components/ui/button';

const CourseRecommendation: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [skillLevel, setSkillLevel] = useState('Beginner');
  const [goals, setGoals] = useState('');
  const [useAI, setUseAI] = useState(true);
  const [roadmap, setRoadmap] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const client = await Client.connect('suryanshupaul/Course_Recommendation');
      const result = await client.predict('/recommend_and_generate', {
        topic,
        skill_level: skillLevel,
        goals,
        use_ai: useAI,
      });
      
      // Handle the first element (roadmap)
      setRoadmap(result.data[0] || '');
      
      // Handle the second element (recommended courses)
      const parsed = result.data[1]?.split('\n').filter((line: string) => line.trim() !== '');
      setRecommendations(parsed || []);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setRoadmap('');
      setRecommendations(['Failed to fetch recommendations. Try again later.']);
    }
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 px-6 py-12">
      <div className="absolute top-6 right-6 flex gap-4">
        <Button onClick={() => navigate('/')} className="bg-white hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg">Home</Button>
        <Button onClick={() => navigate('/materials')} className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold px-4 py-2 rounded-lg">Back to Materials</Button>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Personalized Course Recommendations
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Topic you want to learn *</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Microsoft Excel, Programming Basics"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Skill Level</label>
            <select
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Learning Goals (optional)</label>
            <input
              type="text"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="e.g., Create professional reports"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useAI}
              onChange={(e) => setUseAI(e.target.checked)}
              className="w-5 h-5 text-teal-600"
            />
            <label className="text-gray-700 font-medium">Use AI for enhanced personalization</label>
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Fetching Recommendations...' : 'Get Recommendations'}
          </Button>
        </form>

        {roadmap && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Learning Roadmap:</h2>
            <div className="prose max-w-none text-gray-700">
              {roadmap}
            </div>
          </div>
        )}

        {recommendations.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Courses:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recommendations.map((course, index) => (
                <li key={index} className="hover:text-teal-600 transition-colors">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default CourseRecommendation;
